/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function Navbar() {
  return (
    <header className='header-section'>
      <div className="header-wrapper">
        <div className="placeholder" >
          <img src="/jf-logo-white.png" alt=""/>
        </div>
        <div className="headline">
          <h1>Jacob Farlow</h1>
          <p>Nature Photographer</p>
        </div>
        <nav>
          <Link href="/" className="navlink">Home</Link>
          <Link href="/gallery" className="navlink">Gallery</Link>
        </nav>
      </div>
    </header>
  )
}
