/*inner component*/
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
/*style*/
import styles from "./index.module.scss";
/*child component*/
import About from "./about/index";

export default function AboutPage() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/about`)
      .then((res) => setMyData(res.data.about))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const footerImages = [
    "https://img.freepik.com/free-photo/programming-background-with-html_23-2150038863.jpg?t=st=1717175072~exp=1717178672~hmac=8ec5de10ff51b2f30c69550cecfbcf805347edfeaf1a47ac4002d681464338f3&w=996",
    "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?t=st=1717175029~exp=1717178629~hmac=6aa995726c2d180faa92300987bb78b8285e377de15ec2500f8f196ab67c5076&w=996",
    "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?t=st=1717175003~exp=1717178603~hmac=24bc40805a3849203846db0352fce866974a62900232693ffd72a94b33f16966&w=996",
    "https://img.freepik.com/free-photo/coding-man_1098-18084.jpg?t=st=1717174845~exp=1717178445~hmac=7139342d1bd32b4f3d8225ae3b2f324d465c3b5af8aa3ec327f2949ecfbfed2f&w=996",
    "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1717174480~exp=1717178080~hmac=6829d40d089fefe761d725b2d22248ae653217565421731f3f5a04757d9a8f5b&w=996",
  ];

  return (
    <article className={styles.aboutPage}>
      {myData.map((data, index) => (
        <About key={index} data={data} />
      ))}
      <div className={styles.footer}>
        {footerImages.map((imageSrc, index) => (
          <Image
            key={index}
            width={300}
            height={300}
            className={styles.footerImage}
            src={imageSrc}
            alt="front-end developer1"
            priority
          />
        ))}
      </div>
    </article>
  );
}
