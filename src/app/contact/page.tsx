import type { Metadata } from "next";
import Anchor from "@/components/Anchor";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact () {
  return (
    <Page title = "Contact">
      <p>
        Email: <Anchor href = "mailto:e16a.zuiun@gmail.com" className = "">e16a.zuiun@gmail.com</Anchor>
        <br/>
        GitHub: <Anchor href = "https://github.com/zuiun" className = "">https://github.com/zuiun</Anchor>
      </p>
    </Page>
  );
}
