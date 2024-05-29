/*INNER COMPONENT*/
import { useState, useEffect } from "react";
import { Context } from "../middleware/library/context";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [theme, setTheme] = useState("light");
  const context = {
    theme: [theme, setTheme],
  };

  /*JSX*/
  return (
    <>
      <Context.Provider value={context}>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}

export default MyApp;
