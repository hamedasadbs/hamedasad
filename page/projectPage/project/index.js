/*inner component*/
import Image from "next/image";
import { useContext, useState, useRef } from "react";
import { Context } from "../../../middleware/library/context";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
/*style*/
import styles from "./index.module.scss";

import { Carousel, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Project({ data }) {
  const theme = useContext(Context).theme[0];
  const photoIndex = [1, 2, 3, 4, 5];
  const projectPhotosRef = useRef(null);
  const carouselRef = useRef(null);
  const titleContainerRef = useRef(null);
  const logoContainerRef = useRef(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selected, setSelected] = useState(1);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setSelected(selectedIndex + 1);
  };

  const dataTech = data.technology.split(", ");

  const technology = [
    {
      name: "node",
      image: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg",
    },
    { name: "sass", image: "https://www.svgrepo.com/show/349502/sass.svg" },
    { name: "react", image: "https://www.svgrepo.com/show/374032/reactjs.svg" },
    {
      name: "rn",
      image: "https://www.svgrepo.com/show/374034/reacttemplate.svg",
    },
    {
      name: "next",
      image: "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
    },
    {
      name: "tailwind",
      image: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    { name: "python", image: "https://www.svgrepo.com/show/374016/python.svg" },
    {
      name: "mui",
      image: "https://www.svgrepo.com/show/354048/material-ui.svg",
    },
  ];

  return (
    <section className={styles.project}>
      <aside ref={projectPhotosRef} className={styles.projectPhotos}>
        <div className={styles.carousel} ref={carouselRef}>
          <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
            {photoIndex.map((item, index) => (
              <Carousel.Item key={index}>
                {data.platform == "mobile" ? (
                  <span className={styles.miniPhotoContainer}>
                    <Image
                      className={styles.miniPhoto}
                      src={require(`../../../assets/image/project/${data.title}/p${item}.jpg`)}
                      alt="front-end developer1"
                      width={200}
                      height={300}
                    />
                    <Button onClick={handleOpen} className={styles.imageModal}>
                      بزرگنمایی تصویر
                    </Button>
                  </span>
                ) : (
                  <span className={styles.photoContainer}>
                    <Image
                      className={styles.photo}
                      src={require(`../../../assets/image/project/${data.title}/p${item}.jpg`)}
                      alt="front-end developer1"
                      width={400}
                      height={300}
                    />
                    <Button onClick={handleOpen} className={styles.imageModal}>
                      بزرگنمایی تصویر
                    </Button>
                  </span>
                )}
              </Carousel.Item>
            ))}
          </Carousel>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Image
                className={styles.photo}
                src={require(`../../../assets/image/project/${data.title}/p${selected}.jpg`)}
                alt="front-end developer1"
                width={1000}
                height={500}
              />
            </Box>
          </Modal>
        </div>
      </aside>
      <aside ref={titleContainerRef} className={styles.titleContainer}>
        <h1 className={theme == "light" ? "text-sky-900" : "text-sky-500"}>
          {data.name}
        </h1>
        <span className={styles.technologyContainer}>
          {technology.map((tech, index) => {
            for (let i = 0; i < dataTech.length; i++) {
              if (tech.name == dataTech[i]) {
                return (
                  <>
                    <Image
                      key={index}
                      className={styles.techImage}
                      src={tech.image}
                      alt="front-end developer1"
                      width={30}
                      height={30}
                    />
                    <h1 className={styles.techImagePart}>|</h1>
                  </>
                );
              }
            }
          })}
        </span>
        {data.link && (
          <h4 className={theme == "light" ? "text-slate-900" : "text-slate-50"}>
            لینک پروژه: <span className={styles.linkDecor}>{`{ `}</span>
            <a href={data.link} target="blank">
              {data.link}
            </a>
            <span className={styles.linkDecor}>{` }`}</span>
          </h4>
        )}

        <p className={theme == "light" ? "text-slate-900" : "text-slate-50"}>
          {data.description}
        </p>
      </aside>
      <aside ref={logoContainerRef} className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={require(`../../../assets/image/project/${data.title}/logo.svg`)}
          alt="front-end developer1"
          width={100}
          height={100}
          priority
        />
      </aside>
    </section>
  );
}
