import React, { useEffect, useRef, useState } from "react";
import styles from "./omnitrix.module.css";
import { useCurrentSection } from "../../section-provider";
import { Redo, Undo } from "lucide-react";
import CarouselOmnitrix from "./carousel-omnitrix";
import { useOpenedSkillId } from "../opened-skill-provider";

const Omnitrix = () => {
  const currentSection = useCurrentSection();
  const [isOmniOpen, setIsOmniOpen] = useState(false);
  const { openedSkillId, setOpenedSkillId } = useOpenedSkillId();
  // Current rotation angle (this keeps track of how much the element has rotated)
  const currentRotation = useRef(0); // Use ref to store the current rotation without causing re-renders

  const [transforms, setTransforms] = useState({
    greenCircle: {
      transform: "translate(-50%, -50%) rotate(0deg)",
      transition: "transform 0.5s ease-in-out",
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "90%",
      height: "90%",
      borderRadius: "50%",
      background: "#b8ef32",
      zIndex: 2,
      strokeWidth: "1px",
    },
    outerBorder: {
      transform: "rotate(0deg)",
      transition: "transform 0.5s ease-in-out",
      position: "relative",
      display: "flex",
      border: "solid 3px #040404",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "#474747",
      strokeWidth: "1px",
    },
    left: {
      transform: "translate(-61%, -5%) rotate(-90deg)",
      transition: "transform 0.5s ease-in-out",
      position: "absolute",
      zIndex: 1,
      background:
        "linear-gradient(to bottom right, #0c0c0c 51%, transparent 51%) bottom right, linear-gradient(to bottom left, #0c0c0c 51%, transparent 51%) bottom left",
      backgroundSize: "50.5% 50%",
      backgroundRepeat: "no-repeat",
      width: "260px",
      height: "170px",
    },
    right: {
      transform: "translate(20%, -5%) rotate(90deg)",
      transition: "transform 0.5s ease-in-out",
      position: "absolute",
      zIndex: 1,
      background:
        "linear-gradient(to bottom right, #0c0c0c 51%, transparent 51%) bottom right, linear-gradient(to bottom left, #0c0c0c 51%, transparent 51%) bottom left",
      backgroundSize: "50.5% 50%",
      backgroundRepeat: "no-repeat",
      width: "260px",
      height: "170px",
    },
    box: {
      transform: "translate(-25%, -25%)",
      transition:
        "transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
      width: "200%",
      height: "200%",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#666465",
    },
  });

  const closeOmnitrix = () => {
    setTransforms({
      greenCircle: {
        transform: "translate(-50%, -50%) rotate(0deg)",
        transition: "transform 0.5s ease-in-out",
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "90%",
        height: "90%",
        borderRadius: "50%",
        background: "#b8ef32",
        zIndex: 2,
        strokeWidth: "1px",
      },
      outerBorder: {
        transform: "rotate(0deg)",
        transition: "transform 0.5s ease-in-out",
        position: "relative",
        display: "flex",
        border: "solid 3px #040404",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: "#474747",
        strokeWidth: "1px",
      },
      left: {
        transform: "translate(-61%, -5%) rotate(-90deg)",
        transition: "transform 0.5s ease-in-out",
        position: "absolute",
        zIndex: 1,
        background:
          "linear-gradient(to bottom right, #0c0c0c 51%, transparent 51%) bottom right, linear-gradient(to bottom left, #0c0c0c 51%, transparent 51%) bottom left",
        backgroundSize: "50.5% 50%",
        backgroundRepeat: "no-repeat",
        width: "260px",
        height: "170px",
      },
      right: {
        transform: "translate(20%, -5%) rotate(90deg)",
        transition: "transform 0.5s ease-in-out",
        position: "absolute",
        zIndex: 1,
        background:
          "linear-gradient(to bottom right, #0c0c0c 51%, transparent 51%) bottom right, linear-gradient(to bottom left, #0c0c0c 51%, transparent 51%) bottom left",
        backgroundSize: "50.5% 50%",
        backgroundRepeat: "no-repeat",
        width: "260px",
        height: "170px",
      },
      box: {
        transform: "translate(-25%, -25%)",
        transition:
          "transform 0.5s ease-in-out, width 0.5s ease-in-out, height 0.5s ease-in-out",
        width: "200%",
        height: "200%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#666465",
      },
    });
  };

  const handleRotateClick = (angle: number) => {
    // Update the current rotation by adding the angle
    currentRotation.current += angle;

    // Set the transforms to reflect the updated rotation
    setTransforms((prev) => ({
      ...prev,
      greenCircle: {
        ...prev.greenCircle,
        transform: `translate(-50.0000000000000%, -50.00000000%) rotate(${-currentRotation.current}deg)`,
        transition: "transform 0.5s ease-in-out",
        strokeWidth: "2",
      },
      outerBorder: {
        ...prev.outerBorder,
        transform: `rotate(${currentRotation.current}deg)`,
        transition: "transform 0.5s ease-in-out",
        aspectRatio: "1/1",
      },
    }));

    // Handle changing the current slide based on the angle
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
        setIsOmniOpen(false);
        closeOmnitrix();
      }
    }
  }, [currentSection]);

  return (
    <div className="flex flex-col">
      <div className={styles.omnitrix}>
        <div
          className={styles["outer-border"]}
          style={transforms.outerBorder as React.CSSProperties}
        >
          <div className={styles.effect}></div>
          <div className={styles["inner-border"]}>
            <div
              className={styles["green-circle"]}
              style={transforms.greenCircle as React.CSSProperties}
            >
              {isOmniOpen && <CarouselOmnitrix isOmniOpen={isOmniOpen} />}
              <div
                className={styles["left-side"]}
                style={transforms.left as React.CSSProperties}
              ></div>
              <div
                className={styles["right-side"]}
                style={transforms.right as React.CSSProperties}
              ></div>
              <div
                className={styles["box-container"]}
                style={transforms.box as React.CSSProperties}
              >
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
