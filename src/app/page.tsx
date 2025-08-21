import type { Metadata } from "next";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: "Zuiunism",
};

export default function Home () {
  return (
    <Page title = "Zuiunism">
      <p>The website of Ike Chen.</p>
    </Page>
  );
}
