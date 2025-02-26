import { Helmet } from "react-helmet";
import ParticlesBg from "../components/Particles/ParticlesBg";
import BannerText from "../components/BannerText";


export default function Home() {
  return (
    <>
    <Helmet>
        <title>Tasmina || Home</title>
    </Helmet>

    <div className="w-full min-h-screen bg-gradient-to-tr from-black to-[#20123d] to-75%">
      <div>
        <BannerText />
      </div>
      <div className="w-full">
        <ParticlesBg />
     </div>
     
    </div>


    </>
  )
}
