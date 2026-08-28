export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Nutrifresh Eggs", href: "/eggs" },
  { label: "Nutrifresh Farms", href: "/farms" },
  { label: "Become a Farmer", href: "/become-a-farmer" },
  { label: "About Us", href: "/about" },
  { label: "The Journal", href: "/blog" },
  { label: "Store Locator", href: "/store-locator" },
];

export interface Product {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  yolkColor: string;
  count: string;
  price: string;
  features: string[];
  image: string;
  nutrition: {
    protein: string;
    vitaminA: string;
    vitaminE: string;
    betaCarotene: string;
    cholesterol: string;
    satFat: string;
  };
}

export interface FAQItem {
  id: string;
  category: "Farms & Welfare" | "Our Eggs" | "Hen Diet & Health";
  question: string;
  answer: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  category: "Organic Supermarket" | "Gourmet Outlet" | "Hypermarket" | "Direct Farm Pickup";
  city: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
  inStock: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Nutrition" | "Ethical Farming" | "Hen Care" | "Recipes";
  date: string;
  readTime: string;
  summary: string;
  author: string;
  image: string;
  content: string[];
}

export const NUTRIFRESH_PRODUCTS: Product[] = [
  {
    id: "free-range-classic",
    name: "Nutrifresh Classic Pasture-Raised",
    tagline: "100% Genuine Free Range Eggs with Upright Golden Yolks",
    badge: "Most Popular",
    description: "Laid by happy hens roaming free on 100 sq. ft. per bird pastures. Fed whole grains, fresh green forage, and 8 medicinal herbs with zero antibiotics or steroids.",
    yolkColor: "Upright Rich Golden Amber",
    count: "6 Eggs / Carton",
    price: "₹185",
    features: [
      "100 sq. ft / bird RSPCA Pasture Space",
      "8 In-House Formulated Herbal Diet",
      "0% Antibiotics, Hormones or Steroids",
      "Unwashed Bloom Coating Preserved"
    ],
    image: "/assets/hero_egg.png",
    nutrition: {
      protein: "6.8g",
      vitaminA: "2/3 More than Factory Eggs",
      vitaminE: "300% Higher (3x)",
      betaCarotene: "700% Higher (7x)",
      cholesterol: "33% Less (1/3)",
      satFat: "25% Less (1/4)"
    }
  },
  {
    id: "super-jumbo-double-yolk",
    name: "Nutrifresh Super Jumbo Double Yolk",
    tagline: "Rare 1-in-1,000 Extra Large Natural Delight",
    badge: "Rare Gem",
    description: "Extremely large, double-yolked eggs laid primarily by young, energetic flocks beginning their natural laying cycle. A golden culinary treat full of flavor.",
    yolkColor: "Dual Upright Orange Yolks",
    count: "6 Jumbo Eggs / Carton",
    price: "₹240",
    features: [
      "1 in 1,000 Rare Natural Occurrence",
      "Double Nutritional Yolk Portion",
      "Ideal for Gourmet Baking & Omelettes",
      "100% Infertile & Natural"
    ],
    image: "/assets/egg_carton.png",
    nutrition: {
      protein: "8.5g",
      vitaminA: "Double Portion",
      vitaminE: "3x Higher",
      betaCarotene: "7x Higher",
      cholesterol: "Balanced Natural Fat",
      satFat: "25% Reduced Sat Fat Ratio"
    }
  },
  {
    id: "heritage-herbal-reserve",
    name: "Nutrifresh Herbal Reserve Special",
    tagline: "Enriched with Brahmi, Neem, Turmeric & Basil",
    badge: "Wellness Choice",
    description: "Produced by hens given an elevated daily dosage of Brahmi, Turmeric, Neem, Nilavembu, and Aloe Vera to maximize nutritive value and immune-boosting carotenoids.",
    yolkColor: "Deep Amber Orange Yolk",
    count: "10 Eggs / Pack",
    price: "₹310",
    features: [
      "Infused with 8 Medicinal Herbs",
      "Ayurvedic Hen Care Protocol",
      "High Carotenoid Antioxidant Content",
      "Direct Farm Fresh Delivery"
    ],
    image: "/assets/herbal_feed.png",
    nutrition: {
      protein: "7.2g",
      vitaminA: "Ultra High",
      vitaminE: "3.5x Higher",
      betaCarotene: "8x Higher",
      cholesterol: "1/3 Lower",
      satFat: "1/4 Lower"
    }
  }
];

