import styles from "../Styles/NavBar.module.css";
import { PiDotsNineBold } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import user from "../../src/assets/Images/user.png";
import { GiSandal } from "react-icons/gi";
import { BsCollection } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FcBusinesswoman } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { useState } from "react";

const NavBar = () => {
  const [toggleOptions, setToggleOptions] = useState(false);

  return (
    <nav className={styles.nav}>
      {toggleOptions ? (
        <ul className={styles.ul}>
          <li>
            <IoIosCloseCircleOutline
              className={styles.close}
              onClick={() => setToggleOptions(false)}
              size="40"
            />
          </li>
          <li>
            {" "}
            <BsCollection size="30" />
            <span className={styles.links}>Collections</span>
          </li>
          <li>
            {" "}
            <FcBusinessman size="30" />
            <span className={styles.links}>Men</span>
          </li>
          <li>
            {" "}
            <FcBusinesswoman size="30" />
            <span className={styles.links}>Women</span>
          </li>
          <li>
            <RiTeamFill size="30" />
            <span className={styles.links}>About us</span>
          </li>
          <li>
            {" "}
            <MdPermContactCalendar size="30" />
            <span className={styles.links}>Contact</span>
          </li>
        </ul>
      ) : (
        <PiDotsNineBold
          onClick={() => setToggleOptions(true)}
          className={styles.options}
          size="30"
        />
      )}
      <GiSandal size="40" className={`ms-3 ${styles.icon} `} />
      <span className={styles.name}>Sneakers</span>
      <AiOutlineShoppingCart className={styles.cart} size="25" />
      <img
        src={user}
        alt="Your browser doesn't support this image"
        className={styles.image}
      />
    </nav>
  );
};

export default NavBar;
