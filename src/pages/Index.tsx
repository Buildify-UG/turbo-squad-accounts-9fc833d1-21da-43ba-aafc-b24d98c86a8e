import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface Item {
  id: number;
  title: string;
  image: string;
  tag: string;
  price: string;
  details: string;
  category: 'cars' | 'accounts';
}

const CARS: Item[] = [
  {
    id: 1,
    title: 'Red Beast Pickup',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop',
    tag: 'FOR SALE',
    price: '₹8,50,000',
    details: '2022 Model • 25k Km',
    category: 'cars'
  },
  {
    id: 2,
    title: 'Silver Speed Sedan',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop',
    tag: 'FOR SALE',
    price: '₹12,50,000',
    details: '2023 Model • 8k Km',
    category: 'cars'
  },
  {
    id: 3,
    title: 'Black Luxury SUV',
    image: 'https://images.unsplash.com/photo-1606611013016-969c19d14444?w=600&h=400&fit=crop',
    tag: 'FOR SALE',
    price: '₹18,75,000',
    details: '2024 Model • 2k Km',
    category: 'cars'
  }
];

const ACCOUNTS: Item[] = [
  {
    id: 4,
    title: 'Diamond Pass Account',
    image: 'https://images.unsplash.com/photo-1538481527238-41ac28cb7be0?w=600&h=400&fit=crop',
    tag: 'PREMIUM',
    price: '₹999',
    details: 'Level 50 • All Weapons Unlocked',
    category: 'accounts'
  },
  {
    id: 5,
    title: 'Legendary Starter Pack',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
    tag: 'PREMIUM',
    price: '₹2,499',
    details: 'Level 75 • Exclusive Skins',
    category: 'accounts'
  },
  {
    id: 6,
    title: 'Max Level Account',
    image: 'https://images.unsplash.com/photo-1493711662714-979de41a30b1?w=600&h=400&fit=crop',
    tag: 'ELITE',
    price: '₹4,999',
    details: 'Level 100 • Full Arsenal',
    category: 'accounts'
  }
];

const ItemCard: React.FC<{ item: Item }> = ({ item }) => (
  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105">
    <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
    <div className="p-4">
      <span className={`text-xs font-bold px-3 py-1 rounded inline-block ${
        item.category === 'cars' 
          ? 'bg-accent text-black' 
          : 'bg-yellow-500 text-black'
      }`}>
        {item.tag}
      </span>
      <h3 className="text-lg font-bold mt-3 text-foreground">{item.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{item.details}</p>
      <p className="text-2xl font-bold text-accent mt-3">{item.price}</p>
      <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition-colors">
        Contact
      </button>
    </div>
  </div>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState<'cars' | 'accounts'>('cars');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black border-b-4 border-primary px-6 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-black text-primary drop-shadow-lg" style={{ textShadow: '0 0 10px rgb(255,0,0)' }}>
          TURBO SQUAD
        </h1>
        <a 
          href="https://wa.me/919999999999"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-lg transition-colors"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </header>

      {/* Tabs */}
      <div className="flex justify-center gap-6 py-6 px-4 bg-black/50 border-b border-border">
        <button
          onClick={() => setActiveTab('cars')}
          className={`px-8 py-3 font-bold rounded-full border-2 transition-all ${
            activeTab === 'cars'
              ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/50'
              : 'border-primary text-primary hover:border-primary/70'
          }`}
        >
          🚗 CAR SALE
        </button>
        <button
          onClick={() => setActiveTab('accounts')}
          className={`px-8 py-3 font-bold rounded-full border-2 transition-all ${
            activeTab === 'accounts'
              ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/50'
              : 'border-primary text-primary hover:border-primary/70'
          }`}
        >
          🎮 FF ACCOUNTS
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {(activeTab === 'cars' ? CARS : ACCOUNTS).map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-sm">Secure • Verified • Fast Delivery</p>
      </div>
    </div>
  );
};

export default Index;
