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

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

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
