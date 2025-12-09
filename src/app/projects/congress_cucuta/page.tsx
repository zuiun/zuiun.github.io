import type { Metadata } from "next";
import Anchor from "@/components/Anchor";
import Page from "@/components/Page";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Congress of Cúcuta",
};

export default function CongressCucuta () {
  return (
    <Page title = "Congress of Cúcuta">
      <p>
        This is a recreation of the government simulation game I made for my high school club.
        Except, instead of being a PowerPoint, it&apos;s now a Windows executable that can manage gamestate.
        Pretty neat.
        <br/>
        You can find it <Anchor href = "https://github.com/zuiun/CongressCucuta">here</Anchor>.
      </p>
      <Section id = "simulations" title = "Simulations">
        <p>
          Congress of Cúcuta is designed to work with portable .sim files, but several simulations are provided with the program.
          These include at least one simulation from each government type for which I had written simulations.
          More information can be found on the GitHub page, but they are listed below, in order of creation date:
        </p>
        <ul>
          <li>Colombia, Presidential Republic: The Campaigns of the South</li>
          <li>Poland, Parliamentary Republic: Parliamentocracy</li>
          <li>Japan, Feudal Monarchy: The Northern and Southern Courts</li>
          <li>China, Oligarchic Dictatorship: The Nanking Decade</li>
          <li>Indonesia, Oligarchic Dictatorship: Guided Democracy</li>
          <li>Hungary, Elective Dictatorship: The Horthy Regency</li>
          <li>Argentina, Military Dictatorship: The Argentine Revolution</li>
          <li>Malaysia, Elective Monarchy: Malaysian Malaysia</li>
          <li>Australia, Constitutional Monarchy: The Whitlam Era</li>
          <li>Canada, Constitutional Monarchy: Patriation</li>
          <li>Finland, Mixed Republic: Finlandisation</li>
          <li>Brazil, Presidential Republic: The Old Republic</li>
        </ul>
        <p>
          If I had to recommend one simulation to try, I would probably pick Canada.
          While I put in a roughly similar amount of research in for all of them (except Colombia, which was my first simulation), most simulations were designed to fit within the one-hour timeslot we had after school for club meetings.
          Canada was explicitly made for a club reunion we had during university, so it&apos;s longer and more detailed than the others.
          For that matter, everything from Malaysia onwards was made during university, but all of them (again, except Colombia) received a touch-up at some point after their creation.
        </p>
      </Section>
    </Page>
  );
}
