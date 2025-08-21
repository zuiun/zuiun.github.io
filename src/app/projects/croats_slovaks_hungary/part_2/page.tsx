import type { Metadata } from "next";
import Anchor from "@/components/Anchor";
import { Centrefold, Pdf, YouTube } from "@/components/Media";
import Page from "@/components/Page";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Part 2",
};

export default function Part2 () {
  return (
    <Page title = "Part 2 - Slovaks">
      <p>
        This is my second presentation blog post.
      </p>
      <Section id = "fading_minority" title = "Fading Minority">
        <Pdf src = "/projects/croats_slovaks_hungary/fading_minority.pdf"/>
      </Section>
      <Section id = "cultural_institutions" title = "Cultural Institutions">
        <Pdf src = "/projects/croats_slovaks_hungary/cultural_institutions.pdf"/>
      </Section>
      <Section id = "csibaj_banda" title = "About Csibaj Banda">
        <Centrefold src = "/projects/croats_slovaks_hungary/csibaj_banda.jpg" alt = "Csibaj Banda" width = { 960 } height = { 540 }/>
        <Pdf src = "/projects/croats_slovaks_hungary/csibaj_banda.pdf"/>
        <YouTube src = "https://www.youtube-nocookie.com/embed/Q2L-RnVsluY?si=FIafQHz1aCbmGbM_&amp;amp;start=540"/>
      </Section>
      <Section id = "sources" title = "Sources">
        <ul>
          <li>
            <Anchor href = "http://sjps.fsvucm.sk/Articles/11_3_3.pdf" className = "">http://sjps.fsvucm.sk/Articles/11_3_3.pdf</Anchor>
          </li>
          <li>
            <Anchor href = "https://szlovakok.hu/en/SLOVAK+PARTNERS+IN+REGION-m203" className = "">https://szlovakok.hu/en/SLOVAK+PARTNERS+IN+REGION-m203</Anchor>
          </li>
          <li>
            <Anchor href = "https://www.uszz.sk/pamatny-den-slovakov-zijucich-v-zahranici-2022/" className = "">https://www.uszz.sk/pamatny-den-slovakov-zijucich-v-zahranici-2022/</Anchor>
          </li>
        </ul>
      </Section>
    </Page>
  );
}
