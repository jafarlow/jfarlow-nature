import Link from "next/link"

//TODO: Convert this into a navigable page like the gallery. This should not be a component

export default function About() {
  return (
    <div>
      <h2>About the Project</h2>

      {/* TODO: link these to their subsections */}
      <p>This project represents two parts of myself: Jacob as Nature Photographer, and Jacob as Software Engineer.</p>

      <h3>Jacob as Nature Photographer</h3>
      <h4>HEADING: the beginnings</h4>
      <p>My photography journey began when I was about 8 years old, though admittedly, it was probably more of a way for my parents to help me expend energy on family vacations. Prior to our departure, my folks would pack a treat bag full of snacks and puzzle games that were to last us the duration of whatever vaction we were embarking upon, and this included a disposable Kodak camera.</p> 
      <p>Over many trips and the efforts of my mother to turn these rolls into scrapbooks, my folks must have seen something among the mess that resulted from a small rambunctious child given free reign to photograph whatever caught his eye. It was round about when I was 14 that my parents upgraded me from disposable Kodak to digital point-and-shoot.</p>

      <h4>HEADING: There might just be something in this here hobby</h4>
      <p>TOPIC: photo contest ski slope & Cedarock Park waterfall + painting</p>
      <p>TOPIC: carrying it with me everywhere</p>

      <h4>HEADING: taking the (financial) plunge</h4>
      <p>TOPIC: borrowing Barbar's camera & upgrading to DSLR</p>
      <p>TOPIC: Italy/Switzerland</p>
      <p>TOPIC: travels, photo subjects/targets, successes & frustrations</p>
      <p>TOPIC: BBC docs</p>
      <p>TOPIC: borrowing Henry's lens</p>

      <h4>HEADING: taking the (financial) plunge redux</h4>
      <p>TOPIC: new lens, new me</p>
      <p>TOPIC: the journey since</p>

      <h3>Jacob as Software Engineer</h3>
      <h4>HEADING: engineering overview</h4>
      <p>TOPIC: type of coding I do</p>
      <p>TOPIC: searching for a project to build as practice</p>

      <h4>HEADING: building this portfolio</h4>
      <p>When thinking about having a portfolio for my work, I spent a lot of time pondering how I would accomplish this. Would I use a webhost, whose specialty is catering to photographers like myself? Would I use a generic web template and then customize it to suit my needs?</p>
      <p>I decided on a third option, which was to build this from the ground up. This was the perfect opportunity to grow and expand my engineer skillset, to build something with a purpose.</p>
      <p>TOPIC: Cloudinary API & host</p>
      <p>TOPIC: Nextjs framework + TS</p>
      <p>TOPIC: serverless functions</p>


      <Link href="/gallery" className="load-more home-button">View the gallery</Link>
    </div>
  )
}

// layout:
// Header
// paragraphs
// Link to the gallery
