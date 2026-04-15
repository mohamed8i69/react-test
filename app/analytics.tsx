"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

export default function Analytics() {
  const pathname = usePathname();

  // initialize مرة واحدة فقط
  useEffect(() => {
    ReactGA.initialize("G-W6LY85T881");
  }, []);

  // track page change
  useEffect(() => {
    if (pathname) {
      ReactGA.send({ hitType: "pageview", page: pathname });
    }
  }, [pathname]);

  return null;
}