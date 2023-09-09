import Link from 'next/link'
import HomeImage from './components/HomeImage'

export default function Home() {
  return (
    <main className='home'>
      <section className="content-block">
      <h2>Welcome!</h2>

      <HomeImage />
      <p>Few things have brought such joy to my life as being out in nature with a camera, and I'd like to share the highlights with you. With birds as my favored subject I have elected to separate them into their own category, and so this photo gallery, which represents the very best of my photography, is split into seven categories:</p>
        <ul className="home-tags">
          <li>Aquatic creatures</li>
          <li>Birds</li>
          <li>Flora</li>
          <li>Fungi</li>
          <li>Invertebrates</li>
          <li>Landscapes</li>
          <li>Non-avian vertebrates</li>
        </ul>

      <p>A few quick things to note: This portfolio was designed to be viewed on desktop, tablet, and mobile. Desktop and tablet can view images in full screen, with a photo caption overlaid atop the image. This overlay can be removed by shifting the focus to one of the navigational arrows, and can be reapplied by hovering over the image, or shifting the focus back to the image using the tab key, or by clicking on the image itself.</p> 
      
      <p>The maximum resolution I have set for these images is 1620 x 1080. Sorry folks with 4k monitors, I don't have the capacity for the kind of cloud storage at the moment which would leverage all your screen real estate. Perhaps when I become a rich and famous photographer I'll be able to serve up the photos in their original resolution. I can dream, right?</p>

      <p>As mobile screen sizes are restrictive, that full screen view described above would be detrimental to the overall user experience, so the captions are listed below their respective images. Desktop & tablet users will need to trigger the full screen overlay to view the captions.</p>
      <p>Use the link below to take a look!</p>
      </section>
      <Link href="/gallery" className="load-more home-button">View the gallery</Link>
    </main>
  )
}
