import React, { useEffect, useState } from "react";
import styles from "./omnitrix.module.css";
import { useCurrentSection } from "../../section-provider";
import { Redo, Undo } from "lucide-react";
import CarouselOmnitrix from "./carousel-omnitrix";
import { useOpenedSkillId } from "../opened-skill-provider";

const Omnitrix = () => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const currentSection = useCurrentSection();
  const [isOmniOpen, setIsOmniOpen] = useState(false);
  const { openedSkillId, setOpenedSkillId } = useOpenedSkillId();
  const [transforms, setTransforms] = useState({
    greenCircle: {
      transform: "translate(-50%, -50%) rotate(0deg)",
      transition: "transform 0.5s ease-in-out",
    },
    outerBorder: {
      transform: "rotate(0deg)",
      transition: "transform 0.5s ease-in-out",
    },
    left: {
      transform: "translate(-61%, -5%) rotate(-90deg)",
      transition: "transform 0.5s ease-in-out",
    },
    right: {
      transform: "translate(20%, -5%) rotate(90deg)",
      transition: "transform 0.5s ease-in-out",
    },
    box: {
      transform: "translate(-25%, -25%)",
      transition:
        "transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
      width: "200%",
      height: "200%",
    },
  });

  const resetElements = () => {
    setTransforms({
      greenCircle: {
        transform: "translate(-50%, -50%) rotate(0deg)",
        transition: "transform 0.5s ease-in-out",
      },
      outerBorder: {
        transform: "rotate(0deg)",
        transition: "transform 0.5s ease-in-out",
      },
      left: {
        transform: "translate(-61%, -5%) rotate(-90deg)",
        transition: "transform 0.5s ease-in-out",
      },
      right: {
        transform: "translate(20%, -5%) rotate(90deg)",
        transition: "transform 0.5s ease-in-out",
      },
      box: {
        transform: "translate(-25%, -25%)",
        transition:
          "transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
        width: "200%",
        height: "200%",
      },
    });
  };

  useEffect(() => {
    resetElements();
  }, []);

  const handleRotateClick = (angle: number) => {
    const newRotation = currentRotation - angle;
    setCurrentRotation(newRotation);

    setTransforms((prev) => ({
      ...prev,
      greenCircle: {
        ...prev.greenCircle,
        transform: `translate(-50%, -50%) rotate(${newRotation}deg)`,
        transition: "transform 0.5s ease-in-out",
      },
      outerBorder: {
        ...prev.outerBorder,
        transform: `rotate(${-newRotation}deg)`,
        transition: "transform 0.5s ease-in-out",
      },
    }));
    // handle changing the current slide
    if (angle === 90) {
      if (openedSkillId >= 4) {
        setOpenedSkillId(1);
      } else {
        setOpenedSkillId(openedSkillId + 1);
      }
    } else if (angle === -90) {
      if (openedSkillId <= 1) {
        setOpenedSkillId(4);
      } else {
        setOpenedSkillId(openedSkillId - 1);
      }
    }

    setTimeout(() => {
      setTransforms((prev) => ({
        ...prev,
        greenCircle: {
          ...prev.greenCircle,
          transition: "transform 0.5s ease-in-out",
        },
        outerBorder: {
          ...prev.outerBorder,
          transition: "transform 0.5s ease-in-out",
        },
      }));
    }, 500);
  };

  const handleOpenClick = () => {
    setTransforms((prev) => ({
      ...prev,
      left: {
        ...prev.left,
        transform: "translate(-85%, -12%) rotate(-90deg)",
        transition: "transform 0.5s ease-in-out",
      },
      right: {
        ...prev.right,
        transform: "translate(50%, -12%) rotate(90deg)",
        transition: "transform 0.5s ease-in-out",
      },
      box: {
        ...prev.box,
        transform: "translate(-8%, -10%)",
        transition:
          "transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
        width: "120%",
        height: "120%",
      },
    }));
  };

  useEffect(() => {
    if (currentSection === "skills" && !isOmniOpen) {
      handleOpenClick();
      setIsOmniOpen(true);
    } else {
      if (isOmniOpen && currentSection !== "skills") {
        resetElements();
        setIsOmniOpen(false);
      }
    }
  }, [currentSection]);

  return (
    <div className="flex flex-col">
      <div className={styles.omnitrix}>
        <div className={styles["outer-border"]} style={transforms.outerBorder}>
          <div className={styles.effect}></div>
          <div className={styles["inner-border"]}>
            <div
              className={styles["green-circle"]}
              style={transforms.greenCircle}
            >
              {isOmniOpen && <CarouselOmnitrix isOmniOpen={isOmniOpen} />}
              <div
                className={styles["left-side"]}
                style={transforms.left}
              ></div>
              <div
                className={styles["right-side"]}
                style={transforms.right}
              ></div>
              <div className={styles["box-container"]} style={transforms.box}>
                <div className={styles.diamond}></div>
              </div>
            </div>

            <div className={styles["dot-container-1"]}>
              <div className={styles["dot-1"]}>
                <div className={styles["dot-inner"]}></div>
              </div>
            </div>

            <div className={styles["dot-container-2"]}>
              <div className={styles["dot-2"]}>
                <div className={styles["dot-inner"]}></div>
              </div>
            </div>

            <div className={styles["dot-container-3"]}>
              <div className={styles["dot-3"]}>
                <div className={styles["dot-inner"]}></div>
              </div>
            </div>

            <div className={styles["dot-container-4"]}>
              <div className={styles["dot-4"]}>
                <div className={styles["dot-inner"]}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-10 mt-10 w-full justify-evenly">
        <button
          className="rotate-[.6turn] text-spfg"
          onClick={() => handleRotateClick(+90)}
        >
          <Redo />
        </button>
        <button
          className="rotate-[.3turn] text-spfg"
          onClick={() => handleRotateClick(-90)}
        >
          <Undo />
        </button>
      </div>
    </div>
  );
};

export default Omnitrix;
