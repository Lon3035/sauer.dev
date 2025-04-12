import { useEffect, useState } from "react";

const BrowserInfo = () => {
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    let browserName = "Unknown Browser";

    if (userAgent.includes("Chrome")) {
      browserName = "Chrome";
    } else if (userAgent.includes("Firefox")) {
      browserName = "Firefox";
    } else if (userAgent.includes("Safari")) {
      browserName = "Safari";
    } else if (userAgent.includes("Edge")) {
      browserName = "Edge";
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
      browserName = "Internet Explorer";
    }

    setBrowser(browserName);
  }, []);

  return <span>{browser}</span>;
};

export default BrowserInfo;
