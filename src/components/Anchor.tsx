import Link from "next/link";

export default function Anchor ({ children, href, className }: Readonly<{ children: React.ReactNode, href: string, className?: string }>) {
  const isInternal = href.startsWith ('/');

  if (isInternal) {
    return (
      <Link href = { href } className = { className }>
        { children }
      </Link>
    );
  } else {
    return (
      <a href = { href } className = { className } target = "_blank">
        { children }
      </a>
    );
  }
}
