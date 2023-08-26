import Link from 'next/link'

export default function Home() {
  return (
    <main className='home'>
      <p>Here's a bunch of placeholder text. I still need to work on a neato burrito intro to the site. Perhaps a nifty lil' profile image as well.</p>
      <Link href="/gallery" className="navlink">View the gallery</Link>
    </main>
  )
}
