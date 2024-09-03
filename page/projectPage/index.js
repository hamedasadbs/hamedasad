/*inner component*/
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
/*style*/
import styles from "./index.module.scss";
/*child component*/
import Project from "./project/index";

export default function ProjectPage() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/project`)
      .then((res) => setMyData(res.data.project))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <article className={styles.projectPage}>
      {myData.map((data, index) => (
        <Project key={index} data={data} />
      ))}
    </article>
  );
}
