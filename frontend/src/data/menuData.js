export const menuCategories = [
  'All',
  'Thali',
  'Starters',
  'Main Course',
  'Paneer',
  'Rice & Biryani',
  'Breads',
  'South Indian',
  'Fast Food',
  'Soups & Salads',
  'Beverages',
  'Desserts'
];

export const menuItems = [
  { id: 1, name: 'Paneer Dhamaka', category: 'Paneer', description: 'Toast Paneer, Cheese Tadka, Red Gravy', price: 329, image: '/images/paneer_real.jpg', isChefSpecial: true, isAvailable: true },
  { id: 6, name: 'Bamboo Biryani', category: 'Rice & Biryani', description: 'Aromatic biryani cooked traditionally in bamboo', price: 350, image: '/images/biryani.jpg', isChefSpecial: true, isAvailable: true },
  { id: 7, name: 'Aarambh Special Thali', category: 'Thali', description: 'Tomato Soup, Roasted Papad, Dal, 2 Punjabi Subji, 2 Roti, Jeera Rice, Gulab Jamun, Butter Milk', price: 309, image: '/images/thali.jpg', isChefSpecial: true, isAvailable: true },
  { id: 8, name: 'Masala Dosa', category: 'South Indian', description: 'Crispy crepe made from rice and lentils with potato filling', price: 120, image: '/images/dosa.jpg', isChefSpecial: false, isAvailable: true },
  
  // South Indian & Snacks
  { id: 9, name: 'Plain Dosa', category: 'South Indian', description: 'Classic thin rice crepe', price: 89, image: null, isChefSpecial: false, isAvailable: true },
  { id: 10, name: 'Cheese Masala Dosa', category: 'South Indian', description: 'Masala dosa loaded with cheese', price: 149, image: null, isChefSpecial: false, isAvailable: true },
  { id: 11, name: 'Idli Chutney / Sambar', category: 'South Indian', description: 'Steamed rice cakes with lentil soup', price: 69, image: null, isChefSpecial: false, isAvailable: true },
  { id: 12, name: 'Medu Wada', category: 'South Indian', description: 'Deep fried lentil donuts', price: 99, image: null, isChefSpecial: false, isAvailable: true },
  { id: 13, name: 'Chole Bhatura', category: 'South Indian', description: 'Spicy chickpea curry with fried bread', price: 199, image: null, isChefSpecial: true, isAvailable: true },

  // Fast Food
  { id: 14, name: 'Amul Pav Bhaji', category: 'Fast Food', description: 'Mashed mixed vegetables cooked in butter with pav', price: 169, image: null, isChefSpecial: true, isAvailable: true },
  { id: 15, name: 'Cheese Tawa Pulav', category: 'Fast Food', description: 'Spicy rice tossed with veggies and cheese', price: 199, image: null, isChefSpecial: false, isAvailable: true },
  { id: 16, name: 'Arambh Special Cheese Grilled S/W', category: 'Fast Food', description: 'Three layered special grilled sandwich', price: 199, image: null, isChefSpecial: true, isAvailable: true },
  { id: 17, name: 'Arambh Special Pizza', category: 'Fast Food', description: 'Loaded with veggies, cheese and special sauce', price: 319, image: null, isChefSpecial: true, isAvailable: true },
  { id: 18, name: 'Mexican Peri Peri Cheese Nachos', category: 'Fast Food', description: 'Crispy nachos with spicy peri peri cheese sauce', price: 179, image: null, isChefSpecial: false, isAvailable: true },

  // Soups & Salads
  { id: 19, name: 'Cream of Tomato Soup', category: 'Soups & Salads', description: 'Classic creamy tomato soup', price: 99, image: null, isChefSpecial: false, isAvailable: true },
  { id: 20, name: 'Manchow Soup', category: 'Soups & Salads', description: 'Spicy soy based soup with crispy noodles', price: 129, image: null, isChefSpecial: false, isAvailable: true },
  { id: 21, name: 'Green Salad', category: 'Soups & Salads', description: 'Fresh seasonal vegetable slices', price: 89, image: null, isChefSpecial: false, isAvailable: true },

  // Starters
  { id: 22, name: 'Paneer Tikka Dry', category: 'Starters', description: 'Marinated cottage cheese grilled in tandoor', price: 259, image: null, isChefSpecial: true, isAvailable: true },
  { id: 23, name: 'Hara Bhara Kabab', category: 'Starters', description: 'Spinach and green peas patties', price: 259, image: null, isChefSpecial: false, isAvailable: true },
  { id: 24, name: 'Paneer Angara Kabab', category: 'Starters', description: 'Spicy smoked paneer kabab', price: 269, image: null, isChefSpecial: true, isAvailable: true },
  { id: 25, name: 'Veg Crispy', category: 'Starters', description: 'Batter fried veggies in tangy sauce', price: 249, image: null, isChefSpecial: false, isAvailable: true },
  { id: 26, name: 'Paneer Chilli Dry', category: 'Starters', description: 'Spicy soy and chilli tossed paneer cubes', price: 259, image: null, isChefSpecial: false, isAvailable: true },
  { id: 27, name: 'Mushroom Butter Garlic', category: 'Starters', description: 'Mushrooms tossed in rich garlic butter sauce', price: 269, image: null, isChefSpecial: true, isAvailable: true },

  // Main Course
  { id: 28, name: 'Aarambh Special Veg Sabji', category: 'Main Course', description: 'Chef special mixed vegetable preparation', price: 349, image: null, isChefSpecial: true, isAvailable: true },
  { id: 29, name: 'Veg Maratha', category: 'Main Course', description: 'Spicy Maharashtrian style vegetable curry', price: 279, image: null, isChefSpecial: false, isAvailable: true },
  { id: 30, name: 'Veg Diwani Handi', category: 'Main Course', description: 'Mixed vegetables in a rich green gravy', price: 269, image: null, isChefSpecial: false, isAvailable: true },
  { id: 31, name: 'Kaju Curry', category: 'Main Course', description: 'Roasted cashews in a rich creamy gravy', price: 299, image: null, isChefSpecial: true, isAvailable: true },
  { id: 32, name: 'Paneer Butter Masala', category: 'Paneer', description: 'Classic paneer in rich tomato buttery gravy', price: 249, image: null, isChefSpecial: false, isAvailable: true },
  { id: 33, name: 'Paneer Tikka Masala', category: 'Paneer', description: 'Grilled paneer cubes in spicy onion tomato gravy', price: 259, image: null, isChefSpecial: true, isAvailable: true },
  { id: 34, name: 'Paneer Kadhai', category: 'Paneer', description: 'Paneer tossed with bell peppers and whole spices', price: 249, image: null, isChefSpecial: false, isAvailable: true },
  { id: 35, name: 'Dal Tadka', category: 'Main Course', description: 'Yellow lentils tempered with cumin and garlic', price: 159, image: null, isChefSpecial: false, isAvailable: true },
  { id: 36, name: 'Dal Khichadi', category: 'Rice & Biryani', description: 'Comforting blend of rice and yellow lentils', price: 199, image: null, isChefSpecial: false, isAvailable: true },

  // Breads
  { id: 37, name: 'Butter Roti', category: 'Breads', description: 'Tandoori wheat bread with butter', price: 39, image: null, isChefSpecial: false, isAvailable: true },
  { id: 38, name: 'Butter Naan', category: 'Breads', description: 'Soft tandoori bread with butter', price: 69, image: null, isChefSpecial: false, isAvailable: true },
  { id: 39, name: 'Garlic Butter Naan', category: 'Breads', description: 'Soft naan topped with garlic and butter', price: 89, image: null, isChefSpecial: true, isAvailable: true },
  { id: 40, name: 'Cheese Garlic Naan', category: 'Breads', description: 'Naan stuffed with cheese and topped with garlic', price: 129, image: null, isChefSpecial: true, isAvailable: true },
  { id: 41, name: 'Basket Roti', category: 'Breads', description: 'Assortment of Naan, Roti, Lacha Paratha, Kulcha', price: 549, image: null, isChefSpecial: true, isAvailable: true },

  // Rice & Biryani
  { id: 42, name: 'Matka Dum Biryani', category: 'Rice & Biryani', description: 'Rich aromatic Biryani Made in ghee & Served in Matka', price: 289, image: null, isChefSpecial: true, isAvailable: true },
  { id: 43, name: 'Hydrabadi Biryani', category: 'Rice & Biryani', description: 'Spicy green aromatic vegetable biryani', price: 259, image: null, isChefSpecial: false, isAvailable: true },
  { id: 44, name: 'Veg Hakka Noodles', category: 'Rice & Biryani', description: 'Stir fried noodles with vegetables', price: 229, image: null, isChefSpecial: false, isAvailable: true },
  { id: 45, name: 'Triple Schezwan Noodles', category: 'Rice & Biryani', description: 'Noodles, rice, and crispy noodles in schezwan sauce', price: 279, image: null, isChefSpecial: true, isAvailable: true },

  // Beverages & Desserts
  { id: 46, name: 'Virgin Mojito', category: 'Beverages', description: 'Mint Leaves Lemon Wedges, Lemonade & Soda', price: 129, image: null, isChefSpecial: false, isAvailable: true },
  { id: 47, name: 'Fresh Lime Soda', category: 'Beverages', description: 'Sweet or salted fresh lime with soda', price: 59, image: null, isChefSpecial: false, isAvailable: true },
  { id: 48, name: 'Mango Mastani', category: 'Beverages', description: 'Thick mango shake with ice cream and dry fruits', price: 199, image: null, isChefSpecial: true, isAvailable: true },
  { id: 49, name: 'Cold Coffee with Ice Cream', category: 'Beverages', description: 'Classic cold coffee topped with vanilla ice cream', price: 189, image: null, isChefSpecial: false, isAvailable: true },
  { id: 50, name: 'Sizzling Chocolate Brownie', category: 'Desserts', description: 'Warm brownie with ice cream on a sizzling platter', price: 199, image: null, isChefSpecial: true, isAvailable: true },
  { id: 51, name: 'Kulfi Falooda', category: 'Desserts', description: 'Traditional falooda with rich malai kulfi', price: 199, image: null, isChefSpecial: false, isAvailable: true },
  { id: 52, name: 'Rarkobarko', category: 'Desserts', description: 'Fruit Cocktail, 3 Ice Cream scoops, Jelly', price: 259, image: null, isChefSpecial: true, isAvailable: true },
  { id: 53, name: 'Rabdi Mastani', category: 'Desserts', description: 'Rich thickened milk dessert loaded with nuts', price: 195, image: null, isChefSpecial: true, isAvailable: true }
];
