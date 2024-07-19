"use client";

/*inner component*/
import { useContext } from "react";
import { Context } from "../../../middleware/library/context.js";
/*style*/
import styles from "../index.module.scss";
/*component*/
import Header from "../../../layout/header/index.js";
import AboutPage from "../../../page/aboutPage/index.js";
import "../index.css";

export default function About() {
  const theme = useContext(Context).theme[0];

  return (
    <html>
      <head>
        <title>درباره من</title>
        <meta name="theme-color" content="#082f49" />
      </head>
      <body>
        <main
          className={
            styles.main + " " + (theme == "light" ? "bg-white" : "bg-slate-900")
          }
        >
          <Header />
          <AboutPage />
        </main>
        <div
          className={
            styles.designLeft +
            " " +
            (theme == "light" ? "bg-white" : "bg-slate-900")
          }
        >
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
          <div className={styles.shape}></div>
        </div>
      </body>
    </html>
  );
}
