"use client";

/*INNER COMPONENT*/
import { useState } from "react";
import { Context } from "../../middleware/library/context";
import "./globals.scss";
import "./index.css";

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light");
  const context = {
    theme: [theme, setTheme],
  };

  /*JSX*/
  return <Context.Provider value={context}>{children}</Context.Provider>;
}
