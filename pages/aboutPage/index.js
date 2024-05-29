/*inner component*/
import Image from "next/image";
import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
/*style*/
import styles from "./index.module.scss";

import { Context } from "../../middleware/library/context";

export default function About() {
  const theme = useContext(Context).theme[0];

  const myImage = require("../../public/hamed.jpg");
  const developer1 = require("../../public/developer1.png");
  const developer2 = require("../../public/developer2.png");
  const developer3 = require("../../public/developer3.png");
  const developer4 = require("../../public/developer4.png");

  return (
    <article className={styles.aboutPage}>
      <section>
        <h1 className={theme == "light" ? "text-sky-900" : "text-sky-500"}>
          حامد اسداللهی
        </h1>
        <h4 className={theme == "light" ? "text-slate-900" : "text-slate-50"}>
          برنامه نویس فرانت اند تحت فریمورک های React.js و Next.js و
          React-Native
        </h4>
        <p className={theme == "light" ? "text-slate-900" : "text-slate-50"}>
          من حدود 3 ساله که برنامه نویس فرانت اند هستم و تجربه کار با انواع
          فریمورک های فرانت اند رو دارم. همچنین قادرم برای موبایل هم اپلیکیشن
          بسازم و در کمترین زمان ممکن پروژه های خودمو ارائه بدم.
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
          className={styles.developer1}
          src={developer1}
          alt="front-end developer1"
          priority
        />
        <Image
          className={styles.developer2}
          src={developer2}
          alt="front-end developer2"
          priority
        />
        <Image
          className={styles.developer3}
          src={developer3}
          alt="front-end developer3"
          priority
        />
        <Image
          className={styles.developer4}
          src={developer4}
          alt="front-end developer4"
          priority
        />
      </div>
    </article>
  );
}
