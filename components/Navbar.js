import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Logo goes Here</div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/features">
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href="/join">
                <a>Join the community</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
