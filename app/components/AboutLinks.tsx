import Link from "next/link";

//* INTERNAL:

export const jasNP = (
  <Link 
    href="/about#nature-photographer" 
    className="about-link" rel="internal"
  >
    Jacob as Nature Photographer
  </Link>
)

export const jasSE = (
  <Link 
    href="/about#software-engineer" 
    className="about-link" rel="internal"
  >
    Jacob as Software Engineer
  </Link>
)

//* EXTERNAL:

export const dkEffect = (
  <Link 
    href="https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect" 
    className="about-link" target="_blank" rel="external"
  >
    Dunning-Kruger Effect.
  </Link>
)

//* Software related:

export const chrisBlakely = (
  <Link 
    href="https://www.youtube.com/watch?v=KsjixiVhVyY" 
    className="about-link" target="_blank" rel="external"
  >
    video from Chris Blakely
  </Link>
)

export const serverlessFunction = (
  <Link 
    href="https://vercel.com/docs/functions/serverless-functions" 
    className="about-link" target="_blank" rel="external"
  >
    Vercel puts it:
  </Link>
)


//* Natural history related:

export const autumnwatch = (
  <Link 
    href="https://www.bbc.co.uk/programmes/b0079t1p" 
    className="about-link" target="_blank" rel="external"
  >
    <i>Autumnwatch</i>
  </Link>
)

export const bbcNHU = (
  <Link 
    href="https://en.wikipedia.org/wiki/BBC_Studios_Natural_History_Unit_filmography" 
    className="about-link" target="_blank" rel="external"
  >
    <i>hundreds</i> of these!
  </Link>
)

export const planetEarth = (
  <Link 
    href="https://en.wikipedia.org/wiki/Planet_Earth_(2006_TV_series)" 
    className="about-link" target="_blank" rel="external"
  >
    <i>Planet Earth</i>
  </Link>
)

export const springwatch = (
  <Link 
    href="https://www.bbc.co.uk/programmes/b007qgm3" 
    className="about-link" target="_blank" rel="external"
  >
    <i>Springwatch</i>
  </Link>
)

export const winterwatch = (
  <Link 
    href="https://www.bbc.co.uk/programmes/p012msk2" 
    className="about-link" target="_blank" rel="external"
  >
    <i>Winterwatch</i>
  </Link>
)
