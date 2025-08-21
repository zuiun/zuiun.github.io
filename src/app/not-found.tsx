import type { Metadata } from "next";
import Page from "@/components/Page"

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound () {
  return (
    <Page title = "404 Not Found">
      <p>
        The page for which you were searching does not exist.
      </p>
    </Page>
  );
}
