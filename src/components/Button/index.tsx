import styles from "./button.module.css";

type ButtonProps = {
  leftSection?: React.ReactNode;
  text: string;
  onClick?: () => void;
  height?: number;
  width?: number;
  primary?: boolean;
  borderVers?: boolean;
};

const Button = ({
  primary,
  leftSection,
  text,
  onClick,
  height,
  width,
  borderVers,
}: ButtonProps) => {
  return (
    <button
      style={{
        height: height,
        width: width,
        border: borderVers ? "1px solid #DFDFDF" : undefined,
        backgroundColor: borderVers
          ? "#313131"
          : primary
          ? "#02b159"
          : "#242424",
      }}
      className={styles.button}
      onClick={onClick}
    >
      {leftSection} {text}
    </button>
  );
};

export default Button;
