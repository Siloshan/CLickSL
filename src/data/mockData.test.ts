import { describe, it, expect, beforeEach } from 'vitest';
import {
  mockListingsData as initialMockListings, // Rename to avoid conflict if we re-assign
  searchListings,
  processNaturalLanguageQuery,
  addListing,
  updateListingStatus,
  deleteListing,
  updateListing,
  Listing,
  // UpdatableListingData, // Type is defined locally in mockData.ts for the function, not exported
  categories,
  districts
} from './mockData';

// Define UpdatableListingData type locally for tests if not exported from mockData.ts
type UpdatableListingData = Partial<Omit<Listing, 'id' | 'createdBy' | 'createdAt' | 'rating' | 'reviewCount' | 'approved' | 'featured'>>;


// Deep copy of initial data for isolated tests
let mockListingsDataCopy: Listing[]; // Use a different name for the copy

beforeEach(() => {
  // Reset data before each test to ensure test isolation
  mockListingsDataCopy = JSON.parse(JSON.stringify(initialMockListings));
  // Override the exported let variable for the duration of the test
  // This is a bit of a hack for testing module-level mutable state.
  // In a real app, this data would likely come from a service or store
  // that's easier to mock or provide.
  // For Vitest, we can use vi.spyOn or vi.mock if more direct manipulation is needed.
  // For now, we'll rely on the functions using the module-level 'mockListingsData'.
  // To make functions use mockListingsDataCopy, they would need to be refactored
  // or we use vi.mock effectively. The current structure of mockData.ts
  // (export let mockListingsData) means direct assignment from here won't work
  // as expected for functions within that module.
  // The tests below will operate on the module's mockListingsData.
  // To ensure isolation, we'll reset the module's data before each test.

  // Resetting the actual exported variable:
  const mockDataModule = require('./mockData');
  mockDataModule.mockListingsData = JSON.parse(JSON.stringify(initialMockListings));
});

