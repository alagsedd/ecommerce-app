import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import SneakerSlider from "../Components/SneakerSlider";
import SneakersInfo from "../Components/SneakersInfo";
import SneakersFilter from "../Components/SneakersFilter";
import s1 from "../assets/Images/sneaker-one.jpg";
import s2 from "../assets/Images/sneaker-two.jpg";
import s3 from "../assets/Images/sneaker-five.jpg";
const HomePage = () => {
  const [sneakers, setSneakers] = useState([
    {
      id: 1,
      category: "Running",
      gravityScore: 9.5,
      description:
        "The Velocity Runner is a high-performance running shoe designed for serious athletes. Its lightweight construction and responsive cushioning make it ideal for sprinters and long-distance runners alike. Take your running game to the next level with the Velocity Runner.",
      price: 129.99,
      image: s1,
    },
    {
      id: 2,
      category: "Basketball",
      gravityScore: 9.0,
      description:
        "The Dunk Master Pro is the ultimate basketball shoe for those who demand the best. Featuring a high-top design for ankle support and a specially engineered sole for maximum traction on the court, these sneakers will help you dominate the game. Elevate your performance and style with Dunk Master Pro.",
      price: 149.99,
      image: s2,
    },
    {
      id: 3,
      category: "Casual",
      gravityScore: 8.0,
      description:
        "The Everyday Comfort Sneaker is perfect for daily wear. Its sleek and versatile design pairs well with various outfits. With a cushioned insole and breathable materials, these sneakers keep your feet comfortable throughout the day.",
      price: 79.99,
      image: s3,
    },
    // {
    //   id: 4,
    //   category: "Hiking",
    //   gravityScore: 8.7,
    //   description: "The Trailblazer Hiker is built for outdoor enthusiasts who love exploring rugged terrains. With a durable, waterproof construction and a high-traction outsole, these hiking boots provide stability and protection on your wilderness adventures. Conquer the toughest trails with Trailblazer Hiker.",
    //   price: 199.99,
    // },
    // {
    //   id: 5,
    //   category: "Running",
    //   gravityScore: 9.2,
    //   description: "The Elite Performance Runner is designed for runners seeking the perfect balance of speed and comfort. Its lightweight design and responsive cushioning make it an ideal choice for both beginners and experienced runners. Whether you're sprinting or going the distance, these sneakers will help you achieve your personal best.",
    //   price: 119.99,
    // },
    // {
    //   id: 6,
    //   category: "Women",
    //   gravityScore: 8.5,
    //   description: "The Graceful Stride Women's Sneaker combines style and comfort for active women on the go. With a feminine design and a cushioned sole, these sneakers are perfect for workouts, running errands, or casual outings. Step into comfort and confidence with Graceful Stride.",
    //   price: 89.99,
    // },
    // {
    //   id: 7,
    //   category: "Men",
    //   gravityScore: 9.1,
    //   description: "The PowerMax Men's Training Shoe is engineered for serious gym-goers. Its stability and support features provide the perfect platform for lifting weights and cross-training. Whether you're hitting the gym or doing intense workouts, PowerMax has got you covered.",
    //   price: 139.99,
    // },
    // {
    //   id: 8,
    //   category: "Women",
    //   gravityScore: 8.8,
    //   description: "The Active Lifestyle Women's Sneaker is designed for women who prioritize both style and comfort. With a sleek design and plush cushioning, these sneakers are suitable for daily wear, fitness classes, or leisurely strolls. Embrace an active lifestyle with these stylish sneakers.",
    //   price: 99.99,
    // },
    // {
    //   id: 9,
    //   category: "Men",
    //   gravityScore: 9.3,
    //   description: "The ProRunner Men's Edition is a premium running shoe crafted for professional athletes. Its cutting-edge technology provides unmatched speed, stability, and comfort. Train like a pro and set new records with the ProRunner Men's Edition.",
    //   price: 179.99,
    // },
    // {
    //   id: 10,
    //   category: "Expensive",
    //   gravityScore: 9.8,
    //   description: "Introducing the Luxe Stride Limited Edition - the epitome of luxury in sneakers. Handcrafted with the finest materials, these sneakers are a symbol of opulence and style. Elevate your footwear collection with the Luxe Stride Limited Edition.",
    //   price: 499.99,
    // },
    // {
    //   id: 11,
    //   category: "Expensive",
    //   gravityScore: 9.7,
    //   description: "The Royal Prestige Sneaker is a masterpiece of craftsmanship and design. Made with exotic materials and featuring intricate detailing, these sneakers are a symbol of prestige and exclusivity. Step into a world of luxury with the Royal Prestige Sneaker.",
    //   price: 799.99,
    // },
    // {
    //   id: 12,
    //   category: "Women",
    //   gravityScore: 8.6,
    //   description: "The Elegance Walk Women's Shoe is a perfect blend of elegance and comfort. Whether you're attending a formal event or going for a casual outing, these shoes will complement your style. Walk with confidence in the Elegance Walk Women's Shoe.",
    //   price: 129.99,
    // },
    // {
    //   id: 13,
    //   category: "Men",
    //   gravityScore: 9.4,
    //   description: "The Precision Athlete Men's Shoe is engineered for precision and performance. Its advanced technology offers stability and support for athletes aiming for perfection in their sport. Achieve your athletic goals with the Precision Athlete Men's Shoe.",
    //   price: 159.99,
    // },
    // {
    //   id: 14,
    //   category: "Women",
    //   gravityScore: 8.9,
    //   description: "The Glamour Stride Women's Sneaker is a fashion-forward choice for trendsetters. With a glamorous design and comfortable fit, these sneakers are ideal"
    // }
  ]);
  const handleSelectCategory = (category: string) => {
    console.log(category);
  };
  return (
    <>
      <div className="body">
        <NavBar />
        <SneakerSlider />
        <SneakersFilter onSelectCategory={handleSelectCategory} />
        <SneakersInfo sneakers={sneakers} />
      </div>
    </>
  );
};

export default HomePage;
