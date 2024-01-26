import styles from "./panel.module.css";

type PanelProps = {
  padding?: number;
  children: React.ReactNode;
  column?: boolean;
};

const Panel = ({ children, padding, column }: PanelProps) => {
  return (
    <div
      style={{
        padding: padding,
        flexDirection: column ? "column" : undefined,
      }}
      className={styles.panel}
    >
      {children}
    </div>
  );
};

export default Panel;
