"use client";

/*inner component*/
import Image from "next/image";
/*style*/
import styles from "./page.module.scss";
/*component*/
import Card from "../../component/card/index";
import Header from "../../layout/header/index.jsx";

import { Context } from "../../middleware/library/context";
import { useState } from "react";

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

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/hamed.png"
            alt="Hamed Asadollahi"
            width={732}
            height={880}
            priority
          />
          <svg
            className={styles.backDecor}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ff776d"
              d="M42.8,-63.4C51.2,-61.1,50.8,-42.1,56.6,-26.7C62.3,-11.3,74.1,0.5,78.2,15.2C82.3,29.9,78.7,47.6,67.1,54.6C55.4,61.6,35.7,57.9,18.9,61.5C2.2,65,-11.6,75.6,-19,70.8C-26.5,65.9,-27.7,45.4,-33.2,32.5C-38.8,19.5,-48.7,14,-53.2,5.5C-57.8,-3,-57.1,-14.3,-52.9,-24.5C-48.8,-34.6,-41.2,-43.5,-31.8,-45.3C-22.4,-47.1,-11.2,-41.8,3,-46.5C17.2,-51.1,34.3,-65.6,42.8,-63.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className={styles.grid}>
          <Card
            paragraph="Find in-depth information about Next.js features and API."
            title="پروژه ها"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          />

          <Card
            paragraph="Learn about Next.js in an interactive course with&nbsp;quizzes!"
            title="Learn"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          />

          <Card
            paragraph="Explore starter templates for Next.js."
            title="Templates"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          />

          <Card
            paragraph="Instantly deploy your Next.js site to a shareable URL with Vercel."
            title="Deploy"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          />
        </div>
      </main>
    </Context.Provider>
  );
}
