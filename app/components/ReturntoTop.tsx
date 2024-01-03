// Separated out from AboutLinks.tsx because ONLY this one will need to be a client component in order to work
// This is the only way I've found to have the keyboard focus return to the top of the page.
// tabindex={-1} DOES NOT WORK ON ITS OWN for returning to the top even though it works on literally all the other links
// none of my searching found a viable solution to this, so I had to add a key event to call the JS built-in `.focus()` for that tabindex to actually work

"use client"
import Link from "next/link";

export const top = (
  <Link 
    href="/about#"
    className="about-link go-to-top" rel="internal"
    onKeyDown={(event) => {if (event.key === "Enter") document.getElementById("top")!.focus()}} // note use of ! to force TS to believe element *will* exist and doesn't need to lint possibility of null
  >
    <i>Return to top</i>
  </Link>
)