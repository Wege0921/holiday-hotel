export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  weight?: string;
  prep?: string;
  sides?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuData {
  beef: MenuCategory;
  chicken: MenuCategory;
  pasta: MenuCategory;
  fish: MenuCategory;
  indian: MenuCategory;
  ethiopian: MenuCategory;
  snacks: MenuCategory;
  pizza: MenuCategory;
  soup: MenuCategory;
  salad: MenuCategory;
  breakfast: MenuCategory;
  dessert: MenuCategory;
  nonAlcoholic: MenuCategory;
  hot: MenuCategory;
  wine: MenuCategory;
  beer: MenuCategory;
  whisky: MenuCategory;
  vodka: MenuCategory;
  gin: MenuCategory;
  liqueur: MenuCategory;
  juice: MenuCategory;
  cake: MenuCategory;
}

export const menuData: MenuData = {
  beef: {
    title: "Beef",
    items: [
      { 
        name: "Festive beef tenderloin", 
        price: "ETB 880",
        description: "Premium beef tenderloin specially prepared for festive occasions, served with seasonal vegetables and chef's special sauce.",
        weight: "400g",
        prep: "Grilled",
        sides: "Seasonal vegetables, special sauce"
      },
      { 
        name: "Stake alabesmaka", 
        price: "ETB 880",
        description: "Traditional Ethiopian-style beef steak marinated in authentic spices and herbs.",
        weight: "350g",
        prep: "Pan-fried",
        sides: "Injera, spicy sauce"
      },
      { 
        name: "Beef fillet sizzlers", 
        price: "ETB 800",
        description: "Tender beef fillet served on a sizzling hot plate with aromatic spices.",
        weight: "300g",
        prep: "Sizzling",
        sides: "Grilled vegetables, special sauce"
      },
      { 
        name: "Pepper steak", 
        price: "ETB 880",
        description: "Classic pepper steak with creamy pepper sauce and perfectly cooked beef.",
        weight: "350g",
        prep: "Grilled",
        sides: "Creamy pepper sauce, french fries"
      }
    ]
  },
  
  chicken: {
    title: "Chicken",
    items: [
      { 
        name: "Chicken stroganoff", 
        price: "ETB 700",
        description: "Shredded chicken sautéed with gherkins peppers, mushrooms, pan gravy finished with fresh cream served with mashed potato.",
        weight: "350g",
        prep: "Sautéed",
        sides: "Mashed potato"
      },
      { 
        name: "Roasted chicken leg", 
        price: "ETB 780",
        description: "Oven roasted marinated chicken legs with BBQ sauce.",
        weight: "350g",
        prep: "Roasted",
        sides: "BBQ sauce"
      },
      { 
        name: "Chicken breast", 
        price: "ETB 780",
        description: "Pan fried marinated chicken breast sautéed with butter spinach parsley with creamsauce.",
        weight: "400g",
        prep: "Pan fried",
        sides: "Mashed potato"
      },
      { 
        name: "Chicken cutlet", 
        price: "ETB 699",
        description: "Tender pieces of chicken breast in a rice velvety sauce spiced with authentic Indian spice with fragrant rice.",
        weight: "350g",
        prep: "Sautéed",
        sides: "Rice velvety"
      },
      { 
        name: "Stir fried chicken", 
        price: "ETB 700",
        description: "Shredded chicken sautéed with gherkins peppers, mushrooms, pan gravy finished with fresh cream served with mashed potato.",
        weight: "350g",
        prep: "Stir fried",
        sides: "Mashed potato"
      }
    ]
  },

  pasta: {
    title: "Pasta and Rice",
    items: [
      { 
        name: "Meat sauce", 
        price: "ETB 650",
        description: "Classic Italian pasta with rich meat sauce made from ground beef, tomatoes, and herbs.",
        weight: "350g",
        prep: "Boiled",
        sides: "Parmesan cheese, garlic bread"
      },
      { 
        name: "Tomato sauce", 
        price: "ETB 580",
        description: "Fresh pasta with homemade tomato sauce, basil, and extra virgin olive oil.",
        weight: "300g",
        prep: "Boiled",
        sides: "Fresh basil, parmesan"
      },
      { 
        name: "Carbonara sauce", 
        price: "ETB 620",
        description: "Authentic Italian carbonara with eggs, pecorino cheese, guanciale, and black pepper.",
        weight: "320g",
        prep: "Pan-tossed",
        sides: "Pecorino cheese, black pepper"
      },
      { 
        name: "Vegetable sauce", 
        price: "ETB 590",
        description: "Healthy pasta with seasonal vegetables in a light olive oil and garlic sauce.",
        weight: "300g",
        prep: "Boiled",
        sides: "Seasonal vegetables, herbs"
      },
      { 
        name: "Chicken sauce", 
        price: "ETB 650",
        description: "Tender chicken pieces in a creamy sauce with mushrooms and herbs over pasta.",
        weight: "350g",
        prep: "Pan-tossed",
        sides: "Mushrooms, herbs, cream"
      }
    ]
  },

  fish: {
    title: "Fish",
    items: [
      { 
        name: "Fish cutlet", 
        price: "ETB 680",
        description: "Fresh fish cutlet marinated in herbs and spices, pan-fried to perfection.",
        weight: "250g",
        prep: "Pan-fried",
        sides: "Lemon wedges, tartar sauce"
      },
      { 
        name: "Spice napoleon fish", 
        price: "ETB 650",
        description: "Layers of seasoned fish fillets with aromatic spices, baked until golden.",
        weight: "300g",
        prep: "Baked",
        sides: "Herb rice, grilled vegetables"
      },
      { 
        name: "Fish goulash", 
        price: "ETB 700",
        description: "Traditional fish stew with tomatoes, peppers, and Hungarian spices.",
        weight: "350g",
        prep: "Stewed",
        sides: "Rice, fresh bread"
      }
    ]
  },

  indian: {
    title: "Indian Flavor",
    items: [
      { name: "Beef madras", price: "ETB 690" },
      { name: "Chicken Curry", price: "ETB 690" },
      { name: "Indian pilaf with egg", price: "ETB 650" }
    ]
  },

  ethiopian: {
    title: "Ethiopian Corner",
    items: [
      { 
        name: "Doro fir fir", 
        price: "ETB 700",
        description: "Shredded chicken mixed with injera and traditional spices, a beloved Ethiopian breakfast.",
        weight: "400g",
        prep: "Mixed",
        sides: "Injera, berbere sauce"
      },
      { 
        name: "Doro Wet key", 
        price: "ETB 780",
        description: "Traditional Ethiopian chicken stew with hard-boiled eggs and authentic spices.",
        weight: "450g",
        prep: "Stewed",
        sides: "Injera, salad"
      },
      { 
        name: "Chikina Tibs", 
        price: "ETB 890",
        description: "Spiced chicken pieces sautéed with vegetables and Ethiopian herbs.",
        weight: "350g",
        prep: "Sautéed",
        sides: "Injera, awaze sauce"
      },
      { 
        name: "Tibs Fir fir", 
        price: "ETB 580",
        description: "Grilled meat mixed with injera and traditional Ethiopian spices.",
        weight: "350g",
        prep: "Mixed",
        sides: "Injera, green salad"
      },
      { 
        name: "Quanta Firfir", 
        price: "ETB 590",
        description: "Dried beef rehydrated and mixed with injera and berbere spices.",
        weight: "300g",
        prep: "Rehydrated",
        sides: "Injera, spicy sauce"
      },
      { 
        name: "Lamb Tibs", 
        price: "ETB 900",
        description: "Premium lamb pieces grilled with Ethiopian spices and herbs.",
        weight: "400g",
        prep: "Grilled",
        sides: "Injera, roasted vegetables"
      },
      { 
        name: "Fasting Fir fir", 
        price: "ETB 530",
        description: "Vegan-friendly dish with vegetables and injera, perfect for fasting days.",
        weight: "350g",
        prep: "Mixed",
        sides: "Injera, vegetable sauce"
      },
      { 
        name: "Bozena Shiro", 
        price: "ETB 580",
        description: "Ground pea flour cooked with tomatoes and spices, served with injera.",
        weight: "300g",
        prep: "Cooked",
        sides: "Injera, salad"
      },
      { 
        name: "Tegabino Shiro", 
        price: "ETB 520",
        description: "Shiro served in a traditional clay pot with enhanced spices.",
        weight: "350g",
        prep: "Cooked",
        sides: "Injera, chili peppers"
      },
      { 
        name: "Fasting Beyanet", 
        price: "ETB 790",
        description: "Assorted vegan dishes perfect for Ethiopian fasting periods.",
        weight: "500g",
        prep: "Various",
        sides: "Injera, multiple vegetable dishes"
      },
      { 
        name: "MISER WET", 
        price: "ETB 580",
        description: "Red lentil stew with Ethiopian spices and herbs.",
        weight: "350g",
        prep: "Stewed",
        sides: "Injera, salad"
      }
    ]
  },

  snacks: {
    title: "Snacks",
    items: [
      { name: "Tuna Sandwich", price: "ETB 680" },
      { name: "Club Sandwich", price: "ETB 750" },
      { name: "Mexican vegetable wrap", price: "ETB 580" },
      { name: "Chicken Wrap", price: "ETB 690" },
      { name: "Cheese burger", price: "ETB 780" },
      { name: "French fries", price: "ETB 450" },
      { name: "Cooked vegetable", price: "ETB 480" }
    ]
  },

  pizza: {
    title: "Pizzeria",
    items: [
      { 
        name: "Holiday Special pizza", 
        price: "ETB 899",
        description: "Our signature pizza with premium toppings including beef, chicken, vegetables, and special herbs.",
        weight: "500g",
        prep: "Wood-fired",
        sides: "Extra cheese, special sauce"
      },
      { 
        name: "Chicken pizza", 
        price: "ETB 850",
        description: "Grilled chicken with bell peppers, onions, and mozzarella cheese on our special dough.",
        weight: "450g",
        prep: "Wood-fired",
        sides: "Chicken pieces, bell peppers"
      },
      { 
        name: "Beef pizza", 
        price: "ETB 850",
        description: "Seasoned beef with mushrooms, olives, and premium mozzarella cheese.",
        weight: "450g",
        prep: "Wood-fired",
        sides: "Beef pepperoni, mushrooms"
      },
      { 
        name: "Tuna Pizza", 
        price: "ETB 880",
        description: "Fresh tuna with red onions, capers, and mozzarella on a crispy base.",
        weight: "400g",
        prep: "Wood-fired",
        sides: "Tuna flakes, red onions"
      },
      { 
        name: "Vegetable pizza", 
        price: "ETB 710",
        description: "Fresh seasonal vegetables including bell peppers, mushrooms, tomatoes, and olives.",
        weight: "400g",
        prep: "Wood-fired",
        sides: "Seasonal vegetables, herbs"
      },
      { 
        name: "Margherita pizza", 
        price: "ETB 800",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil leaves.",
        weight: "400g",
        prep: "Wood-fired",
        sides: "Fresh basil, mozzarella"
      }
    ]
  },

  soup: {
    title: "Soup",
    items: [
      { name: "Chicken and mushroom", price: "ETB 550" },
      { name: "Vegetable soup", price: "ETB 400" },
      { name: "Corn and fish chowder soup", price: "ETB 420" },
      { name: "Tomato and lentil soup", price: "ETB 400" },
      { name: "Porridge", price: "ETB 450" }
    ]
  },

  salad: {
    title: "Salads",
    items: [
      { name: "Fresh garden salad", price: "ETB 380" },
      { name: "House salad", price: "ETB 480" },
      { name: "Tuna salad", price: "ETB 520" },
      { name: "Holy social salad", price: "ETB 590" }
    ]
  },

  breakfast: {
    title: "Breakfast",
    items: [
      { name: "Full breakfast", price: "ETB 600" },
      { name: "Continental breakfast", price: "ETB 450" },
      { name: "Scrambled egg", price: "ETB 560" },
      { name: "Plane Omelet", price: "ETB 560" },
      { name: "Special omelet", price: "ETB 600" },
      { name: "Spanish omelet", price: "ETB 570" },
      { name: "Cheese Omelet", price: "ETB 590" },
      { name: "Scrambled egg with meat", price: "ETB 570" },
      { name: "Boiled egg", price: "ETB 500" },
      { name: "Fasting Firfir", price: "ETB 560" },
      { name: "Tibs Firfir", price: "ETB 580" },
      { name: "Fasting chechebesa", price: "ETB 500" },
      { name: "Non fasting chechebesa", price: "ETB 560" }
    ]
  },

  dessert: {
    title: "Dessert",
    items: [
      { name: "Seasonal Fruit Salad", price: "ETB 380" },
      { name: "Crepes Suzette", price: "ETB 360" },
      { name: "Varieties of cake", price: "ETB 360" }
    ]
  },

  nonAlcoholic: {
    title: "Non-Alcoholic Beverages",
    items: [
      { name: "Soft drink", price: "ETB 119.99" },
      { name: "Ambo water", price: "ETB 119.99" },
      { name: "Water ½ liter", price: "ETB 110.00" },
      { name: "Water 1 liter", price: "ETB 125.00" },
      { name: "Water 2 liter", price: "ETB 199.99" }
    ]
  },

  hot: {
    title: "Hot Drinks",
    items: [
      { name: "Special Tea", price: "ETB 200" },
      { name: "Macchiato", price: "ETB 130" },
      { name: "Tea", price: "ETB 80" },
      { name: "Hot Chocolate", price: "ETB 200" },
      { name: "Cappuccino", price: "ETB 200" },
      { name: "Milk with Coffee", price: "ETB 130" },
      { name: "Milk", price: "ETB 130" },
      { name: "Fasting Macchiato", price: "ETB 120" },
      { name: "Ginger/Lemon Tea", price: "ETB 110" },
      { name: "Tea with Coffee", price: "ETB 110" },
      { name: "Coffee", price: "ETB 120" },
      { name: "Traditional Coffee", price: "ETB 50" },
      { name: "Peanut Tea", price: "ETB 120" },
      { name: "Green Tea", price: "ETB 110" },
      { name: "Teakorenti", price: "ETB 180" }
    ]
  },

  wine: {
    title: "Wine",
    items: [
      { name: "Acacia dry red", price: "ETB 2,500" },
      { name: "Acacia medium sweet red", price: "ETB 2,500" },
      { name: "Acacia medium sweet white", price: "ETB 2,500" },
      { name: "Acacia medium sweet rose", price: "ETB 2,500" },
      { name: "Kemila wine", price: "ETB 2,500" },
      { name: "Rift valley wine", price: "ETB 2,500" },
      { name: "Gebeta wine", price: "ETB 2,500" }
    ]
  },

  beer: {
    title: "Beer",
    items: [
      { name: "Local beer", price: "ETB 160.00" },
      { name: "Bedele (big)", price: "ETB 199.99" },
      { name: "Arada cocktail", price: "ETB 199.99" },
      { name: "Heineken beer", price: "ETB 199.99" }
    ]
  },

  whisky: {
    title: "Whisky (bottle/½ bottle/shot)",
    items: [
      { name: "Gold label", price: "ETB 22,000 / 11,000 / 590" },
      { name: "Double black", price: "ETB 20,000 / 10,000 / 550" },
      { name: "Black label", price: "ETB 17,000 / 8,500 / 500" },
      { name: "Red label", price: "ETB 15,000 / 7,500 / 450" },
      { name: "High land queen", price: "ETB 15,000 / 7,500 / 450" },
      { name: "Dimple 15 yrs", price: "ETB 20,000 / 10,000 / 550" },
      { name: "Glenfiddich 12 yrs", price: "ETB 17,000 / 8,500 / 500" },
      { name: "Jack Daniel", price: "ETB 20,000 / 10,000 / 550" }
    ]
  },

  vodka: {
    title: "Vodka (bottle/½ bottle/shot)",
    items: [
      { name: "Absolut vodka", price: "ETB 17,000 / 8,500 / 500" },
      { name: "Ciroc vodka", price: "ETB 19,000 / 9,500 / 500" },
      { name: "Stolichnaya vodka", price: "ETB 16,000 / 8,000 / 450" },
      { name: "Winter palace", price: "ETB 17,000 / 8,500 / 500" },
      { name: "Smirnoff vodka", price: "ETB 17,000 / 8,500 / 500" },
      { name: "Skyy vodka", price: "ETB 18,000 / 9,000 / 500" },
      { name: "Grey goose", price: "ETB 17,000 / 8,500 / 500" }
    ]
  },

  gin: {
    title: "Gin (bottle/½ bottle/shot)",
    items: [
      { name: "Gordon gin", price: "ETB 16,000 / 8,000 / 450" },
      { name: "Hendricks", price: "ETB 22,000 / 11,000 / 580" },
      { name: "Tanqueray", price: "ETB 18,000 / 9,000 / 500" },
      { name: "Bombay", price: "ETB 17,000 / 8,500 / 500" }
    ]
  },

  liqueur: {
    title: "Liqueur (bottle/½ bottle/shot)",
    items: [
      { name: "Campari Bitter", price: "ETB 16,000 / 8,000 / 450" },
      { name: "Amarula cream", price: "ETB 15,000 / 7,500 / 450" },
      { name: "Baileys Irish cream", price: "ETB 15,000 / 7,500 / 450" },
      { name: "Josie Cuervo", price: "ETB 16,000 / 8,000 / 480" },
      { name: "Malibu", price: "ETB 16,000 / 8,000 / 480" },
      { name: "Patron sliver", price: "ETB 24,000 / 12,000 / 650" },
      { name: "Pernodparis", price: "ETB 17,000 / 8,500 / 450" },
      { name: "Remy martin", price: "ETB 29,000 / 14,500 / 750" },
      { name: "Hennessy", price: "ETB 32,000 / 16,000 / 850" },
      { name: "Patron café xo", price: "ETB 21,000 / 10,500 / 550" },
      { name: "Jagermeister", price: "ETB 15,000 / 7,500 / 450" },
      { name: "Capitain Morgan", price: "ETB 18,000 / 9,000 / 480" },
      { name: "Grey goose vodka", price: "ETB 17,000 / 8,500 / 500" },
      { name: "FernetBranca", price: "ETB 19,000 / 9,500 / 500" },
      { name: "Camino Tequila", price: "ETB 17,000 / 8,500 / 580" }
    ]
  },

  juice: {
    title: "Juice",
    items: [
      { name: "Watermelon juice", price: "ETB 180" },
      { name: "Papaya juice", price: "ETB 180" },
      { name: "Mixed juice", price: "ETB 200" }
    ]
  },

  cake: {
    title: "Cake",
    items: [
      { name: "English cake", price: "ETB 199.99" },
      { name: "Banana cake", price: "ETB 199.99" },
      { name: "Carrot cake", price: "ETB 199.99" },
      { name: "Crossant cake", price: "ETB 199.99" },
      { name: "Chocolate chips", price: "ETB 199.99" },
      { name: "Torta cake (Normal)", price: "ETB 2,500.00" },
      { name: "Torta cake (Marzipan)", price: "ETB 3,000.00" },
      { name: "Bombolino", price: "ETB 199.99" }
    ]
  }
};
