import { IProduct } from "@/types/product";

const PRODUCTS: IProduct[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    description:
      "Premium over-ear headphones with advanced active noise cancellation, 30-hour battery life, and crystal-clear audio. Features comfortable memory foam ear cushions and seamless Bluetooth 5.2 connectivity for the ultimate listening experience.",
    price: 299.99,
    image:
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
      // "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Audio",
  },
  {
    id: "2",
    name: 'Ultra-Slim Laptop 15"',
    description:
      "Powerful and portable laptop featuring a stunning 15-inch Retina display, M2 chip for blazing-fast performance, 16GB RAM, and 512GB SSD storage. Perfect for professionals and creatives on the go.",
    price: 1299.99,
    image:
    "https://images.unsplash.com/photo-1649394233584-217c46cb9612?w=500&q=80",
      // "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
    category: "Computers",
  },
  {
    id: "3",
    name: "Smartphone Pro Max",
    description:
      "The latest flagship smartphone with a 6.7-inch Super AMOLED display, triple camera system with 108MP main sensor, 5G connectivity, and all-day battery life. Experience mobile technology at its finest.",
    price: 999.99,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
    category: "Phones",
  },
  {
    id: "4",
    name: "Smartwatch Series X",
    description:
      "Advanced fitness and health tracking smartwatch with ECG monitoring, blood oxygen sensor, GPS, and water resistance up to 50 meters. Stay connected with call and notification support.",
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Wearables",
  },
  {
    id: "5",
    name: "Wireless Earbuds Pro",
    description:
      "Compact true wireless earbuds with active noise cancellation, spatial audio, and up to 24 hours of battery life with the charging case. IPX4 water resistant for workouts.",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    category: "Audio",
  },
  {
    id: "6",
    name: "Mechanical Gaming Keyboard",
    description:
      "RGB backlit mechanical keyboard with hot-swappable switches, N-key rollover, and programmable macros. Aluminum frame construction for durability and style.",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "7",
    name: "Portable Power Bank 20000mAh",
    description:
      "High-capacity portable charger with 65W fast charging, multiple USB-C and USB-A ports. Charge your laptop, tablet, and phone simultaneously on the go.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1706275400998-7fc21c8cd8ed?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "8",
    name: 'Curved Gaming Monitor 27"',
    description:
      "Immersive 27-inch curved gaming monitor with 165Hz refresh rate, 1ms response time, QHD resolution, and AMD FreeSync Premium. Elevate your gaming experience.",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    category: "Monitors",
  },
];

const findProductById = (id: string) => {
  return PRODUCTS.find((product) => product.id === id);
};

export { PRODUCTS, findProductById };
