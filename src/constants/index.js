import homepage from "./../assets/images/homepage.png";
import healthMixMain from "./../assets/images/healthMixMain.jpg";
import healthMixback from "./../assets/images/healthMixback.jpg";
import healthMix2 from "./../assets/images/healthMix2.png";
import healthMix3 from "./../assets/images/healthMix3.png";
import healthMixMainPacktwo from "./../assets/images/healthMixMainPacktwo.jpg";
import blackRiceMain from "./../assets/images/blackRiceMain.jpg";
import blackRice2 from "./../assets/images/blackRice2.jpg";
import blackRice3 from "./../assets/images/blackRice3.jpg";
import ragiPowderMain from "./../assets/images/ragiPowderMain.jpg";
import ragiPowder2 from "./../assets/images/ragiPowder2.jpg";
import ragiPowder3 from "./../assets/images/ragiPowder3.jpg";
import thalippuVadagamMain from "./../assets/images/thalippuVadagamMain.jpg";
import thalippuVadagam2 from "./../assets/images/thalippuVadagam2.jpg";
import thalippuVadagam3 from "./../assets/images/thalippuVadagam3.jpg";
import KaruveppilaiPowderMain from "./../assets/images/KaruveppilaiPowderMain.jpg";
import KaruveppilaiPowder2 from "./../assets/images/KaruveppilaiPowder2.jpg";
import KaruveppilaiPowder3 from "./../assets/images/KaruveppilaiPowder3.jpg";
import arisiVathalMain from "./../assets/images/arisiVathalMain.jpg";
import arisiVathal2 from "./../assets/images/arisiVathal2.jpg";
import { FaLeaf } from "react-icons/fa";
import { GiWheat } from "react-icons/gi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";
import { FaBox, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#faq", label: "FAQ" },
];

// export default homepage, blackRice, healthmix, ragipowder, thalipuVadagam

export const whyUs = [
  {
    img: FaLeaf,
    heading: "100% Natural Ingredients",
    description:
      "We believe in purity. Every product is made from handpicked, high-quality ingredients with no preservatives, no chemicals, and no artificial flavors — just natural goodness in every scoop.",
  },
  {
    img: GiWheat,
    heading: "Nutrient-Rich and Health-Focused",
    description:
      "Whether it’s multigrain mix or herbal powders, our products are designed to support a balanced, healthy lifestyle. Rich in fiber, protein, and essential nutrients, they’re great for all age groups.",
  },
  {
    img: BsFillBoxSeamFill,
    heading: "Personal and Easy Ordering Experience",
    description:
      "No complicated payment gateways. Just add to cart, send us your order on WhatsApp, and we’ll confirm and ship. Simple, fast, and friendly — the way online shopping should be.",
  },
  {
    img: MdFamilyRestroom,
    heading: "Trusted by Families Like Yours",
    description:
      "We’ve built our brand on honesty, transparency, and care. Families trust Senthooran because we deliver exactly what we promise — clean, traditional, and wholesome food products.",
  },
];

export const products = [
  {
    img: healthMixMain,
    name: "Multigrain Health Mix",
    price: "270",
    weight: "500g",
    param: "healthmix",
  },
  {
    img: healthMixMainPacktwo,
    name: "Multigrain Health Mix (Pack of Two)",
    price: "500",
    weight: "500g",
    param: "healthmixpacktwo",
  },
  {
    img: blackRiceMain,
    name: "Karuppu Kavuni Kanji Maavu",
    price: "300",
    weight: "250g",
    param: "blackrice",
  },
  {
    img: ragiPowderMain,
    name: "Ragi Powder",
    price: "100",
    weight: "500g",
    param: "ragipowder",
  },
  {
    img: arisiVathalMain,
    name: "Arisi Vathal",
    price: "100",
    weight: "250g",
    param: "arisivathal",
  },
  {
    img: thalippuVadagamMain,
    name: "Thalipu Vadagam",
    price: "100",
    weight: "125g",
    param: "thalippuvadagam",
  },
  {
    img: KaruveppilaiPowderMain,
    name: "Karuvepillai Podi",
    price: "80",
    weight: "100g",
    param: "karuveppilaipowder",
  },
];

export const faqContent = [
  {
    title: "How do I place an order?",
    content: `Just browse through our products, add items to your cart, and proceed to checkout. After entering your delivery details, click "Order via WhatsApp" — your order will be sent to us instantly.`,
  },
  {
    title: "Is online payment available?",
    content: `Currently, we only accept orders via WhatsApp. Once your order is received, we’ll confirm it and share payment options directly.`,
  },
  {
    title: "Do you offer home delivery?",
    content: `Yes, we deliver across Tamil Nadu. Delivery charges may apply based on your location.`,
  },
  {
    title: "Are your products homemade?",
    content: `Yes! All our products are handmade in small batches using traditional recipes and natural ingredients.`,
  },
  {
    title: "How long will it take to receive my order?",
    content: `Orders are usually processed within 1–2 business days. Delivery timelines depend on your location — typically 3–5 days.`,
  },
];

