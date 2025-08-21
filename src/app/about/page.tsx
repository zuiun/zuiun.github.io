import type { Metadata } from "next";
import Anchor from "@/components/Anchor";
import Page from "@/components/Page";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
};

export default function About () {
  return (
    <Page title = "About">
      <p>
        I&apos;m Ike Chen, an alum of/student at the University of Texas at Austin.
        I majored in Computer Science and History, and am currently pursuing graduate studies in Computer Science.
        <br/>
        The Aichi E16A Zuiun is my favourite plane.
      </p>
      <Section id = "why_history" title = "Why History?">
        <p>
          It is one of the great misfortunes of my life that I was not born in a different era.
          I should have been there in Paris, making outlandish territorial claims on a village of 200 Masurians who have never once voted in a border plebiscite.
          Geography is, unfortunately, generally considered an ignoble discipline these days, and history happens to be the next best thing.
          Hopefully, history doesn&apos;t go down the route of geography.
          <br/>
          <code title = "WHERE IS RPT WHERE IS TASK FORCE THIRTY FOUR RR THE WORLD WONDERS">WHERE ARE RPT WHERE ARE HUMANITIES STUDENTS RR THE WORLD WONDERS</code>
        </p>
      </Section>
      <Section id = "website" title = "Website">
        <p>
          This website uses React and Next.js.
          Its design was inspired by <Anchor href = "https://big-stupid-jellyfish.github.io/GFMath/index" className = "">GFMath</Anchor>.
          <br/>
          An earlier iteration of this website used JavaScript and several JSON files to dynamically populate most pages.
          I was dead-set on not using React or any other framework, but eventually relented amidst the inexorable tide of technological advancement (or something).
          Thankfully, React works pretty well and is much easier to maintain than the old format.
        </p>
      </Section>
    </Page>
  );
}
