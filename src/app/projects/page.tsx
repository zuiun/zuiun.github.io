import type { Metadata } from "next";
import Grid from "@/components/Grid";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: "%s | Projects",
  }
};

export default function Projects () {
  return (
    <Page title = "Projects">
      <p>
        These are my projects.
        Everything programming-related is on my GitHub.
        I keep a couple of my academic projects here for posterity (and also because they&apos;re pretty unique).
      </p>
      <Grid panels = {[
        { href: "https://github.com/zuiun", title: "GitHub", has_image: false, src: "", alt: "", width: 0, height: 0 },
        { href: "/projects/congress_cucuta", title: "Congress of Cúcuta", has_image: false, src: "", alt: "", width: 0, height: 0 },
        { href: "/projects/croats_slovaks_hungary", title: "Croats and Slovaks in Hungary", has_image: false, src: "", alt: "", width: 0, height: 0 },
        { href: "/projects/fortress_kanto", title: "Fortress Kanto: The Kingmaker of Japan", has_image: false, src: "", alt: "", width: 0, height: 0 },
      ]}/>
    </Page>
  );
}