export const productsListContent = {
  healthmix: {
    images: [healthMixMain, healthMixback, healthMix2, healthMix3],
    itemName: "Multigrain Health Mix",
    price: "270",
    weight: "500g",
    description:
      "A powerhouse blend of carefully selected whole grains, pulses, and nuts — roasted and ground using traditional methods to preserve nutrition.",
    bestFor: [
      "Rich in fiber and protein",
      "SaltBoosts energy and supports digestion",
      "Ideal for kids and adults",
      "Best before 12 months from the date of packing",
    ],
    ingredients: [
      "Ragi",
      "Foxtail millet",
      "Red rice",
      "Almond",
      "Pista",
      "Cashews",
      "Walnut",
      "pearl millet",
      "Dark brown rice",
      "cardamom",
      "Black sesame seeds",
      "Barley",
      "Black chickpeas",
      "White chickpeas",
      "Black dal",
      "Peanuts",
      "veg corn",
      "Barnyard millet",
      "maize",
      "Groom samba rice",
      "Atta",
    ],
  },
  healthmixpacktwo: {
    images: [healthMixMainPacktwo, healthMixback, healthMix2, healthMix3],
    itemName: "Multigrain Health Mix (Pack of Two)",
    price: "500",
    weight: "500g(1pc)",
    description:
      "A powerhouse blend of carefully selected whole grains, pulses, and nuts — roasted and ground using traditional methods to preserve nutrition.",
    bestFor: [
      "Rich in fiber and protein",
      "SaltBoosts energy and supports digestion",
      "Ideal for kids and adults",
      "Best before 12 months from the date of packing",
    ],
    ingredients: [
      "Ragi",
      "Foxtail millet",
      "Red rice",
      "Almond",
      "Pista",
      "Cashews",
      "Walnut",
      "pearl millet",
      "Dark brown rice",
      "cardamom",
      "Black sesame seeds",
      "Barley",
      "Black chickpeas",
      "White chickpeas",
      "Black dal",
      "Peanuts",
      "veg corn",
      "Barnyard millet",
      "maize",
      "Groom samba rice",
      "Atta",
    ],
  },
  blackrice: {
    images: [blackRiceMain, blackRice2, blackRice3],
    itemName: "Karuppu Kavuni Kanji Maavu (Black Rice Porridge Powder)",
    price: "300",
    weight: "250g",
    description:
      "Made from the rare and powerful black rice (“Karuppu Kavuni”) – rich in antioxidants and iron. A heritage health food that supports heart health and improves energy.",
    bestFor: [
      "High in iron and antioxidants",
      "Supports heart health and immunity",
      "Helps maintain steady energy",
      "Best before 12 months from the date of packing",
    ],
    ingredients: [
      "Black rice",
      "Barley",
      "Moongdal",
      "horHorse gram (Kollu)",
      "Pepper",
      "Cumin seeds",
    ],
  },
  ragipowder: {
    images: [ragiPowderMain, ragiPowder2, ragiPowder3],
    itemName: "Ragi Powder",
    price: "100",
    weight: "500g",
    description:
      "Ragi is rich in calcium and iron, making it great for strong bones and active energy. Easy to digest and ideal for all ages — perfect for porridge or dosa.",
    bestFor: [
      "Excellent source of calcium and iron",
      "Great for bone health and diabetes management",
      "Easily digestible – perfect for all ages",
      "Best before 12 months from the date of packing",
    ],
    ingredients: ["Ragi roasted"],
  },
  arisivathal: {
    images: [arisiVathalMain, arisiVathal2],
    itemName: "Arisi Vathal (Rice Fryums)",
    price: "100",
    weight: "250g",
    description:
      "Crispy, sun-dried rice fryums made the traditional way with no preservatives. — Perfect to serve with sambar or curd rice for a crunchy side or a side snack for tea time.",
    bestFor: [
      "Light, tasty, and preservative-free",
      "Perfect with sambar rice, curd rice, or any South Indian meal",
      "Made using traditional soaking and drying techniques",
      "Best before 12 months from the date of packing",
    ],
    ingredients: ["Rice", "Green chili", "Salt"],
  },
  thalippuvadagam: {
    images: [thalippuVadagamMain, thalippuVadagam2, thalippuVadagam3],
    itemName: "Thaalipu Vadagam (Seasoning Balls)",
    price: "100",
    weight: "125g",
    description:
      "Flavor-packed seasoning balls made with sun-dried onion, garlic, and spices. Just temper in oil to add instant traditional taste to any dish. — handmade and sun-dried with care.",
    bestFor: [
      "Adds a burst of traditional flavor to your dishes",
      "Ready-to-use – saves time and effort",
      "No preservatives or artificial flavors",
      "Best before 12 months from the date of packing",
    ],
    ingredients: [
      "Turmeric",
      "Small onion",
      "Mustard",
      "Urad dal",
      "Garlic",
      "MFenugreek (Methi) seeds",
      "Curry leaves",
    ],
  },
  karuveppilaipowder: {
    images: [KaruveppilaiPowderMain, KaruveppilaiPowder2, KaruveppilaiPowder3],
    itemName: "Karuvepillai Podi (Curry Leaves Powder)",
    price: "80",
    weight: "100g",
    description:
      "A flavorful curry leaf powder that boosts iron and immunity naturally. Mix with hot rice and ghee for a simple, healthy meal or sprinkle over dosa/idli.",
    bestFor: [
      "Boosts iron levels and aids digestion",
      "Strengthens hair and improves immunity",
      "Tastes great with rice, idli, or dosa",
      "Best before 12 months from the date of packing",
    ],
    ingredients: ["Pepper", "Garlic", "Red chilli", "Curry leaves"],
  },
};

export const contact = [
  {
    img: FaLocationDot,
    value: "Chennai",
  },
  {
    img: FaPhone,
    value: "+91 9876543321",
  },
  {
    img: IoMail,
    value: "senthooran@gmail.com",
  },
];

export const termsAndCond = [
  "All orders are processed only after confirmation via WhatsApp.",
  "Product prices are subject to change based on availability and raw material costs.",
  "Delivery timelines may vary based on location and courier availability.",
  "No returns are accepted for food items once opened, unless there's a quality issue reported on the day of delivery.",
];

export const privasyPolicy =
  "We value your privacy. Any personal information (like your name, address, and phone number) shared during checkout is used only to process and deliver your order. We do not share your data with third parties.";
