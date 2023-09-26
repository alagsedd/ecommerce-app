import { useState } from "react";
import NavBar from "../Components/NavBar";
import SneakerSlider from "../Components/SneakerSlider";
import SneakersInfo from "../Components/SneakersInfo";
import SneakersFilter from "../Components/SneakersFilter";
import s1 from "../assets/Images/sneaker-one.jpg";
import s2 from "../assets/Images/sneaker-two.jpg";
import s3 from "../assets/Images/sneaker-five.jpg";
import s4 from "../assets/Images/sneaker-six.jpg";
import s5 from "../assets/Images/sneaker-seven.jpg";
import s6 from "../assets/Images/sneaker-eight.jpg";
import s7 from "../assets/Images/sneaker-nine.jpg";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const sneakers = [
    {
      id: 1,
      category: "running",
      gravityScore: 9.5,
      price: 129.99,
      image: s1,
    },
    {
      id: 2,
      category: "basketball",
      gravityScore: 9.0,
      price: 149.99,
      image: s2,
    },
    {
      id: 3,
      category: "men",
      gravityScore: 8.0,
      price: 79.99,
      image: s3,
    },
    {
      id: 4,
      category: "men",
      gravityScore: 8.7,
      price: 199.99,
      image: s4,
    },
    {
      id: 5,
      category: "running",
      gravityScore: 9.2,
      price: 119.99,
      image: s5,
    },
    {
      id: 6,
      category: "basketball",
      gravityScore: 8.5,
      price: 89.99,
      image: s6,
    },
    {
      id: 7,
      category: "basketball",
      gravityScore: 9.1,
      price: 139.99,
      image: s7,
    },
  ];
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    console.log(category);
  };

  const visibleCategory = selectedCategory
    ? sneakers.filter((sneaker) => sneaker.category === selectedCategory)
    : sneakers;

  return (
    <>
      <div className="body">
        <NavBar />
        <SneakerSlider />
        <SneakersFilter onSelectCategory={handleSelectCategory} />
        <SneakersInfo sneakers={visibleCategory} />
      </div>
    </>
  );
};

export default HomePage;
