import "../styles/globals.css";
import { AppProps } from "next/app";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState<boolean>(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
