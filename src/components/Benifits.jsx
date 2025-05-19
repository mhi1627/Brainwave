import Section from "./Section";
import {GradientLight} from "./design/Benefits"
import {benefits} from '../constants'
import Heading from "./Heading";
import ClipPath from "../assets/svg/ClipPath";
import Arrow from "../assets/svg/Arrow";

export default function Benifits() {
  return (
   <Section className={`mt-5`}>
    <div className=" container relative z-2 ">
      <Heading className={`mb-4 lg:mb-10`}>Chat Smarter, Not Harder with Brainwave</Heading>
      
        <div className="grid grid-cols-1 mt-10 lg:mt-0 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:p-6 overflow-hidden">
          {benefits.map(item=>(
            <div className="cards group relative w-full overflow-hidden md:max-w-[24rem] min-h-[22rem]">
      
                    <img src={item.backgroundUrl} alt="" className="relative z-10 w-full h-full bg-[length-100%_100%]"/>
                    <img src={item.imageUrl} style={{ clipPath: "url(#benefits)" }} alt="" className="absolute top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-500 group-hover:opacity-10 "/>
              
                <div className="card-content absolute top-0 left-0 z-20 w-full h-full p-8 ">
                    <h5 className="h5 mt-4 mb-6">{item.title}</h5>
                    <p className="body-2">{item.text}</p>
                    <div className="flex absolute bottom-5 left-0 w-full p-2 md:px-6 items-center ">
                        <img src={item.iconUrl} alt="" className=""/>
                        <p className="font-code flex ml-auto">Explore More
                             <Arrow></Arrow>
                        </p>
                       
                    </div>
               
                </div>
                 <ClipPath></ClipPath>
            </div>
          ))}
        </div>
      
    </div>
   </Section>
  )
}
