import type { Metadata } from "next";
import Anchor from "@/components/Anchor";
import { Centrefold, Pdf, YouTube } from "@/components/Media";
import Page from "@/components/Page";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Part 1",
};

export default function Part1 () {
  return (
    <Page title = "Part 1 - Croats">
      <p>
        This is my first presentation blog post.
      </p>
      <Section id = "where_unseen_croat" title = "Where is the Unseen Croat?">
        <Pdf src = "/projects/croats_slovaks_hungary/where_unseen_croat.pdf"/>
      </Section>
      <Section id = "sokci" title = "About the Šokci">
        <Pdf src = "/projects/croats_slovaks_hungary/sokci.pdf"/>
        <YouTube src = "https://www.youtube-nocookie.com/embed/xHcfJLTYgN8?si=vD6DPpBPLLfmLnTF"/>
      </Section>
      <Section id = "erik_skrapits" title = "About Erik Skrapits">
        <Centrefold src = {"/projects/croats_slovaks_hungary/erik_skrapits.jpg"} alt = "Erik Skrapits and No Thanx" width = { 1200 } height = { 630 }/>
        <Pdf src = "/projects/croats_slovaks_hungary/erik_skrapits.pdf"/>
      </Section>
      <Section id = "sources" title = "Sources">
        <ul>
          <li>
            <Anchor href = "https://hrvatiizvanrh.gov.hr/hrvati-izvan-rh-2463/croatian-national-minority/croatianminority-in-hungary/2501">https://hrvatiizvanrh.gov.hr/hrvati-izvan-rh-2463/croatian-national-minority/croatianminority-in-hungary/2501</Anchor>
          </li>
          <li>
            <Anchor href = "https://www.atlasobscura.com/places/busojaras">https://www.atlasobscura.com/places/busojaras</Anchor>
          </li>
          <li>
            <Anchor href = "https://ugytudjuk.hu/cikk/2021-10-13_postaskent-keresi-a-kenyeret-a-no-thanx-egykori-enekese-skrapits-erik">https://ugytudjuk.hu/cikk/2021-10-13_postaskent-keresi-a-kenyeret-a-no-thanx-egykori-enekese-skrapits-erik</Anchor>
          </li>
        </ul>
      </Section>
    </Page>
  );
}
