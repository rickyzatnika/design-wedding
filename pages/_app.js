import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Layout, PreviewModal } from "../components";

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
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
        <PreviewModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
