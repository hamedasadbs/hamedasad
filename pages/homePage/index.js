/*inner component*/
import Image from "next/image";
import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
/*style*/
import styles from "./index.module.scss";
/*icon*/
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Context } from "../../middleware/library/context";

export default function Home() {
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
    <article className={styles.homePage}>
      <section>
        <span>
          <h1 className={theme == "light" ? "text-sky-900" : "text-sky-500"}>
            حامد اسداللهی
          </h1>
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
        </span>

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
          className={styles.myImage}
          src="/hamed.png"
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
          src={require("../../public/icon/javascript.svg")}
          alt="javascript"
        />
        <Image
          className={
            (theme == "dark" ? "filter grayscale invert brightness-70" : "") +
            " " +
            styles.css +
            " " +
            styles.icon
          }
          src={require("../../public/icon/css.svg")}
          alt="css"
        />
        <Image
          className={
            (theme == "dark" ? "filter grayscale invert brightness-70" : "") +
            " " +
            styles.html +
            " " +
            styles.icon
          }
          src={require("../../public/icon/html.svg")}
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
          src={require("../../public/icon/tailwind.svg")}
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
          src={require("../../public/icon/react.svg")}
          alt="react"
        />
        <Image
          className={
            (theme == "dark" ? "filter grayscale invert brightness-70" : "") +
            " " +
            styles.nodejs +
            " " +
            styles.icon
          }
          src={require("../../public/icon/nodejs.svg")}
          alt="nodejs"
        />
      </div>
    </article>
  );
}
