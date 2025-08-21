import type { Metadata } from "next";
import { Pdf } from "@/components/Media";
import Page from "@/components/Page";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Fortress Kanto",
};

export default function FortressKanto () {
  return (
    <Page title = "Fortress Kanto: The Kingmaker of Japan">
      <p>
        This is my capstone project for HIS 378 (Capstone in History).
        My research question was &ldquo;how the Kanto contribute to the unification of Japan?&rdquo;
      </p>
      <Section id = "poster" title = "Poster">
        <Pdf src = "/projects/fortress_kanto/poster.pdf"/>
        <p>
          I manually scanned that map (it was a fold-out map) out of a book, then coloured it in digitally.
          It honestly might have been more labour-intensive and physically difficult to make the poster than it was to write the thesis...
        </p>
      </Section>
      <Section id = "thesis" title = "Thesis">
        <Pdf src = "/projects/fortress_kanto/thesis.pdf"/>
      </Section>
    </Page>
  );
}
