import Link from 'next/link'
import HomeImage from './components/HomeImage'

export default function Home() {
  return (
    <main className='home'>
      <h2>Welcome!</h2>
      <HomeImage />
      <p>Few things have brought such joy to my life as being out in nature with a camera, and I'd like to share the highlights with you. This photo gallery represents the very best of my photography across seven categories:

        <ul className="home-tags">
          <li>Aquatic creatures</li>
          <li>Birds</li>
          <li>Flora</li>
          <li>Fungi</li>
          <li>Invertebrates</li>
          <li>Landscapes</li>
          <li>Non-avian vertebrates</li>
        </ul>
      </p>
      <p>Use the link below to take a look!</p>
      <Link href="/gallery" className="load-more home-button">View the gallery</Link>
    </main>
  )
}
