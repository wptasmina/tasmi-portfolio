import { Helmet } from "react-helmet";
import ParticlesBg from "../components/Particles/ParticlesBg";
// import BannerText from "../components/BannerText";
import About from "./About";

export default function Home() {
  return (
    <>
    <Helmet>
        <title>Tasmina || Home</title>
    </Helmet>

    <div className="relative w-full min-h-screen bg-amber-500 text-red-100">
      <div>
        <About />
      </div>
      
      <div className="w-full h-screen absolute">
        <ParticlesBg />
     </div>

          <h1 className="text-red-500">hollo Coffined to companie at yet lyres childe, pleasure deem scape it been. Lemans flaunting yet and when native and concubines.</h1>
       </div>

   
    
    </>
  )
}
