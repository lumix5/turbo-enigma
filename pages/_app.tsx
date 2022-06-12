import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (localStorage.hasOwnProperty("clientId")) {
      localStorage.getItem("clientId");
    } else {
      localStorage.setItem("clientId", uuidv4());
    }
  });

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
