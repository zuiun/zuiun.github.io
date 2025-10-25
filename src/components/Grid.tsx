import Image from "next/image";
import Anchor from "./Anchor";
import styles from "./Grid.module.css";

interface Panel {
  href: string,
  title: string,
  has_image: boolean,
  src: string,
  alt: string,
  width: number,
  height: number,
}

function Panel ({ href, title, has_image, src, alt, width, height }: Readonly<{ href: string, title: string, has_image: boolean, src: string, alt: string, width: number, height: number }>) {
  return (
    <Anchor href = { href } className = { styles.panel }>
      <figure>
        { has_image && <Image src = { src } title = { alt } alt = { alt } width = { width } height = { height }/> }
        <figcaption>{ title }</figcaption>
      </figure>
    </Anchor>
  );
}

export default function Grid ({ panels }: Readonly<{ panels: Panel[] }>) {
  const paddings: React.ReactElement[] = [];

  for (let i = panels.length; i % 3 > 0; ++ i) {
    paddings.push (<div key = { i } className = { styles.panel }/>);
  }

  return (
    <section id = { styles.grid }>
      {
        panels.map ((panel, i) => <Panel key = { i } href = { panel.href } title = { panel.title } has_image = { panel.has_image } src = { panel.src } alt = { panel.alt } width = { panel.width } height = { panel.height }/>)
      }
      { ... paddings }
    </section>
  );
}
