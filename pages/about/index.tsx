import { NextSeo } from 'next-seo'

//@ts-ignore
import {freshPrinceOfReact} from "./about.module.scss";


// Import of custom classes as scoped CSS


const About = () => <>
<NextSeo 
    title="About: Lukortech"
    description="this might have been a nice page but I didn't create a good description for it."
/>

<div className={freshPrinceOfReact}>
<p>
    Now, this is a story all about how
</p>
<p>
    My life got flipped-turned upside down
</p>
<p>
    And I liked to take a minute
</p>
<p>
    Just sit right there
</p>
<p>
    I'll tell you how I became the prince of a town called Bel Air
</p>
</div>
</>

export default About;