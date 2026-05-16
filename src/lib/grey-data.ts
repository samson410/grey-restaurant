import dishOysters from "@/assets/dish-oysters.jpg";
import dishSnapper from "@/assets/dish-snapper.jpg";
import dishChicken from "@/assets/dish-chicken.jpg";
import dishPudding from "@/assets/dish-pudding.jpg";
import dishCarpaccio from "@/assets/dish-carpaccio.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishNegroni from "@/assets/dish-negroni.jpg";
import rabbitMortadella from "@/assets/rabbit-mortadella.jpg";
import lambHeart from "@/assets/lamb-heart.jpg"; 
import redSnapper from "@/assets/red-snapper.jpg"; 
import wholeGrilledFish from "@/assets/whole-grilled-fish.jpg"; 
import friedChicken from "@/assets/fried-chicken.jpg"; 
import butterSotch from "@/assets/butterscotch.jpg"; 
import chocolate  from "@/assets/dish-chicken.jpg"; 
import negroni from "@/assets/negroni.png";
import chocolateParfit from "@/assets/chocolate-parfait.jpg";




export const dishes = [
  { name: "Dozen Fresh Oysters", category: "Raw Bar", price: "32", img: dishOysters, desc: "Atlantic & Gulf selection · mignonette · cocktail" },
  { name: "Beef Carpaccio", category: "Starter", price: "24", img: dishCarpaccio, desc: "Aged parmesan · arugula · lemon · black pepper" },
  { name: "Rabbit Mortadella", category: "Starter", price: "22", img: rabbitMortadella, desc: "Pistachio · house pickles · grilled sourdough" },
  { name: "Lamb Heart", category: "Starter", price: "26", img: lambHeart, desc: "Charred · chimichurri · smoked sea salt" },
  { name: "Red Snapper", category: "Main", price: "48", img: redSnapper, desc: "Pan-seared · brown butter jus · seasonal greens" },
  { name: "Whole Grilled Fish", category: "Main", price: "62", img: wholeGrilledFish, desc: "Wood-fired · Meyer lemon · herb oil · sea salt" },
  // { name: "Fried Chicken & Hoecakes", category: "Main", price: "38", img: chc , desc: "Buttermilk · sorghum · stone-ground hoecakes" },
  { name: "Butterscotch Pudding", category: "Dessert", price: "14", img: butterSotch, desc: "Bourbon caramel · sea salt · crème fraîche" },
  { name: "Chocolate Parfait", category: "Dessert", price: "16", img: chocolateParfit, desc: "Dark chocolate · espresso cream · cocoa nib" },
  { name: "Negroni", category: "Bar", price: "18", img: negroni, desc: "Campari · sweet vermouth · house gin · orange" },
];

export const categories = ["All", "Raw Bar", "Starter", "Main", "Dessert", "Bar"];

export const reviews = [
  { quote: "Elegant atmosphere, divine food and impeccable service.", author: "The New York Times" },
  { quote: "One of the best dining experiences in Savannah.", author: "Condé Nast Traveler" },
  { quote: "An unforgettable culinary journey through the modern South.", author: "Bon Appétit" },
  { quote: "A masterclass in storytelling on a plate.", author: "Eater" },
  { quote: "Featured on CBS Sunday Morning — a Savannah landmark.", author: "CBS" },
];
