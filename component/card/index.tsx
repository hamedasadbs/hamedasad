import { ComponentProps } from "react";
import styles from "./index.module.scss";

export default function Card(props: any) {
  return (
    <a
      href={props.href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {props.title} <span>-&gt;</span>
      </h2>
      <p>{props.paragraph}</p>
    </a>
  );
}
