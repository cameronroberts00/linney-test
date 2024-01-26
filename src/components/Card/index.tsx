import styles from "./card.module.css";

type CardProps = {
  image: string;
  title: string;
  text: React.ReactNode;
};

const Card = ({ image, title, text }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <div
        className={styles.image}
        style={{
          boxShadow: "inset 40px 0px 20px 0px rgba(49, 49, 49, 1)",
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Card;
