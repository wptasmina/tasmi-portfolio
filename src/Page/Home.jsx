import { Helmet } from "react-helmet";
import BannerText from "../components/BannerText";
import About from "./About";
import MyProjects from "./MyProjects";
import Skills from "./Skills";
import Contact from "./Contact";



export default function Home() {
  return (
    <>
    <Helmet>
        <title>Tasmina || Home</title>
    </Helmet>

    <BannerText />

    <About />
    <MyProjects />
    <Skills />
    <Contact />

    </>
  )
}
