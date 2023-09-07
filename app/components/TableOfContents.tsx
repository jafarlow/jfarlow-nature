import { jasNP, jasSE } from "./AboutLinks";
import { beginnings, connection, engineering, hobby, nextjs, packages, plunge, plungeRedux, portfolio } from "./TOCLinks";

export default function TableOfContents() {
  return (
    <>
      <p>I'm not kidding when I mention this being overly verbose. The tl;dr (too long; didn't read) is that photography has been a part of my life for 25 years, and I'm a frontend software engineer who built this project from scratch.</p>
      <p>The tl;sr (too long; still read) can be navigated using the outline below:</p>
      <ul className="about-list">
        <li>{jasNP}</li>
        <ul>
          <li>{beginnings}</li>
          <li>{hobby}</li>
          <li>{plunge}</li>
          <li>{connection}</li>
          <li>{plungeRedux}</li>
        </ul>
        <li>{jasSE}</li>
        <ul>
          <li>{engineering}</li>
          <li>{portfolio}</li>
          <li>{packages}</li>
          <li>{nextjs}</li>
        </ul>
      </ul>
      <p>Happy reading!</p>
    </>
  )
}