describe('mockData utility functions', () => {
  describe('searchListings', () => {
    it('should return all approved listings if query, category, and location are empty', () => {
      const results = searchListings('');
      expect(results.length).toBe(initialMockListings.filter(l => l.approved).length);
    });

    it('should filter by query in title (prioritized)', () => {
      const results = searchListings('Sigiriya');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].title).toContain('Sigiriya');
    });

    it('should filter by query in description', () => {
      const results = searchListings('Lion Rock'); // Present in Sigiriya's description
      expect(results.length).toBeGreaterThan(0);
      expect(results.some(l => l.id === '1')).toBe(true);
    });

    it('should filter by category', () => {
      const results = searchListings('', 'hotel');
      expect(results.length).toBeGreaterThan(0);
      results.forEach(listing => expect(listing.category).toBe('hotel'));
    });

    it('should filter by location (district)', () => {
      const results = searchListings('', '', 'Matale');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some(l => l.location.district === 'Matale')).toBe(true);
    });

    it('should filter by location (city)', () => {
      const results = searchListings('', '', 'Galle');
      expect(results.length).toBeGreaterThan(0);
      expect(results.some(l => l.location.city === 'Galle')).toBe(true);
    });

    it('should handle combined query, category, and location', () => {
      const results = searchListings('luxury', 'hotel', 'Galle');
      expect(results.length).toBeGreaterThan(0);
      expect(results.every(l =>
        l.category === 'hotel' &&
        (l.location.city === 'Galle' || l.location.district === 'Galle') && // Adjusted for flexibility
        (l.title.toLowerCase().includes('luxury') ||
         (l.shortDescription && l.shortDescription.toLowerCase().includes('luxury')) || // Check for undefined
         l.description.toLowerCase().includes('luxury') ||
         l.features.some(f => f.toLowerCase().includes('luxury'))) // Also check features
      )).toBe(true);
    });

    it('should return empty array if no matches', () => {
      const results = searchListings('NonExistentPlace', 'temple', 'Colombo');
      expect(results.length).toBe(0);
    });

    it('should prioritize title matches', () => {
        const mockDataModule = require('./mockData'); // Re-access for mutable array
        const tempListing: Listing = {
            id: 'temp1', title: 'Other Place', description: 'This has Sigiriya.', shortDescription: 'short desc',
            category: 'attraction', location: { city: 'Somewhere', district: 'Else', coordinates: { lat: 0, lng: 0 } },
            images: [], rating: 4, reviewCount: 10, approved: true, createdBy: 'test', createdAt: '2024-01-01', featured: false, features: []
        };
        // Use the module's addListing which manipulates its own mockListingsData
        mockDataModule.addListing(tempListing);

        const results = searchListings('Sigiriya');
        const sigiriyaRockListing = results.find(l => l.id === '1');
        const otherPlaceListing = results.find(l => l.id === 'temp1');

        expect(sigiriyaRockListing).toBeDefined();
        expect(otherPlaceListing).toBeDefined();

        const sigiriyaIndex = results.findIndex(l => l.id === '1');
        const tempIndex = results.findIndex(l => l.id === 'temp1');

        if (sigiriyaRockListing && otherPlaceListing) { // Ensure both are found
             expect(sigiriyaIndex).toBeLessThan(tempIndex);
        }
    });
  });

  describe('processNaturalLanguageQuery', () => {
    it('should extract category and location', () => {
      const { category, location, processedQuery } = processNaturalLanguageQuery('luxury hotels in Galle');
      expect(category).toBe('hotel');
      expect(location).toBe('Galle');
      expect(processedQuery.toLowerCase()).toContain('luxury hotels'); // current logic keeps "luxury hotels in" then removes "in" by space trim
      expect(processedQuery.toLowerCase()).not.toContain('galle');
    });

    it('should handle query with only category', () => {
      const { category, location, processedQuery } = processNaturalLanguageQuery('show me temples');
      expect(category).toBe('temple');
      expect(location).toBeUndefined();
      // Current logic: "show me temples" -> location removal (none) -> category removal ("temples") -> "show me"
      expect(processedQuery.toLowerCase()).toBe('show me');
    });

    it('should handle query with only location', () => {
      const { category, location, processedQuery } = processNaturalLanguageQuery('places in Kandy');
      expect(category).toBeUndefined();
      expect(location).toBe('Kandy');
      // "places in Kandy" -> location removal ("kandy") -> "places in"
      expect(processedQuery.toLowerCase()).toBe('places in');
    });

    it('should retain non-category/location keywords in processedQuery', () => {
      const { processedQuery, category, location } = processNaturalLanguageQuery('cheap wildlife safari in Yala');
      expect(category).toBe('wildlife');
      expect(location).toBe('Yala');
      // "cheap wildlife safari in Yala" -> location "Yala" removed -> "cheap wildlife safari in "
      // -> category "wildlife" or "safari" (let's say "safari" is matched first from "wildlife" keywords)
      // The current logic in mockData.ts for processNaturalLanguageQuery:
      // it removes location: "cheap wildlife safari in "
      // it does NOT remove category keyword if it's not the only word.
      // So it should be "cheap wildlife safari in"
      expect(processedQuery.toLowerCase()).toBe('cheap wildlife safari in');
    });
  });

  describe('addListing', () => {
    it('should add a new listing to mockListingsData', () => {
      const mockDataModule = require('./mockData');
      const initialLength = mockDataModule.mockListingsData.length;
      const newListing: Listing = {
        id: 'new1', title: 'New Beach', shortDescription: 'A new beach spot', description: '',
        category: 'beach', location: { city: 'New City', district: 'New District', coordinates: { lat: 0, lng: 0 } },
        images: [], rating: 4.5, reviewCount: 100, approved: true, createdBy: 'user1', createdAt: '2023-01-01', featured: false, features:[]
      };
      addListing(newListing); // This uses the imported addListing, which manipulates the module's mockListingsData
      expect(mockDataModule.mockListingsData.length).toBe(initialLength + 1);
      expect(mockDataModule.mockListingsData[0].id).toBe('new1'); // prepends
    });
  });

  describe('updateListingStatus', () => {
    it('should update the approved status of a listing', () => {
      const mockDataModule = require('./mockData');
      const listingIdToUpdate = '1'; // Sigiriya
      const initialListing = initialMockListings.find(l => l.id === listingIdToUpdate)!;
      const initialStatus = initialListing.approved;

      const result = updateListingStatus(listingIdToUpdate, !initialStatus);
      expect(result).toBe(true);
      const updatedListing = mockDataModule.mockListingsData.find(l => l.id === listingIdToUpdate);
      expect(updatedListing!.approved).toBe(!initialStatus);
    });

    it('should return false if listing to update status is not found', () => {
      const result = updateListingStatus('nonexistentid', true);
      expect(result).toBe(false);
    });
  });

  describe('deleteListing', () => {
    it('should remove a listing from mockListingsData', () => {
      const mockDataModule = require('./mockData');
      const listingIdToDelete = '1';
      const initialLength = initialMockListings.length; // Compare with original length
      const result = deleteListing(listingIdToDelete);
      expect(result).toBe(true);
      expect(mockDataModule.mockListingsData.length).toBe(initialLength - 1);
      expect(mockDataModule.mockListingsData.find(l => l.id === listingIdToDelete)).toBeUndefined();
    });

    it('should return false if listing to delete is not found', () => {
      const result = deleteListing('nonexistentid');
      expect(result).toBe(false);
    });
  });

  describe('updateListing', () => {
    it('should update specific fields of a listing', () => {
      const mockDataModule = require('./mockData');
      const listingIdToUpdate = '2'; // Galle Fort Heritage Hotel
      const originalListing = initialMockListings.find(l=> l.id === listingIdToUpdate)!;

      const updates: UpdatableListingData = {
        title: 'Updated Galle Hotel',
        shortDescription: 'An even more luxurious experience.',
        price: { amount: 300, currency: 'USD', unit: 'night' }
      };

      const result = updateListing(listingIdToUpdate, updates);
      expect(result).toBe(true);
      const updatedListing = mockDataModule.mockListingsData.find(l => l.id === listingIdToUpdate);
      expect(updatedListing).toBeDefined();
      expect(updatedListing!.title).toBe('Updated Galle Hotel');
      expect(updatedListing!.shortDescription).toBe('An even more luxurious experience.');
      expect(updatedListing!.price!.amount).toBe(300);
      expect(updatedListing!.category).toBe(originalListing.category); // Check un-updated field
    });

    it('should return false if listing to update is not found', () => {
       const updates: UpdatableListingData = { title: 'Won\'t find me' };
      const result = updateListing('nonexistentid', updates);
      expect(result).toBe(false);
    });
  });
});
