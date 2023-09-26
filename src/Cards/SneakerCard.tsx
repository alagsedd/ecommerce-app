import styles from "../../src/Styles/SneakerCard.module.css";

interface Props {
  category: string;
  gravityScore: number;
  price: number;
  image: string;
}
const SneakerCard = ({ image, category, gravityScore, price }: Props) => {
  return (
    <article className={styles.article}>
      <img
        src={image}
        alt="Your browser doesn't support this image"
        className={styles.image}
      />
      <span className={styles.cat}>
        {" "}
        <span className={styles.design}>Category</span> : {"  "}
        {category}
      </span>
      <span className={styles.gravityScore}>
        <span className={styles.design}>Gravity Score</span> : {"  "}
        {gravityScore}
      </span>
      <span className={styles.price}>
        {" "}
        <span className={styles.design}>Price</span> : ${price}
      </span>
    </article>
  );
};

export default SneakerCard;
