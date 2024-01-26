import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div>Copyright 2024</div>
      <div className={styles.linkwrapper}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Cookies
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Accessibility
        </a>
      </div>
    </footer>
  );
};

export default Footer;
