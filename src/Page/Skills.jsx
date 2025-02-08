import { Helmet } from "react-helmet";
import { AiFillHtml5, AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";


export default function Skills() {
  return (
    <>

    <Helmet>
        <title>Tasmina || Skills</title>
    </Helmet>

<div className=' w-full min-h-screen bg-gradient-to-tr from-black to-[#20123d] to-75%'>
  <section class="text-gray-600 w-11/12 mx-auto">
  <div class="container px-5  mx-auto">
    <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
      <h1 data-aos="zoom-in" class="sm:text-3xl text-2xl title-font mb-2 bg-gradient-to-r from-purple-400 to-[#341B66] bg-clip-text text-transparent font-bold pt-16">Skills</h1>
      {/* <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> */}
    </div>
    <div class="flex flex-wrap -m-4 bg-blue-black/90 rounded-2xl px-2 py-8 backdrop-blur-3xl">

      <div data-aos="fade-right"
    data-aos-duration="3000" class="xl:w-1/3 md:w-1/2 p-4 duration-300 ">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <AiFillHtml5 className="text-2xl" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>

      <div data-aos="fade-up-right" data-aos-duration="2000" class="xl:w-1/3 md:w-1/2 p-4 duration-300">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <AiOutlineJavaScript className="text-2xl" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div data-aos="fade-right"
    data-aos-duration="3000" class="xl:w-1/3 md:w-1/2 p-4 duration-300">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <IoLogoReact className="text-2xl" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>

      <div data-aos="fade-left"
    data-aos-duration="2000" class="xl:w-1/3 md:w-1/2 p-4 duration-300">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <IoLogoNodejs className="text-2xl" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000" class="xl:w-1/3 md:w-1/2 p-4 duration-300">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <SiMongodb className="text-2xl" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div data-aos="fade-left"
    data-aos-duration="2000" class="xl:w-1/3 md:w-1/2 p-4 duration-300">
        <div class="border border-gray-200 p-6 rounded-lg">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <RiTailwindCssFill className="text-2xl" />
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
    </div>

  </div>
</section>
      </div>
    </>
  )
}
