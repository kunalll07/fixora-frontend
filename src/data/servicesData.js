import { Wrench, Zap, Snowflake, Sparkles, MonitorSmartphone, Paintbrush } from 'lucide-react';

export const servicesData = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: Wrench,
    description: 'Professional plumbing solutions for leaks, repairs and installations.',
    price: 499,
    longDescription: 'Our expert plumbers are equipped to handle everything from minor leaks to major pipe installations. We provide quick, clean, and professional plumbing services for your home.',
    features: ['Leak Detection & Repair', 'Pipe Installation', 'Tap & Sink Fitting', 'Bathroom Fittings', 'Water Heater Setup'],
    problems: ['Water Leakage', 'Blocked Drains', 'Low Water Pressure', 'Faulty Taps', 'Pipe Bursts'],
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: Zap,
    description: 'Reliable electrical repair and installation services for your home.',
    price: 399,
    longDescription: 'Stay safe and powered up with our certified electricians. From wiring issues to appliance installation, we cover all your home electrical needs.',
    features: ['Wiring & Rewiring', 'Switchboard Repair', 'Fan/Light Installation', 'MCB/Fuse Replacement', 'Inverter Setup'],
    problems: ['Power Outages', 'Short Circuits', 'Faulty Switches', 'Sparks or Burning Smell', 'Fluctuating Voltage'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ac-repair',
    name: 'AC Repair',
    icon: Snowflake,
    description: 'AC servicing, repair and maintenance by experienced technicians.',
    price: 599,
    longDescription: 'Beat the heat with our comprehensive AC services. We handle cleaning, gas filling, and complex repairs for all types and brands of air conditioners.',
    features: ['Deep Cleaning', 'Gas Refilling', 'Compressor Repair', 'Installation/Uninstallation', 'PCB Repair'],
    problems: ['AC not cooling', 'Water leakage', 'Unusual noise', 'Gas-related issues', 'General servicing'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492d0c201?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cleaning',
    name: 'Home Cleaning',
    icon: Sparkles,
    description: 'Convenient and professional cleaning services for a cleaner home.',
    price: 999,
    longDescription: 'Give your home a sparkling makeover. Our professional cleaners use safe, effective products and modern equipment to deep clean your living space.',
    features: ['Deep Home Cleaning', 'Sofa/Carpet Cleaning', 'Bathroom Deep Cleaning', 'Kitchen Cleaning', 'Move-in/Move-out Cleaning'],
    problems: ['Stubborn Stains', 'Dust Accumulation', 'Post-renovation Mess', 'Hard Water Stains', 'General Dirtiness'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'appliance',
    name: 'Appliance Repair',
    icon: MonitorSmartphone,
    description: 'Get your household appliances checked and repaired by skilled technicians.',
    price: 449,
    longDescription: 'Don\'t let a broken appliance disrupt your routine. We repair washing machines, refrigerators, microwaves, and more right at your doorstep.',
    features: ['Washing Machine Repair', 'Refrigerator Servicing', 'Microwave Repair', 'Water Purifier Service', 'TV Repair'],
    problems: ['Not Turning On', 'Making Noise', 'Not Working Properly', 'Error Codes', 'Physical Damage'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: Paintbrush,
    description: 'Give your home a fresh look with professional painting services.',
    price: 2999,
    longDescription: 'Transform your space with our premium painting services. We provide consultation, prep work, and flawless execution for a beautiful finish.',
    features: ['Interior Painting', 'Exterior Painting', 'Waterproofing', 'Texture Painting', 'Wood Polishing'],
    problems: ['Peeling Paint', 'Faded Colors', 'Dampness/Seepage', 'Cracks in Walls', 'Outdated Look'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800'
  }
];
