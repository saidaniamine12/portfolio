import styles from "./carousel-omnitrix.module.css";
import { useOpenedSkillId } from "../opened-skill-provider";

const CarouselOmnitrix = () => {
  const { openedSkillId, setOpenedSkillId } = useOpenedSkillId();

  // Function to go directly to a specific slide via dots
  const currentSlide = (index: number) => {
    setOpenedSkillId(index);
  };

  return (
    <div className={styles["slideshow-container"]}>
      <div
        className={`${styles.mySlides} ${styles.fade}`}
        style={{ display: openedSkillId === 1 ? "block" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          color="black"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-code-2"
        >
          <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="m5 12-3 3 3 3" />
          <path d="m9 18 3-3-3-3" />
        </svg>
      </div>

      <div
        className={`${styles.mySlides} ${styles.fade}`}
        style={{ display: openedSkillId === 2 ? "block" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          color="black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-server"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      </div>

      <div
        className={`${styles.mySlides} ${styles.fade}`}
        style={{ display: openedSkillId === 3 ? "block" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          color="black"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-layout-dashboard"
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      </div>

      <div
        className={`${styles.mySlides} ${styles.fade}`}
        style={{ display: openedSkillId === 4 ? "block" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          color="black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-blocks"
        >
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
        </svg>
      </div>

      {/* Dots */}
      <div className={styles["carousel-dots"]} style={{ textAlign: "center" }}>
        {[1, 2, 3, 4].map((index) => (
          <span
            key={index}
            className={styles["dot"]}
            onClick={() => currentSlide(index)}
            style={{
              width: "10px",
              height: "10px",
              backgroundColor:
                openedSkillId === index ? "hsl(var(--special-foreground))" : "",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselOmnitrix;
