// Most of this is copy/pasted from https://github.com/specter256/react-simple-image-viewer
// Needed to customize support for figcaption, as well as allowing for alt tag data to make it from thumbnail view into lightbox view
// FocusTrap docs: https://github.com/focus-trap/focus-trap-react & https://github.com/focus-trap/focus-trap

import { CSSProperties, useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import FocusTrap from "focus-trap-react";
import scientificRef from "./helperFunction";

interface IProps {
  src: string[];
  currentIndex?: number;
  backgroundStyle?: CSSProperties;
  disableScroll?: boolean;
  closeOnClickOutside?: boolean;
  onClose?: () => void;
  closeComponent?: JSX.Element;
  leftArrowComponent?: JSX.Element;
  rightArrowComponent?: JSX.Element;
  role: string;
}

const ImageViewer = (props: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(props.currentIndex ?? 0);

  const changeImage = useCallback(
    (delta: number) => {
      let nextIndex = (currentIndex + delta) % props.src.length;
      if (nextIndex < 0) nextIndex = props.src.length - 1;
      setCurrentIndex(nextIndex);
    },
    [currentIndex]
  );

  const handleClick = useCallback(
    (event: any) => {
      if (!event.target || !props.closeOnClickOutside) {
        return;
      }

      const checkId = event.target.id === 'ReactSimpleImageViewer';
      const checkClass = event.target.classList.contains('react-simple-image-viewer__slide');

      if (checkId || checkClass) {
        event.stopPropagation();
        props.onClose?.();
      }
    },
    [props.onClose]
  );

  const handleKeyDown = useCallback(
    (event: any) => {
      if (event.key === "Escape") {
        props.onClose?.();
      }

      if (["ArrowLeft", "h"].includes(event.key)) {
        changeImage(-1);
      }

      if (["ArrowRight", "l"].includes(event.key)) {
        changeImage(1);
      }
    },
    [props.onClose, changeImage]
  );

  const handleWheel = useCallback(
    (event: any) => {
      if (event.wheelDeltaY > 0) {
        changeImage(-1);
      } else {
        changeImage(1);
      }
    },
    [changeImage]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    if (!props.disableScroll) {
      document.addEventListener("wheel", handleWheel);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      if (!props.disableScroll) {
        document.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handleKeyDown, handleWheel]);

  // pulling this out of the <img> to be able to handle the object it refers to
  const image:any = props.src[currentIndex]

  return (
    <FocusTrap 
      onKeyDown={handleKeyDown} 
      focusTrapOptions={{initialFocus: "figure"}}
    >
      <div
        id="ReactSimpleImageViewer"
        className={`${styles.wrapper} react-simple-image-viewer__modal`}
        role="dialog"
        aria-label="slide"
        onClick={handleClick}
        style={props.backgroundStyle}
      >
        {props.src.length > 1 && (
          <button
            type="button"
            className={`${styles.navigation} ${styles.prev} react-simple-image-viewer__previous`}
            onClick={() => changeImage(-1)}
          >
            { props.leftArrowComponent || "❮" }
          </button>
        )}

        <figure className={`${styles.slide} react-simple-image-viewer__slide`} onClick={handleClick} tabIndex={0}>
          <img className={styles.image} src={image.secure_url} alt={image.context?.custom?.alt || image.context?.alt || ""} />
          <figcaption className={`${styles.caption} react-simple-image-viewer__caption`}>
            <div>{scientificRef(image.metadata?.caption) ?? ''}</div>
          </figcaption>
        </figure>

        {props.src.length > 1 && (
          <button
            type="button"
            className={`${styles.navigation} ${styles.next} react-simple-image-viewer__next`}
            onClick={() => changeImage(1)}
          >
            { props.rightArrowComponent || "❯" }
          </button>
        )}

        <button
          type="button"
          className={`${styles.close} react-simple-image-viewer__close`}
          onClick={() => props.onClose?.()}
        >
          { props.closeComponent || "×" }
        </button>
      </div>
    </FocusTrap>
  );
};

export default ImageViewer;