export const NUTRIFRESH_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Farms & Welfare",
    question: "What does Free Range actually mean at Nutrifresh?",
    answer: "At Nutrifresh, Free Range means our hens spend their days roaming freely across large open pastures (providing 100 sq. ft per bird as per RSPCA standards). They bask in sunshine, dust-bathe, scratch in the grass, socialize, and rest under shade trees. At night, they roost safely inside airy, uncrowded barns (2 sq. ft per bird) equipped with clean nest boxes."
  },
  {
    id: "faq-2",
    category: "Farms & Welfare",
    question: "Do you practice de-beaking or overcrowding?",
    answer: "Never. We do not practice de-beaking. A hen's beak is vital for foraging, preening feathers, and natural behavior. Because our hens have plenty of space, outdoor exercise, and zero stress, aggressive pecking does not occur."
  },
  {
    id: "faq-3",
    category: "Our Eggs",
    question: "Why don't you wash Nutrifresh eggs?",
    answer: "When hens lay eggs, a natural protective coating called the 'bloom' is deposited on the shell. This coating seals the pores and prevents harmful bacteria from entering. Washing eggs removes this bloom and forces bacteria inside through porous shells. Our nests are kept squeaky clean so washing is unnecessary."
  },
  {
    id: "faq-4",
    category: "Our Eggs",
    question: "Why does yolk color vary and why are your yolks dark orange?",
    answer: "Yolk color comes from natural plant carotenoids in the hen's diet. Because our hens forage outdoors on fresh greens, herbs, seeds, and insects along with our carotenoid-rich vegetarian grain feed, their yolks are a vibrant, upright golden-orange."
  },
  {
    id: "faq-5",
    category: "Our Eggs",
    question: "Why do pasture-raised eggs cost more than commercial eggs?",
    answer: "Pasture-raised hens roam and burn energy actively, so they consume more feed than caged factory hens while laying fewer eggs per year. Additionally, maintaining organic green pastures, providing 100 sq. ft space per bird, and feeding medicinal herbs takes immense care, land, labor, and commitment to animal welfare."
  },
  {
    id: "faq-6",
    category: "Hen Diet & Health",
    question: "What herbs do you feed your hens?",
    answer: "We formulate an in-house diet enriched with medicinal herbs including Brahmi, Sweet Basil, Turmeric, Nilavembu, KeelaNelli, Neem, Sweet Flag, and Aloe Vera. These natural botanicals boost hen immunity and enrich the nutritional profile of every egg."
  },
  {
    id: "faq-7",
    category: "Hen Diet & Health",
    question: "Do you use antibiotics or growth hormones?",
    answer: "Zero. We never feed antibiotics, growth hormones, steroids, or animal by-products. If a hen ever gets sick, she is immediately segregated, cared for with ayurvedic remedies, and her eggs are excluded until she has fully recovered."
  }
];

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: "store-1",
    name: "Nutrifresh Direct Farm Hub - Suregrow Farms",
    category: "Direct Farm Pickup",
    city: "Bengaluru",
    address: "Suregrow Farms Eco Zone, Near Valley School Road, Off Kanakapura Main Road, Bengaluru - 560062",
    phone: "+91 98450 12345",
    hours: "7:00 AM - 6:00 PM (Daily)",
    lat: 12.8452,
    lng: 77.5412,
    inStock: true
  },
  {
    id: "store-2",
    name: "The Organic World - Indiranagar",
    category: "Organic Supermarket",
    city: "Bengaluru",
    address: "#712, 100 Feet Rd, Indiranagar 2nd Stage, Bengaluru - 560038",
    phone: "+91 80 4123 9876",
    hours: "8:00 AM - 9:30 PM",
    lat: 12.9784,
    lng: 77.6408,
    inStock: true
  },
  {
    id: "store-3",
    name: "Nature's Basket - Koramangala",
    category: "Gourmet Outlet",
    city: "Bengaluru",
    address: "80 Feet Rd, 4th Block, Koramangala, Bengaluru - 560034",
    phone: "+91 80 2553 4411",
    hours: "8:30 AM - 10:00 PM",
    lat: 12.9352,
    lng: 77.6245,
    inStock: true
  },
  {
    id: "store-4",
    name: "Foodhall / Gourmet Market - Whitefield",
    category: "Hypermarket",
    city: "Bengaluru",
    address: "VR Bengaluru Mall, ITPL Main Rd, Whitefield, Bengaluru - 560048",
    phone: "+91 80 6726 1122",
    hours: "10:00 AM - 10:00 PM",
    lat: 12.9915,
    lng: 77.6980,
    inStock: true
  },
  {
    id: "store-5",
    name: "Organic World - Jubilee Hills",
    category: "Organic Supermarket",
    city: "Hyderabad",
    address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana - 500033",
    phone: "+91 40 2355 8899",
    hours: "8:00 AM - 9:00 PM",
    lat: 17.4325,
    lng: 78.4071,
    inStock: true
  },
  {
    id: "store-6",
    name: "Conscious Food & Organics - Bandra West",
    category: "Gourmet Outlet",
    city: "Mumbai",
    address: "Pali Hill Rd, Bandra West, Mumbai, Maharashtra - 400050",
    phone: "+91 22 2640 5533",
    hours: "9:00 AM - 9:00 PM",
    lat: 19.0600,
    lng: 72.8300,
    inStock: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "power-of-herbal-feed-in-free-range-hens",
    title: "Why We Feed Our Hens Brahmi, Basil, Neem & Turmeric",
    category: "Nutrition",
    date: "August 15, 2026",
    readTime: "5 min read",
    summary: "Discover how ancient botanical herbs enrich hen immunity naturally, resulting in vibrant orange yolks packed with carotenoids and antioxidants.",
    author: "Dr. A. Sharma, Veterinary Nutritionist",
    image: "/assets/herbal_feed.png",
    content: [
      "In modern factory poultry farming, birds are treated with prophylactic antibiotics to survive cramped wire cages. At Nutrifresh, we took an entirely different path guided by nature.",
      "By formulating an in-house diet containing Brahmi, Sweet Basil, Neem, Turmeric, Nilavembu, and Aloe Vera, our hens build robust natural immunity without a single synthetic chemical.",
      "The natural plant carotenoids absorbed from these herbs impart a golden-orange hue to the yolk and provide up to 7x higher Beta Carotene than industrial eggs."
    ]
  },
  {
    id: "blog-2",
    slug: "understanding-rspca-pasture-standards",
    title: "100 Sq. Ft per Hen: The True Science of Pasture Welfare",
    category: "Ethical Farming",
    date: "July 28, 2026",
    readTime: "4 min read",
    summary: "Why open pasture space and dust bathing are essential for chicken psychology, stress reduction, and superior egg quality.",
    author: "Suregrow Farms Agriculture Team",
    image: "/assets/farm_landscape.png",
    content: [
      "Most commercial 'free-range' claims in India refer to crowded barn pens. At Suregrow Farms, we adhere strictly to international RSPCA standards.",
      "Each Nutrifresh hen has access to 100 square feet of rotational organic pasture during daylight hours.",
      "Freedom of movement allows hens to forage for wild seeds, herbs, and insects, reducing stress hormones and yielding cleaner, richer flavor profiles."
    ]
  },
  {
    id: "blog-3",
    slug: "pasture-raised-vs-commercial-egg-nutrition",
    title: "The Lab Test Results: Pasture-Raised vs Factory Cage Eggs",
    category: "Nutrition",
    date: "June 12, 2026",
    readTime: "6 min read",
    summary: "Independent nutritional analysis reveals 1/3 less cholesterol, 1/4 less saturated fat, and 3x more Vitamin E in Nutrifresh eggs.",
    author: "Nutrifresh Quality Assurance",
    image: "/assets/hero_egg.png",
    content: [
      "Laboratory testing proves that what hens eat directly impacts human nutrition.",
      "Pasture-raised eggs contain 1/3 less cholesterol, 1/4 less saturated fat, 2/3 more Vitamin A, and 300% more Vitamin E than standard layer eggs.",
      "The upright yolk structure indicates superior protein density and lecithin freshness."
    ]
  }
];
