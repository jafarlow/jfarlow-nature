import { africa, bluePlanetII, earthPower, frozenPlanet, galapagos, humanPlanet, life ,planetEarth, planetEarthII, southPacific, wildChina } from "./AboutLinks"

export default function AboutList() {
  return (
    <ul className="about-list">
      <li>(2006) {planetEarth}, narrated/presented by Sir David Attenborough</li>
      <li>(2006) {galapagos}, narrated by Tilda Swinton</li>
      <li>(2007) {earthPower}, presented by Iain Stewart</li>
      <li>(2008) {wildChina}, narrated by Bernard Hill</li>
      <li>(2009) {southPacific}, narrated by Benedict Cumberbatch</li>
      <li>(2009) {life}, narrated by Sir David Attenborough</li>
      <li>(2011) {humanPlanet}, narrated by John Hurt</li>
      <li>(2011) {frozenPlanet}, narrated by Sir David Attenborough</li>
      <li>(2013) {africa}, narrated by Sir David Attenborough</li>
      <li>(2016) {planetEarthII}, narrated/presented by Sir David Attenborough</li>
      <li>(2017) {bluePlanetII}, narrated/presented by Sir David Attenborough</li>
    </ul>
  )
}
