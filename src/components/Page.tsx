"use client"

import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Scroll from "./Scroll";

export default function Page ({ children, title }: Readonly<{ children: React.ReactNode, title: string }>) {
  const hrRef = useRef<HTMLHRElement> (null);
  const [opacity, setOpacity] = useState (1.0);
  const [isScroll, setScroll] = useState (false);

  useEffect (() => {
    const handleScroll = () => {
      const bounds = hrRef?.current?.getBoundingClientRect ();
  
      if (bounds) {
        setOpacity (Math.max (bounds.bottom / (bounds.bottom + window.pageYOffset), 0.5));
      }

      if (!isScroll && window.innerHeight < document.body.clientHeight) {
        setScroll (true);
      }
    };

    window.addEventListener ("scroll", handleScroll, { passive: true });
    handleScroll ();
    return () => window.removeEventListener ("scroll", handleScroll);
  }, [opacity, isScroll]);

  return (
    <>
      <Header opacity = { opacity }/>
      <main>
        <aside/>
        <article>
          <h1>{ title }</h1>
          <hr ref = { hrRef }/>
          { children }
        </article>
        <aside>
          { isScroll && <Scroll/> }
        </aside>
      </main>
      <Footer/>
    </>
  );
}
