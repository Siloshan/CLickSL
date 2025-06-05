import React, { useState, useEffect } from 'react';
import { Listing, categories, districts } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

type ListingFormData = Omit<Listing, 'id' | 'approved' | 'createdBy' | 'createdAt' | 'rating' | 'reviewCount' | 'featured'>;

interface ListingFormProps {
  onSubmit: (listingData: ListingFormData) => void;
  initialData?: Partial<Listing>;
  isLoading?: boolean;
  onCancel?: () => void;
}

const initialFormState: ListingFormData = {
  title: '',
  shortDescription: '',
  description: '',
  category: 'attraction', // Default category
  location: {
    city: '',
    district: districts[0], // Default district
    coordinates: { lat: 0, lng: 0 },
  },
  images: [],
  price: { amount: 0, currency: 'USD', unit: 'person' },
  features: [],
  contact: { phone: '', email: '', website: '' },
  openingHours: '',
  bestTimeToVisit: '',
};

const ListingForm: React.FC<ListingFormProps> = ({ onSubmit, initialData, isLoading, onCancel }) => {
  const [formData, setFormData] = useState<ListingFormData>(initialFormState);

  useEffect(() => {
    if (initialData) {
      const populatedData: ListingFormData = {
        ...initialFormState, // Start with defaults
        title: initialData.title || '',
        shortDescription: initialData.shortDescription || '',
        description: initialData.description || '',
        category: initialData.category || 'attraction',
        location: {
          city: initialData.location?.city || '',
          district: initialData.location?.district || districts[0],
          coordinates: {
            lat: initialData.location?.coordinates?.lat || 0,
            lng: initialData.location?.coordinates?.lng || 0,
          },
        },
        images: initialData.images || [],
        price: {
          amount: initialData.price?.amount || 0,
          currency: initialData.price?.currency || 'USD',
          unit: initialData.price?.unit || 'person',
        },
        features: initialData.features || [],
        contact: {
          phone: initialData.contact?.phone || '',
          email: initialData.contact?.email || '',
          website: initialData.contact?.website || '',
        },
        openingHours: initialData.openingHours || '',
        bestTimeToVisit: initialData.bestTimeToVisit || '',
      };
      setFormData(populatedData);
    } else {
      setFormData(initialFormState); // Reset to initial if no data
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('location.')) {
      const locKey = name.split('.')[1] as keyof ListingFormData['location'];
      if (locKey === 'coordinates') {
        // This case needs specific handling if you allow direct lat/lng input
        // For now, assuming city/district are the primary location inputs via text
      } else {
        setFormData(prev => ({ ...prev, location: { ...prev.location, [locKey]: value } }));
      }
    } else if (name.startsWith('price.')) {
      const priceKey = name.split('.')[1] as keyof ListingFormData['price'];
      setFormData(prev => ({ ...prev, price: { ...prev.price, [priceKey]: value } }));
    } else if (name.startsWith('contact.')) {
      const contactKey = name.split('.')[1] as keyof ListingFormData['contact'];
      setFormData(prev => ({ ...prev, contact: { ...prev.contact, [contactKey]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
     if (name === 'category') {
      setFormData(prev => ({ ...prev, category: value as ListingFormData['category'] }));
    } else if (name === 'location.district') {
      setFormData(prev => ({ ...prev, location: { ...prev.location, district: value } }));
    }
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, images: e.target.value.split(',').map(url => url.trim()).filter(url => url) }));
  };

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, features: e.target.value.split(',').map(feat => feat.trim()).filter(feat => feat) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation example
    if (!formData.title || !formData.shortDescription || !formData.description || !formData.location.city) {
      alert('Please fill in all required fields: Title, Short Description, Description, City.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-6 bg-white rounded-lg shadow-md max-h-[80vh] overflow-y-auto">
      <div>
        <Label htmlFor="title">Title*</Label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>

      <div>
        <Label htmlFor="shortDescription">Short Description*</Label>
        <Textarea id="shortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange} required />
      </div>

      <div>
        <Label htmlFor="description">Description*</Label>
        <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={5} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="category">Category*</Label>
          <Select name="category" value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
            <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
            <SelectContent>
              {categories.map(cat => <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="location.city">City*</Label>
          <Input id="location.city" name="location.city" value={formData.location.city} onChange={handleChange} required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="location.district">District*</Label>
           <Select name="location.district" value={formData.location.district} onValueChange={(value) => handleSelectChange('location.district', value)}>
            <SelectTrigger><SelectValue placeholder="Select district" /></SelectTrigger>
            <SelectContent>
              {districts.map(dist => <SelectItem key={dist} value={dist}>{dist}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
         <div>
          <Label htmlFor="location.coordinates.lat">Latitude (Optional)</Label>
          <Input id="location.coordinates.lat" name="location.coordinates.lat" type="number" step="any" value={formData.location.coordinates.lat}
                 onChange={e => setFormData(p => ({...p, location: {...p.location, coordinates: {...p.location.coordinates, lat: parseFloat(e.target.value)}}}))} />
        </div>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div>
          <Label htmlFor="location.coordinates.lng">Longitude (Optional)</Label>
          <Input id="location.coordinates.lng" name="location.coordinates.lng" type="number" step="any" value={formData.location.coordinates.lng}
                 onChange={e => setFormData(p => ({...p, location: {...p.location, coordinates: {...p.location.coordinates, lng: parseFloat(e.target.value)}}}))} />
        </div>
        <div>
            <Label htmlFor="images">Images (comma-separated URLs)</Label>
            <Input id="images" name="images" value={formData.images.join(', ')} onChange={handleImagesChange} />
        </div>
      </div>


      <h3 className="text-lg font-medium border-t pt-4 mt-6">Pricing (Optional)</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="price.amount">Amount</Label>
          <Input id="price.amount" name="price.amount" type="number" value={formData.price.amount} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="price.currency">Currency</Label>
          <Input id="price.currency" name="price.currency" value={formData.price.currency} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="price.unit">Unit</Label>
          <Input id="price.unit" name="price.unit" value={formData.price.unit} onChange={handleChange} />
        </div>
      </div>

      <div>
        <Label htmlFor="features">Features (comma-separated)</Label>
        <Input id="features" name="features" value={formData.features.join(', ')} onChange={handleFeaturesChange} />
      </div>

      <h3 className="text-lg font-medium border-t pt-4 mt-6">Contact Details (Optional)</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="contact.phone">Phone</Label>
          <Input id="contact.phone" name="contact.phone" value={formData.contact.phone} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="contact.email">Email</Label>
          <Input id="contact.email" name="contact.email" type="email" value={formData.contact.email} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="contact.website">Website</Label>
          <Input id="contact.website" name="contact.website" type="url" value={formData.contact.website} onChange={handleChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="openingHours">Opening Hours</Label>
          <Input id="openingHours" name="openingHours" value={formData.openingHours} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="bestTimeToVisit">Best Time To Visit</Label>
          <Input id="bestTimeToVisit" name="bestTimeToVisit" value={formData.bestTimeToVisit} onChange={handleChange} />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-6 border-t mt-6">
        {onCancel && <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>Cancel</Button>}
        <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
          {isLoading ? 'Submitting...' : (initialData?.id ? 'Update Listing' : 'Submit Listing')}
        </Button>
      </div>
    </form>
  );
};

export default ListingForm;
export type { ListingFormData };
