import Link from "next/link"
import Image from "next/image"

// extrapolating inline links out here so the body below looks cleaner
import { dkEffect, jasNP, jasSE, springwatch, autumnwatch, winterwatch, planetEarth, serverlessFunction, chrisBlakely, bbcNHU } from "../components/AboutLinks"
import { beforeMod, afterMod } from "../lib/codeBlocks"
import AboutList from "../components/AboutList"

export default function About() {

  return (
    <main className="about">
      <div className="about-content-block">
        <h2>About the Project</h2>

        <p>This project represents two parts of myself: {jasNP}, and {jasSE}. What follows is a bit of autobiographical waxing poetic combined with being overly verbose. Classic Jacob.</p>
      </div>

      <section id="nature-photographer" className="about-content-block">
        <h3>Jacob as Nature Photographer: From the early days to now</h3>
        <h4>The Beginnings</h4>

        <p>My photography journey began when I was about 8 years old, though admittedly, it was probably more of a way for my parents to help me expend energy on family vacations. Prior to our departure, my folks would pack a treat bag full of snacks and puzzle games that were to last us the duration of whatever vaction we were embarking upon, and this included a disposable Kodak camera.</p> 

        <p>Over many trips and the efforts of my mother to turn these rolls into scrapbooks, my folks must have seen something among the mess that resulted from a small rambunctious child given free reign to photograph whatever caught his eye. It was 'round about when I was 14 that my parents upgraded me from disposable Kodak to an Olympus digital point-and-shoot.</p>
      </section>
      
      <section className="about-content-block">
        <h4>There just might be something in this here hobby</h4>
        {/* <p>TOPIC: photo contest ski slope & Cedarock Park waterfall + painting</p> */}
        <p>Not long after this, I had the opportunity to bring my shiny new camera with me on the ski slopes of West Virginia's Winterplace ski resort. After tackling one of the runs, I turned around to look back up and thought to myself that it would make a pretty picture. I fell on my stomach, pulled out the camera, and snapped this photo:</p> 

        <Image 
          src="/about/winterplace.jpg"
          alt="A ski slope viewed from the bottom of the run on a cloudless winter day"
          width={800} 
          height={600}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />

        <p>I entered this photo into a local arts competition and took first prize, to my utter astonishment and delight. This moment, more than anything, triggered my desire to incorporate photography into my definition of self.</p>

        <p>A few months after, I was taking a hike in one of my favorite places on the planet--Cedarock Park in Burlington, North Carolina. It holds a special place in my heart for many reasons, and one relevant to this project is it's where I learned that my "photographic eye" wasn't a fluke on the ski slopes. I took a photo of the park's iconic dam-<i>cum</i>-waterfall that cemented in my mind that landscapes and features within nature would be my forte.</p> 

        <Image 
          src="/about/cedarock-park.jpg"
          alt="Water spilling over a stone dam"
          width={800} 
          height={600}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />

        <p>A few short years later, as a part of an art class we were directed to reproduce an image as a painting in the pointilist style. Without hesitation, I chose that photo from Cedarock Park as my subject.</p>

        <p>The beautiful simplicity of a digital point-and-shoot camera is how easy it is to carry everywhere. I developed a habit of sacrificing one of my pants pockets to hold this camera every single day. One might think this would lead to an abundance of photos from daily life, however that isn't how I viewed photography--I saw it as an opportunity to record the unusual, the special, the unexpected. While this means I carried it always, and used it rarely, it did mean I was prepared when in chemisty class we learned about surface area, licopodium powder, and explosions.</p>

        <Image 
          src="/about/chemistry.jpg"
          alt="Licopodium powder sprayed over an open flame explodes into a fireball"
          width={800} 
          height={600}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />

        <p>In this moment I unlocked a new aspect of my photography: capturing moments of motion. It would take some dabbling in sports photography and plenty of "almost got it" experiences over the subsequent years before I would combine "movement" with "nature". But let's don't get ahead of the story.</p>
      </section>

      <section className="about-content-block">
        <h4>Taking the (financial) plunge</h4>
        <p>The seed was planted about upgrading my camera once again when a family friend learned of my interest in photography. She had a DSLR (digital single-lens reflex) camera, and when my family went for a visit she suggested I give her camera a try. Aside from the joy in trying out a new camera, I was honored that someone would trust 16 year old me with such an expensive piece of equipment. I spent an entire afternoon traipsing about their garden and forested property delighting in the new views I could explore. It would take another 3 years, but I took that financial plunge and purchased a Canon 40D, with a 35-128mm telephoto lens. This was one model removed from state of the art in Canon's lineup (at the time), with the basic all-around lens for someone on a budget who wants to diversify their subject matter. An SLR or DSLR camera is special in that it allows for interchangeable lenses, enabling people to adjust their focus (pun absolutely intended!) and reach. Without needing to buy a whole new camera, a photographer can swap out compatible lenses.</p>

        <p>Just like breaking in running shoes <i>before</i> a race, I learned the hard way that I should have had taken the same approach with this camera. A week after it arrived, we hopped on an airplane to visit Japan. Aside from having a wonderful time as a tourist, my photographic foray there was, predicatbly, about on par with my old point-and-shoot. Thankfully, I had a blast with it the whole time, and so rather than be discouraged I was motivated to improve.</p>

        <p>Fast forward six months, and I had the opportunity of a lifetime to study for a semester in Italy, with an embarrassment of riches of subject matter: architecture, art, gardens, ruins, and vistas. It was during this time that my landscape photography really began to establish itself as a cornerstone of my skillset. The majority of my travels during this time kept me in Italy, though I did take a jaunt up to Switzerland to knock off a bucket list item of snowboarding in the Swiss Alps. I took a big risk by bringing my camera with me; afterall, it's a large piece of precision equipment, and knocking it around is not generally advisable. The risk paid off in a big way, giving me both my greatest moment in landscape photography (see landscapes in the gallery), as well as in action photography (see below).</p>

        <Image 
          src="/about/interlaken.jpg"
          alt="A snowboarder takes to the air off a snowy cliff"
          width={800} 
          height={533}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />

        <p>TOPIC: travels, photo subjects/targets, successes & frustrations</p>
        <p>Hitting it big right off the bat like this after only 6 months of owning the camera set myself up to be humbled, experiencing my own version of the {dkEffect} While I saved my ego by not broadcasting to others how great I thought myself, I fell victim to overconfidence internally, and so when subsequent forays into beautiful places didn't render the same astounding results I had some emotional damage control to do. Intense self reflection combined with treating each excursion as a learning opportunity righted the ship, so to speak, and quickly converted frustrations into improvements.</p>

        <p>I've never been one to silo myself within a specific aspect of life, no matter what it is. Whether in sports, employment, education, literature, gaming, etc., I always diversify my efforts and focus. Being a jack of all trades is aspirational to me, and my photography is no exception. Landscapes are important to me. Those vistas are the elements of nature which put me most at ease, which deliver contentment and mental stability and peace. And yet there is so much more I can explore with photography than just that one aspect. Where else could I find my zen? What types of photography challenge me while simultaneously leaving me fulfilled?</p>

        <p>I tried to get artistic with it. I pulled it off just the once, really, with some terracotta roof tiles in Sicily, Italy. I put myself into an unreliable position at the top of Monreale's cathedral to take this photo. At least this time I knew it was a special moment, and not some bit of inherent skill that nabbed me this one.</p>

        <Image 
          src="/about/roof-tiles.jpg"
          alt="Terracotta roof tiles "
          width={800} 
          height={533}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />

        <p>Knowing it was a special moment didn't stop me from trying time and again to replicate the outcome of the photo above. Alas, it never seemed to turn out the way I'd see it in my mind. Even though getting artsy with objects didn't pan out as I thought it might, it was excellent practice for my soon-to-be-discovered passion for shooting (with a camera!) wild creatures. Much of what I've included in my photo gallery requires looking at things and seeing what others pass right over. What I need to do to take an artsy photo is what I need to do to capture an invertebrate, a sneaky bird, or a hidden fungus.</p>

        <p>I tried portrait photography, which was fun, but very stressful. People seem to generally want to look different than they really are. Either they actively want perceived flaws obscured or removed, or they don't realize what they look like in someone else's eyes. After all, we generally only see ourselves in a mirror and the occasional selfie. It may help us get ready for the day, but it is an incomplete picture (pun totally intended!) and I didn't want to deal with the stress of managing expectations and outcomes on top of everything else. When it comes to taking people's pictures, I'll stick to candid snapshots, like the one below.</p>

        <Image 
          src="/about/evan.jpg"
          alt="A man wearing sunglasses and a Clemson t-shirt points at the camera"
          width={800} 
          height={533}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />

        <p>I tried sport photography. After all, that snowboarding photo was totally rad. I certainly gave myself plenty of attempts at it, as I brought my camera with me to football games, pickup soccer, rope swings, lacrosse games, and disc golf adventures. Each type of outing was just on the edge of hitting that feeling I was chasing. Even if I didn't settle on this as my path, I still got a kick out of it.</p>

        <Image 
          src="/about/football.jpg"
          alt="A football kicker swings, about to make contact with the football at kickoff"
          width={800} 
          height={533}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />

        <p>I haven't given up on sports photography. I find it a fun challenge, and will occasionally bust out the camera when I find an opportune moment. It's on the backburner for now, though I'll keep pestering and poking at it from time to time, just to remind myself. Like what this Syracuse defender is doing to the Duke player here.</p>

        <Image 
          src="/about/lacrosse.jpg"
          alt="On an athletic field a Syracuse University defender prods a Duke University midfielder with his lacrosse stick"
          width={800} 
          height={533}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />

        <p>I dabbled and explored, though nothing seemed to bring a sense of completeness. Despite everything that I was doing--and enjoying! Don't get me wrong there, I was loving it all the while--I had only found flowers to complement landscapes as something I loved to do, as something that delivered that contentment.</p>

        <p>Bodies in motion. That's what I wanted to shoot. And while I still bust out the camera for a little sportsing, I've found that the bodies in motion that really hit the spot for me are not human bodies. Rather, they are the mobile elements of nature.</p>
      </section>

      <section className="about-content-block">
        <h4>Connecting with nature</h4>
        <p>***perhaps needs something to fill between 2009 & 2019?</p>
        <p>From the time I learned of the BBC's {planetEarth} in 2009 (thanks to the cool dude rockin' the Clemson t-shirt pictured above) I've been fascinated with natural history documentaries. Living in the US and pining for content fron the UK generally meant being left wanting. Only the big productions were made available internationally, and so all I was aware of were those landmark productions featuring box-office names as narrator/presenter. Anything I found that was not narrated/presented by a Hollywood icon or my hero, Sir David Attenborough, I stumbled into by roundabout means. Here are the ones I managed to get my hands on over the years:</p> 

        <AboutList />

        <p>This obsession with BBC-produced nature documentaries took hold in a big way in 2019 as I found sources for much of the BBC's legacy content and "smaller" programs, which led to me binge watch these nearly every day for over a year as I worked through the catalogue. Y'all, there are {bbcNHU} Most pivotal for me during this period was exposure to their annual Watch series--{springwatch}, {autumnwatch}, and {winterwatch}--whose focus turns in a different direction than the major productions to which I was accustomed. Rather than being centered on "exotic" wildlife from remote locations, the Watch series is all about local nature and wildlife, those things folks can observe themselves without great expense or difficulty. It flipped a switch in my mind: I could do this too; I have local wildlife, I could do my own exploring! It seems like a no-brainer after the fact, but up to this point photography to me generally meant a big effort excursion.</p>

        <p>But what could I do about it? There were plenty of chances to stop and photograph the roses, which I've done quite often, and it wasn't leaving me terribly satisfied. I felt restricted to the beautiful, but immobile, side of the natural world. With patience and determination, I kept at it, still with that 35-128mm general purpose lens. Lenses are super expensive, so buying one on a whim wasn't something I was prepared to do. After all, what if I get the wrong one? What if I went for a macro lens and then found myself aching for long distance photography instead? What if I opted for a mega zoom upgrade, but then realized that I would much prefer to get up close and personal with the little things in life? I felt stuck.</p>

        <p>Serendipity has played a key role in my life as a photographer. Each step in this journey has been guided by a trusted adult saying something equivalent to, "would you like to try with this?" The first step was when my parents gave me a disposable Kodak. The second was when they gave me a digital point-and-shoot. The third was when a family friend let me try out their DSLR to see how I liked working with that type of camera. And now we come to step number four: my brother's father-in-law is a talented photographer himself. We all happened to be gathering by a rural lake in Virginia for a few days in the summer of 2019, and he watched me out stalking for something to photograph. After watching me try and fail to get close enough to some birds, he walked over with his camera bag, unzipped it, pulled out a massive telephoto lens and said, "would you like to try with this?" We both shoot on a Canon, so the lenses were compatible, and I felt like my teenage self all over again being trusted with a prized piece of equipment.</p>
        <p>I felt like I had been given glasses after a lifetime of fuzzy vision. I was grinning from ear to ear with just how much <i>range</i> I could get! The clarity and focus of things so far away brought near was such a fabulous experience. I was no longer at an impasse; I knew which direction I wanted to head. All I had to do was save. A lot. Patience, Jacob. Patience.</p>
      </section>
      
      <section className="about-content-block">
        <h4>Taking the (financial) plunge redux</h4>
        <p>TOPIC: new lens, new me</p>
        <p>TOPIC: the journey since</p>
        <p>TOPIC: Pulling it all together with a foray into the bogs of the Baltic</p>
        <p>TOPIC: IDs with Merlin & iNaturalist</p>
      </section>
      
      <section id="software-engineer" className="about-content-block">
        <h3>Jacob as Software Engineer: No early days, just now</h3>
        <h4>HEADING: engineering overview</h4>
        <p>TOPIC: type of coding I do</p>
        <p>I write front-end code, and I focus on digital accessibility. I aspire to be a more well-rounded engineer so I can always be helpful on either side of the software stack, which makes sense as I crave understanding the "whys" behind the "whats", and deeper understanding leads to more versaility and usefulness. I derive much greater satisfaction in highlighting the successes, the wins large and small, of my colleagues than I ever do in highlighting my own. My existing projects are written in JavaScript or TypeScript, and usually leverage the React framework for frontend interactivity.</p>
        <p>TOPIC: searching for a project to build as practice</p>
        <p>In an ongoing effort to become that well-rounded engineer I easily find myself bouncing from one thing to the next. Should I learn python or Go? Should I dive into Node or Ruby? Hmmm, perhaps I should explore something related to database management? Choice paralysis hit pretty hard here. How would I break the impasse?</p>
      </section>
      
      <section className="about-content-block">
        <h4>Beginning to build this portfolio</h4>

        <p>🎶 <i>It started with a whisperrrr...</i> 🎶 </p>

        <p>Wait, no. It started with a tutorial. I decided to learn more about backend engineering, to get re-exposed to Nodejs & Express as a way to strengthen my overall engineering self. I found a {chrisBlakely} covering full stack development with React/Node/Express to build out a photo gallery using an API called Cloudinary, which I had never heard of before. Given my background (see the wall of text above) I was immediately interested. Afterall, one of the fundamental things about how I learn is to establish a personal connection to the subject matter. I like coding along to tutorials like this one as a way to learn how other people structure their code, and how they go from a blank file to a completed project. And once I've reached the end of a tutorial, I take it farther: Is it accessible? Are there edge cases that need to be considered? How can I expand upon or otherwise modify what I coded along with? Can I incorporate something from one tutorial into another one? Are there projects I have already completed that could be refactored with my new experience?</p>

        <p>This project was no different, and it was during these explorations that I decided to upgrade this from a practice project to something I wanted to publish to the world. More specifically, the idea took root when I was exploring Cloudinary's capabilities. One of the key requirements for including images on a webpage is to include alternate (alt) text to go along with it. This is required for people who use screen readers to understand what the image is supposed to represent, and is generally helpful in case images are slow (or otherwise fail) to load. Every image includes metadata with it, and some will have more than others depending on how the image was created. For example, a photograph's metadata will include time & date information based on the camera's settings, information about the camera itself (make & model), as well as settings used at the time of capture (ISO, f-stop, shutter speed, etc).</p>

        <p>The metadata that's required, but does not get generated automatically, is the alt text. In searching for a way for me to link images I'm hosting on Cloudinary with useful alt text, I learned that Cloudinary includes support for custom metadata fields. This means that within their environment I can <i>add</i> information to an image I have uploaded, so that when I pull it in to display in this here project, I have access to that custom data as well. Not only was I able to include alt text for each image, I was also able to tag the images, mark the country, and write a photo caption to describe the image and provide any additional context I feel may be required. Once I learned I could have this kind of flexibility within Cloudinary's environment I decided to build this as a serious demonstration of both "Aspects of Jacob."</p>

        <Image 
          src="/about/cloudinary-metadata.png"
          alt="A screenshot of Cloudinary's custom metadata fields"
          width={800} 
          height={559}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />
      </section>

      <section className="about-content-block">
        <h4>There's a package for that</h4>
        <p>TOPIC: trying to build a full window image viewer on my lonesome</p>
        <p>One of the things I wanted to achieve with this portfolio is an intuitive way for a user to open an image in full screen mode on desktop (it doesn't make much sense to do so for mobile). After much trial and error and lost hours googling for tips and tricks, I remembered about the cornerstone of software development: open-source code. Surely there is someone out there who has built a project using the React framework who also wanted to achieve the same thing as me, and it was my hope that one of those someones published a package for others to use. Yes, there is! Huzzah!</p>

        <p>I was able to incorporate this into my code. I was finished with this key component! Or was I? Alas, a perfect solution was too much to hope for.</p>

        <p>TOPIC: Overwriting ImageViewer to be accessible</p>
        <p>There were two pieces absent from this package, one of which is mission critical. While their code allowed for supplying dynamic image information so a user could go from one image to the next, it <i>hard coded</i> the alt text to be an empty string. An empty string representing a deliberate absence of alt text is only acceptable for non-essential images. So it's particularly odd for this package, as the whole point is that the image is significant. I either needed to find a new source, or I could tweak it by hand. I chose the latter.</p>

        <p>With open-source packages comes visibilty of the underlying code itself. My best recourse here was to copy in what I'll refer to as the baseline code, so that I could then force it to support basic accesibility practices. That resolved the mission critical piece. As I had pulled in the baseline code, I was then able to modify the entire structure of the component, so instead of simply being a full-screen image, I built in support for image context, like captioning text. Oh, hello Cloudinary custom metadata! It's good to see you again! Here's a simplified version of that modification:</p>

        <pre role="code">{beforeMod}</pre>
        <pre role="code">{afterMod}</pre>

        <p>Even if you don't know much about code, you can look at this and understand semantically what's going on, and how <code>{`figure / img / figcaption`}</code> makes more sense and looks cleaner than <code>{`div / div / img`}</code>, while providing additional information via that caption.</p>
        
        <p>I made a design decision about how to display this caption. I did not want to sacrifice screen space by appending it below the image similar to what you may see on a news article; I wanted this to hover over a portion of the bottom of the image. I also wanted to allow the user to "dismiss" the caption and view the image without obstruction. I could achieve this by using a simple hover effect, so that when a user mouses over the image the caption appears, but this leaves out anyone who is navigating via keyboard.</p>

        <Image 
          src="/about/image-viewer-screenshot.png"
          alt="A screenshot of what the image viewer experience is with the figcaption overlay"
          width={800} 
          height={366}
          unoptimized={true} 
          placeholder="blur" 
          blurDataURL={"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKHKsZyACMI4qpK9CAG4PC/9UjHYEAAAAAElFTkSuQmCC "} 
          className="local-loaded-pic"
        />

        <p>The first step was to make the full screen image focusable, which is not a default setting for image content. This then gave access to the keyboard for triggering the caption to appear. But I still had a bit of a UX gap here. A mouse user could "stumble upon" the caption and make it visible, thus knowing this was an option. However, that is not a reliable method for keyboard users to interact with the content. I needed a way to <i>start</i> with the image receiving focus upon going into full screen view so that the caption will be there by default--no need to discover that feature. And then the caption would disappear upon shifting focus away from the photo to one of the left/right navigation buttons.</p>

        <p>After much trial and error and lost hours googling for tips and tricks, I remembered about the cornerstone of software d... Wait, this feels familiar... I know what to do! I found a package called <code>focus-trap-react</code> that, in this case, <i>did</i> perfectly suit my needs. In addition to applying focus to the photo when opened into full screen, it returns the focus to whichever element had focus when the trap was activated. Wahoo!</p>
      </section>

      <section className="about-content-block">
        <h4>Heading: Nextjs framework + TS</h4>
        <p>When it came time to deploy the project into production, I realized I hadn't taken into consideration what it means to have a full stack application running live. I learned there's a big gap between local development and live deployment of a server. The scope of the project had also changed along the way--from practice project to full-fledged portfolio--and that first iteration was over-engineered. More specifically, I did not need to support a user's ability to make modifications to my database, such as adding, changing, or deleting images. I came to the conclusion that I was going about it all wrong. I took a page from the startup playbook, and tore it all down to rebuild from scratch, using a different tech setup.</p>
        <p>While I did not need to support a server being live all the time, I still needed to execute server-specific tasks. Next.js is a frontend framework built on top of React, and solves this problem specifically. It provides a framework experience and natively supports serverless functions so that data can be fetched securely without the financial and environmental costs of keeping a server up and running at all hours of the day.</p>
        <p>TOPIC: serverless functions</p>
        <p>MAYBE MOVE THIS PART AROUND ELSEWHERE</p>
        <p>While this was a full stack practice project designed to teach me more about backend coding that turned into a frontend portfolio without a dedicated backend, I learned far more about the backend by implementing serverless functions than I did from the tutorial. My data in Cloudinary is protected behind my user information. In order to access that for this portfolio, I needed to be able to tell Cloudinary that this application is in fact authorized to retrieve that data. Both Next.js and Cloudinary have built-in protections to block anyone from improperly executing a data fetch to protected content, and will throw errors when a fetch is called in an unsafe manner. Though serverless functions make it sound like it has nothing to do with backend code, they are in fact extracts of server-side code that will run without needing a dedicated server. As {serverlessFunction} </p> 

        <blockquote>
          Serverless Functions enable developers to write functions in JavaScript and other languages to handle user authentication, form submissions, database queries, custom Slack commands, and more. <br /> <br />

          These Functions are co-located with your code and part of your Git workflow. As traffic increases, they automatically scale up and down to meet your needs, helping you to avoid paying for always-on compute with no downtime.
        </blockquote>

        <p>Unraveling error messages as I attempted to leverage these serverless functions--a form of error-driven design--drove a deeper understanding of the backend, how it functions, and how to interact with it.</p>
      </section>

      <Link href="/gallery" className="load-more home-button">View the gallery</Link>
    </main>
  )
}
