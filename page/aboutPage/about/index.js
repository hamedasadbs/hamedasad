/*inner component*/
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../../middleware/library/context";
/*style*/
import styles from "./index.module.scss";
/*child component*/

export default function About({ data }) {
  const theme = useContext(Context).theme[0];

  return (
    <section className={styles.about}>
      <aside className={styles.titleContainer}>
        <h1 className={theme == "light" ? "text-sky-900" : "text-sky-500"}>
          {data.title}
        </h1>
        <h4 className={theme == "light" ? "text-slate-900" : "text-slate-50"}>
          {data.subTitle}
        </h4>
        <p className={theme == "light" ? "text-slate-900" : "text-slate-50"}>
          {data.text}
        </p>
      </aside>
      <aside className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={require(`../../../assets/image/about/${data.name}.png`)}
          alt="front-end developer1"
          priority
        />
      </aside>
    </section>
  );
}
