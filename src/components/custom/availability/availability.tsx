import styles from "./live-green.module.css";
const LiveGreen = () => {
  return (
    <div className={`${styles["btn-container"]} overflow-visible pl-0.5`}>
      <a
        className={`${styles.btn} ${styles["btn--shockwave"]} ${styles["is-active"]} overflow-visible`}
      ></a>
    </div>
  );
};

export default LiveGreen;
