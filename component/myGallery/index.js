/*inner component*/
import Image from "next/image";
import { useContext, useEffect } from "react";
/*style*/
import styles from "./index.module.scss";

import { Context } from "../../middleware/library/context";

export default function MyGallery(props) {
  const theme = useContext(Context).theme[0];

  useEffect(() => {
    let radius = 250;
    let icons = document.getElementsByClassName(styles.icon);
    let angle = 0;
    let step = (2 * Math.PI) / icons.length;
    if (icons.length > 0) {
      for (let i = 0; i < icons.length; i++) {
        var x = Math.round(250 + radius * Math.cos(angle) - 20);
        var y = Math.round(250 + radius * Math.sin(angle) - 20);
        icons[i].style.left = x + "px";
        icons[i].style.top = y + "px";
        angle += step;
      }
    }
  }, []);

  return (
    <>
      {props.type == 1 ? (
        <aside className={styles.myGalleryType1}>
          <Image
            className={styles.myImage}
            src={require("../../assets/image/hamed/hamed2.png")}
            alt="Hamed Asadollahi"
          />
        </aside>
      ) : (
        <aside className={styles.myGalleryType2}>
          <div className={styles.myImageContainer}>
            <Image
              className={styles.myImage}
              src={require("../../assets/image/hamed/hamed.png")}
              alt="Hamed Asadollahi"
              width={700}
              height={700}
              priority
            />
          </div>

          <div className={styles.icons}>
            <Image
              className={
                (theme == "dark" ? "filter grayscale" : "") +
                " " +
                styles.js +
                " " +
                styles.icon
              }
              src={require("../../assets/image/icon/javascript.svg")}
              alt="javascript"
            />
            <Image
              className={
                (theme == "dark"
                  ? "filter grayscale invert brightness-70"
                  : "") +
                " " +
                styles.css +
                " " +
                styles.icon
              }
              src={require("../../assets/image/icon/css.svg")}
              alt="css"
            />
            <Image
              className={
                (theme == "dark"
                  ? "filter grayscale invert brightness-70"
                  : "") +
                " " +
                styles.html +
                " " +
                styles.icon
              }
              src={require("../../assets/image/icon/html.svg")}
              alt="html"
            />
            <Image
              className={
                (theme == "dark" ? "filter grayscale brightness-200" : "") +
                " " +
                styles.tailwind +
                " " +
                styles.icon
              }
              src={require("../../assets/image/icon/tailwind.svg")}
              alt="tailwind"
            />
            <Image
              className={
                (theme == "dark" ? "filter grayscale brightness-200" : "") +
                " " +
                styles.react +
                " " +
                styles.icon
              }
              src={require("../../assets/image/icon/react.svg")}
              alt="react"
            />
            <Image
              className={
                (theme == "dark"
                  ? "filter grayscale invert brightness-70"
                  : "") +
                " " +
                styles.nodejs +
                " " +
                styles.icon
              }
              src={require("../../assets/image/icon/nodejs.svg")}
              alt="nodejs"
            />
          </div>
        </aside>
      )}
    </>
  );
}
