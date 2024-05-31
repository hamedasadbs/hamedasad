"use client";

/*inner component*/
import { useState } from "react";
import "./globals.scss";
import "./index.css";
/*style*/
import styles from "./index.module.scss";
/*component*/
import Header from "../layout/header/index.js";
import AboutPage from "./aboutPage/index.js";
/*context*/
import { Context } from "../middleware/library/context.js";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const context = {
    theme: [theme, setTheme],
  };

  return (
    <Context.Provider value={context}>
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
    </Context.Provider>
  );
}
