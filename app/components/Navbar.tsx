/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function Navbar() {
  return (
    <header className='header-section'>
      <div className="header-wrapper">
        <div className="logo" >
          <Link href="/" aria-label="JF logo" rel="internal">
            <img src="/jf-logo-white.png" alt=""/>
          </Link>
        </div>
        <div className="headline">
          <h1>Jacob Farlow</h1>
          <p>Nature Photographer</p>
        </div>
        <nav>
          <Link href="/" className="navlink" rel="internal">Home</Link>
          <Link href="/gallery" className="navlink" rel="internal">Gallery</Link>
          <Link href="/about" className="navlink" rel="internal">About</Link>
        </nav>
      </div>
    </header>
  )
}
