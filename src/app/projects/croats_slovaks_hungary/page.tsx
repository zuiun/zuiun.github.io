import type { Metadata } from "next";
import Grid from "@/components/Grid";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: "Croats and Slovaks in Hungary",
};

export default function CroatsSlovaksHungary () {
  return (
    <Page title = "Croats and Slovaks in Hungary">
      <p>
        These are the presentation blog posts that I made for REE 335 (Diasporas, Migrants, and Hungarian Nationalism).
        My chosen topic was &ldquo;music.&rdquo;
      </p>
      <Grid panels = {[
        { href: "/projects/croats_slovaks_hungary/part_1", title: "Part 1 - Croats", has_image: true, src: "/projects/croats_slovaks_hungary/erik_skrapits.jpg", alt: "Erik Skrapits and No Thanx", width: 1200, height: 630 },
        { href: "/projects/croats_slovaks_hungary/part_2", title: "Part 2 - Slovaks", has_image: true, src: "/projects/croats_slovaks_hungary/csibaj_banda.jpg", alt: "Csibaj Banda", width: 960, height: 540 },
      ]}/>
    </Page>
  );
}
