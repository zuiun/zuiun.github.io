import Image from "next/image";
import styles from "./Media.module.css"

function Media ({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className = { styles.container }>
      { children }
    </div>
  );
}

export function Pdf ({ src }: Readonly<{ src: string }>) {
  return (
    <Media>
      <embed src = { src } className = { styles.pdf }type = "application/pdf"/>
    </Media>
  );
}

export function YouTube ({ src }: Readonly<{ src: string }>) {
  return (
    <Media>
      <iframe src = { src } className = { styles.youtube } title = "YouTube video player" width = "560" height = "315"/>
    </Media>
  );
}

export function Centrefold ({ src, alt, width, height }: Readonly<{ src: string, alt: string, width: number, height: number }>) {
  return (
    <Media>
      <Image src = { src } title = { alt } alt = { alt } width = { width } height = { height }/>
    </Media>
  );
}
