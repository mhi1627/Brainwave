import { service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import CheckInfo from "./CheckInfo";
import Heading from "./Heading";
import Section from "./Section";
import Generating from "./Generating";
import { Gradient, VideoBar, VideoChatMessage } from "./design/Services";
export default function Services() {
  return (
   <Section className={`mt-12`}>
    <div className="container">
        <Heading text={`Brainwave unlocks the potential of AI-powered applications`} className={``}>Generative AI made for creators.</Heading>
     <div className="relative">
           <div className={`relative border border-n-5 rounded-3xl p-8 h-[39rem] xl:h-[46rem] lg:p-20 overflow-hidden flex items-center `}>
          <div className="md:w-3/5 absolute top-0 left-0 xl:w-auto w-full h-full">
             <img src={service1} alt="" className="w-full h-full object-cover md:object-right" width={800} height={730}/>
          </div>
          <div className="relative ml-auto z-1 max-w-[17rem] ">
             <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
             {brainwaveServices.map(service=>(
                <CheckInfo className={`border-t border-n-1/10`}>{service}</CheckInfo>
             ))}
          </div>
          <Generating>AI is Generating</Generating>                
          
        </div>
                
     
        <div className="grid lg:grid-cols-2 gap-5  mt-8">
            <div className="service2 relative min-h-[39rem] overflow-hidden xl:h-[46rem] border border-n-6 rounded-3xl">
                <div className="absolute inset-0">
                   <img src={service2} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute flex flex-col justify-end inset-0 bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                    <h4 className="h4">Photo Editing</h4>
                    <p className="body-2 text-n-3"> Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!</p>
                </div>

            </div>

            <div className="service3 border border-n-6 rounded-3xl bg-n-7 ">
                <div className="p-8 lg:p-12">
                    <h4 className="h4">Video generation</h4>
                    <p className="body-2 text-n-4 mt-5">The world’s most powerful AI photo and video art generation
                  engine. What will you create?</p>
                    <ul className="flex items-center justify-between mt-5">
                        {brainwaveServicesIcons.map((icon,index)=>(
                            <li className="mt-3">
                              {index === 2 ?   
                              <div className="bg-conic-gradient p-0.25 rounded-xl">
                                <div className="flex items-center justify-center rounded-xl w-10 h-10 bg-n-6 md:w-15 md:h-15">
                                    <img src={icon} alt="" width={24} height={24}/>
                                </div>
                              </div> : 
                                <div className="flex items-center justify-center rounded-xl w-10 h-10 bg-n-6 md:w-15 md:h-15">
                                    <img src={icon} alt="" width={24} height={24}/>
                                </div>}
                            </li>
                        ))}
                    </ul>
                </div>
      
                      <div className="mx-4 relative h-[20rem] md:h-[25rem] overflow-hidden rounded-3xl bg-n-8  ">
                    <img src={service3} className="w-full h-full object-cover"   width={520}
                  height={400}
                  alt="Scary robot"/>
                     <VideoBar></VideoBar>
                     <VideoChatMessage></VideoChatMessage>
                </div>
            </div>
            <Gradient></Gradient>
        </div>
     </div>

    </div>
   </Section>
  )
}
