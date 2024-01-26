import styles from "./price.module.css";

type Props = {
  price: number;
  name: string;
  bullets: string[];
  grow?: boolean;
};

const PriceOption = ({ bullets, name, price, grow }: Props) => {
  const colorResolver = (name: string) => {
    switch (name.toLowerCase()) {
      case "standard":
        return "red";
      case "professional":
        return "green";
      default:
        return "blue";
    }
  };

  return (
    <div
      className={styles.card}
      style={
        {
          // width:grow?:
        }
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.price + " " + styles[`${colorResolver(name)}`]}>
          ${price} <div className={styles.pricedesc}>/mo</div>
        </div>
        <div className={styles.name + " " + styles[`${colorResolver(name)}`]}>
          {name}
        </div>
      </div>
      <img src="../src/assets/Waves.png" />
      <ul className={styles.bottom}>
        {bullets.map((e) => (
          <li key={e}>
            <p>{e}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceOption;
