import Image from "next/image";
import Anchor from "./Anchor";
import styles from "./Header.module.css"

function TabLink ({ href, title, is_dropdown }: Readonly<{ href: string, title: string, is_dropdown: boolean }>) {
  const chooseClasses = () => {
    return `${styles.link} ${is_dropdown ? styles.dropdown : styles.normal}`;
  }

  return (
    <Anchor href = { href } className = { chooseClasses () }>
      { title }
    </Anchor>
  );
}

function TabDropdown ({ children, href, title }: Readonly<{ children: React.ReactNode, href: string, title: string }>) {
  return (
    <div className = { `${styles.normal} ${styles.container}` }>
      <TabLink href = { href } title = { title } is_dropdown = { false }/>
      <nav className = { styles.content }>
        { children }
      </nav>
    </div>
  );
}

export default function Header ({ opacity }: Readonly<{ opacity: number }>) {
  return (
    <header style = {{ opacity: opacity }}>
      <div id = { styles.title }>
        <Image src = "/zuiun.ico" alt = "Zuiun" title = "It's a Zuiun!" width = { 64 } height = { 64 }/>
        <h1>Zuiunism</h1>
      </div>
      <nav id = { styles.menu }>
        <TabLink href = "/" title = "Home" is_dropdown = { false }/>
        <TabDropdown href = "/projects" title = "Projects">
          <TabLink href = "https://github.com/zuiun" title = "GitHub" is_dropdown = { true }/>
          <TabLink href = "/projects/congress_cucuta" title = "Congress of Cúcuta" is_dropdown = { true }/>
          <TabLink href = "/projects/croats_slovaks_hungary" title = "Croats and Slovaks in Hungary" is_dropdown = { true }/>
          <TabLink href = "/projects/fortress_kanto" title = "Fortress Kanto: The Kingmaker of Japan" is_dropdown = { true }/>
        </TabDropdown>
        <TabLink href = "/about" title = "About" is_dropdown = { false }/>
        <TabLink href = "/contact" title = "Contact" is_dropdown = { false }/>
      </nav>
    </header>
  );
}
