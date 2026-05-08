import dishOysters from "@/assets/dish-oysters.jpg";
import dishSnapper from "@/assets/dish-snapper.jpg";
import dishChicken from "@/assets/dish-chicken.jpg";
import dishPudding from "@/assets/dish-pudding.jpg";
import dishCarpaccio from "@/assets/dish-carpaccio.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishNegroni from "@/assets/dish-negroni.jpg";

export const dishes = [
  { name: "Dozen Fresh Oysters", category: "Raw Bar", price: "32", img: dishOysters, desc: "Atlantic & Gulf selection · mignonette · cocktail" },
  { name: "Beef Carpaccio", category: "Starter", price: "24", img: dishCarpaccio, desc: "Aged parmesan · arugula · lemon · black pepper" },
  { name: "Rabbit Mortadella", category: "Starter", price: "22", img: dishCarpaccio, desc: "Pistachio · house pickles · grilled sourdough" },
  { name: "Lamb Heart", category: "Starter", price: "26", img: dishCarpaccio, desc: "Charred · chimichurri · smoked sea salt" },
  { name: "Red Snapper", category: "Main", price: "48", img: dishSnapper, desc: "Pan-seared · brown butter jus · seasonal greens" },
  { name: "Whole Grilled Fish", category: "Main", price: "62", img: dishFish, desc: "Wood-fired · Meyer lemon · herb oil · sea salt" },
  { name: "Fried Chicken & Hoecakes", category: "Main", price: "38", img: dishChicken, desc: "Buttermilk · sorghum · stone-ground hoecakes" },
  { name: "Butterscotch Pudding", category: "Dessert", price: "14", img: dishPudding, desc: "Bourbon caramel · sea salt · crème fraîche" },
  { name: "Chocolate Parfait", category: "Dessert", price: "16", img: dishPudding, desc: "Dark chocolate · espresso cream · cocoa nib" },
  { name: "Negroni", category: "Bar", price: "18", img: dishNegroni, desc: "Campari · sweet vermouth · house gin · orange" },
];

export const categories = ["All", "Raw Bar", "Starter", "Main", "Dessert", "Bar"];

export const reviews = [
  { quote: "Elegant atmosphere, divine food and impeccable service.", author: "The New York Times" },
  { quote: "One of the best dining experiences in Savannah.", author: "Condé Nast Traveler" },
  { quote: "An unforgettable culinary journey through the modern South.", author: "Bon Appétit" },
  { quote: "A masterclass in storytelling on a plate.", author: "Eater" },
  { quote: "Featured on CBS Sunday Morning — a Savannah landmark.", author: "CBS" },
];
