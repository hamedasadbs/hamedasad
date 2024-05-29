"use client";
/*style*/
import styles from "./index.module.scss";
/*inner component*/
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
/*context*/
import { Context } from "../../middleware/library/context";
/*icon*/
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

export default function Header() {
  /*variable*/
  const logo = require("../../assets/mainLogo.svg");
  const logoDarkMode = require("../../assets/mainLogo-darkMode.svg");
  const router = useRouter();
  /*state*/
  const [theme, setTheme] = useContext(Context).theme;
  const [delayTheme, setDelayTheme] = useState(theme);
  /*function*/
  const themeChangeHandler = () => {
    if (theme == "light") {
      document.getElementById("iLight").style.right = 20 + "px";
      setTheme("dark");
      setTimeout(() => {
        setDelayTheme("dark");
      }, 350);
    } else {
      setTheme("light");
      document.getElementById("iDark").style.right = -20 + "px";
      setTimeout(() => {
        setDelayTheme("light");
      }, 350);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        <button
          className={
            styles.themeChanger +
            " " +
            (theme == "light" ? "bg-sky-500" : "bg-sky-900")
          }
          onClick={themeChangeHandler}
        >
          <div className={styles.themeChangerToggle}>
            {delayTheme == "dark" ? (
              <Brightness3Icon
                id="iDark"
                className={styles.themeChangerToggleIconDark}
              />
            ) : (
              <WbSunnyIcon
                id="iLight"
                className={styles.themeChangerToggleIconLight}
              />
            )}
            <svg
              className={styles.wave}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill={theme == "dark" ? "#4b5563" : "white"}
                fillOpacity="1"
                d="M0,320L18.5,304C36.9,288,74,256,111,240C147.7,224,185,224,222,192C258.5,160,295,96,332,64C369.2,32,406,32,443,32C480,32,517,32,554,80C590.8,128,628,224,665,256C701.5,288,738,256,775,245.3C812.3,235,849,245,886,240C923.1,235,960,213,997,224C1033.8,235,1071,277,1108,277.3C1144.6,277,1182,235,1218,229.3C1255.4,224,1292,256,1329,240C1366.2,224,1403,160,1422,128L1440,96L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
              ></path>
            </svg>
          </div>
        </button>
        <span className={styles.nav}>
          <Link
            className={theme == "light" ? "text-sky-950" : "text-white"}
            href="/"
          >
            رزومه
          </Link>
          <div
            className={
              styles.decoration +
              " " +
              (theme == "dark" ? "bg-slate-900" : "bg-white")
            }
          ></div>
        </span>
        <span className={styles.nav}>
          <Link
            className={theme == "light" ? "text-sky-950" : "text-white"}
            href="/"
          >
            پروژه ها
          </Link>
          <div
            className={
              styles.decoration +
              " " +
              (theme == "dark" ? "bg-slate-900" : "bg-white")
            }
          ></div>
        </span>
        <span className={styles.nav}>
          <Link
            className={theme == "light" ? "text-sky-950" : "text-white"}
            href="/"
          >
            بلاگ
          </Link>
          <div
            className={
              styles.decoration +
              " " +
              (theme == "dark" ? "bg-slate-900" : "bg-white")
            }
          ></div>
        </span>
        <span className={styles.nav}>
          <Link
            className={theme == "light" ? "text-sky-950" : "text-white"}
            href="/about"
          >
            {router.pathname == "/about" && (
              <InfoIcon style={{ marginLeft: 5 }} />
            )}
            درباره من
          </Link>
          <div
            className={
              styles.decoration +
              " " +
              (theme == "dark" ? "bg-slate-900" : "bg-white")
            }
          ></div>
        </span>
        <span className={styles.nav}>
          <Link
            className={theme == "light" ? "text-sky-950" : "text-white"}
            href="/"
          >
            {router.pathname == "/" && <HomeIcon style={{ marginLeft: 5 }} />}
            خانه
          </Link>

          <div
            className={
              styles.decoration +
              " " +
              (theme == "dark" ? "bg-slate-900" : "bg-white")
            }
          ></div>
        </span>
      </nav>
      <button className={styles.menu}>
        <MenuIcon className={styles.menuIcon} />
      </button>
      <span className={styles.logoContainer}>
        <Image
          src={theme == "light" ? logo : logoDarkMode}
          alt="Vercel Logo"
          className={styles.logo}
          width={150}
        />
      </span>
    </header>
  );
}
