import SneakerCard from "../Cards/SneakerCard";
import styles from "../Styles/SneakerInfo.module.css";

interface Sneaker {
  id: number;
  category: string;
  gravityScore: number;
  description: string;
  price: number;
  image: string;
}
interface Props {
  sneakers: Sneaker[];
}
const SneakersInfo = ({ sneakers }: Props) => {
  return (
    <main className={styles.main}>
      {sneakers.map((sneaker) => (
        <SneakerCard
          key={sneaker.id}
          price={sneaker.price}
          image={sneaker.image}
          gravityScore={sneaker.gravityScore}
          category={sneaker.category}
          description={sneaker.description}
        />
      ))}
    </main>
  );
};

export default SneakersInfo;
