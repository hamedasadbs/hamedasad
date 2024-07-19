/*inner component*/
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Context } from "../../middleware/library/context";
/*style*/
import styles from "./index.module.scss";
/*icon*/
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
/*child component*/
import MyGallery from "../../component/myGallery/index";

export default function Home() {
  const theme = useContext(Context).theme[0];

  return (
    <article className={styles.homePage}>
      <section>
        <span>
          <h1 className={theme == "light" ? "text-sky-900" : "text-sky-500"}>
            حامد اسداللهی اصل اردبیلی
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
      <MyGallery type={2} />
    </article>
  );
}
