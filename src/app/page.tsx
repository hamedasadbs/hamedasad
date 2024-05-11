/*inner component*/
import Image from "next/image";
/*style*/
import styles from "./page.module.scss";
/*component*/
import Card from "../../component/card";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/hamed.png"
          alt="Hamed Asadollahi"
          width={732}
          height={880}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Card
          paragraph="Find in-depth information about Next.js features and API."
          title="پروژه ها"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        />

        <Card
          paragraph="Learn about Next.js in an interactive course with&nbsp;quizzes!"
          title="Learn"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        />

        <Card
          paragraph="Explore starter templates for Next.js."
          title="Templates"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        />

        <Card
          paragraph="Instantly deploy your Next.js site to a shareable URL with Vercel."
          title="Deploy"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        />
      </div>
    </main>
  );
}
