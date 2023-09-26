import styles from "../../src/Styles/SneakerFilter.module.css";

interface Props {
  onSelectCategory: (category: string) => void;
}
const SneakersFilter = ({ onSelectCategory }: Props) => {
  return (
    <section className="mt-1">
      {" "}
      <label htmlFor="filter" className={styles.label}>
        Filter by:
      </label>
      <select
        onChange={(event) => {
          onSelectCategory(event.target.value);
        }}
        id="filter"
        className={styles.select}
      >
        <option value=""></option>
        <option value="expensive">Expensive</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="running">Running</option>
        <option value="basketball">BasketBall</option>
      </select>
    </section>
  );
};

export default SneakersFilter;
