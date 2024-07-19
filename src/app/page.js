"use client";

/*inner component*/
import { useContext } from "react";
import { Context } from "../../middleware/library/context.js";
/*style*/
import styles from "./index.module.scss";
import "./index.css";
/*component*/
import Header from "../../layout/header/index.js";
import HomePage from "../../page/homePage/index.js";

export default function Home() {
  const theme = useContext(Context).theme[0];

  return (
    <html>
      <head>
        <title>خانه</title>
        <meta name="theme-color" content="#082f49" />
      </head>
      <body>
        <main
          className={
            styles.main + " " + (theme == "light" ? "bg-white" : "bg-slate-900")
          }
        >
          <Header />
          <HomePage />
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
        <div
          className={
            styles.designBottom +
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
