import Button from "../Button";
import styles from "./header.module.css";

const dummylinks = ["Features", "Edge Network", "Pricing"];

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>SuperNet</h1>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        {dummylinks.map((e) => (
          <a className={styles["header-link"]} href="#" key={e}>
            {e}
          </a>
        ))}
        <Button primary text="Sign Up" height={39} width={124} />
      </nav>
    </div>
  );
};

export default Header;
