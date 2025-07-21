import { Helmet } from "react-helmet";
import BannerText from "../components/BannerText";


export default function Home() {
  return (
    <>
    <Helmet>
        <title>Tasmina || Home</title>
    </Helmet>

    <BannerText />

    </>
  )
}
