"use client";

/*inner component*/
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
/*style*/
import styles from "./page.module.scss";
/*component*/
import Header from "../../layout/header/index.jsx";
/*icon*/
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
/*context*/
import { Context } from "../../middleware/library/context";

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

        <article>
          <section>
            <h1 className={theme == "light" ? "text-sky-900" : "text-sky-500"}>
              حامد اسداللهی
            </h1>
            <h4
              className={theme == "light" ? "text-slate-900" : "text-slate-50"}
            >
              برنامه نویس فرانت اند تحت فریمورک های React.js و Next.js و
              React-Native
            </h4>
            <p
              className={theme == "light" ? "text-slate-900" : "text-slate-50"}
            >
              من حدود 3 ساله که برنامه نویس فرانت اند هستم و تجربه کار با انواع
              فریمورک های فرانت اند رو دارم. همچنین قادرم برای موبایل هم
              اپلیکیشن بسازم و در کمترین زمان ممکن پروژه های خودمو ارائه بدم.
            </p>
            <div className={styles.buttons}>
              <button
                onClick={() => toast.error("در حال برسی")}
                className={styles.hire}
              >
                استخدام
              </button>
              <button className={styles.resume}>دانلود رزومه</button>
            </div>
          </section>
          <div className={styles.myImageContainer}>
            <Image
              className={styles.myImage}
              src="/hamed.png"
              alt="Hamed Asadollahi"
              width={632}
              height={680}
              priority
            />
            <div className={styles.contacts}>
              <a target="-blank" href="https://www.instagram.com/hamedasadbs/">
                <InstagramIcon
                  className={
                    styles.contactIcons +
                    " " +
                    (theme == "light" ? "text-sky-500" : "text-slate-50")
                  }
                />
              </a>
              <a target="-blank" href="https://linkedin.com/hamedasadbs/">
                <LinkedInIcon
                  className={
                    styles.contactIcons +
                    " " +
                    (theme == "light" ? "text-sky-500" : "text-slate-50")
                  }
                />
              </a>
              <a target="-blank" href="https://github.com/hamedasadbs/">
                <GitHubIcon
                  className={
                    styles.contactIcons +
                    " " +
                    (theme == "light" ? "text-sky-500" : "text-slate-50")
                  }
                />
              </a>
            </div>
            <svg
              className={styles.backDecor}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#be123c"
                d="M42.8,-63.4C51.2,-61.1,50.8,-42.1,56.6,-26.7C62.3,-11.3,74.1,0.5,78.2,15.2C82.3,29.9,78.7,47.6,67.1,54.6C55.4,61.6,35.7,57.9,18.9,61.5C2.2,65,-11.6,75.6,-19,70.8C-26.5,65.9,-27.7,45.4,-33.2,32.5C-38.8,19.5,-48.7,14,-53.2,5.5C-57.8,-3,-57.1,-14.3,-52.9,-24.5C-48.8,-34.6,-41.2,-43.5,-31.8,-45.3C-22.4,-47.1,-11.2,-41.8,3,-46.5C17.2,-51.1,34.3,-65.6,42.8,-63.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </article>
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
    </Context.Provider>
  );
}
