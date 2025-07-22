import { Helmet } from "react-helmet";
import { AiOutlineJavaScript } from "react-icons/ai";
import { IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


export default function Skills() {
  return (
    <>

    <Helmet>
        <title>Tasmina || Skills</title>
    </Helmet>

<section className='w-full min-h-screen bg-gradient-to-tr from-black to-[#20123d] to-75% pb-12 overflow-hidden'>
  <div className="text-gray-600 w-11/12 mx-auto">
  {/* <div className=""> */}
    <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
      <h1 data-aos="zoom-in" className="sm:text-3xl text-2xl title-font mb-2 bg-gradient-to-r from-purple-400 to-[#341B66] text-shadow-lg bg-clip-text text-transparent font-bold pt-16">Skills</h1>
    </div>
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full  rounded-2xl py-8 ">

        <div data-aos="fade-up-right" data-aos-duration="2000" className="border h-70 border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#EFD81D] mb-4">
          <AiOutlineJavaScript className="text-2xl" />
          </div>
          <h2 className="text-lg text-gray-400 font-medium title-font mb-2">JavaScript</h2>
          <p className="leading-relaxed text-base">JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS.</p>
        </div>
        <div data-aos="fade-right"
          data-aos-duration="3000" className="border border-gray-200 h-70 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#4ac6e2] mb-4">
          <IoLogoReact className="text-2xl" />
          </div>
          <h2 className="text-lg text-gray-400 font-medium title-font mb-2">React</h2>
          <p className="leading-relaxed text-base">React is a popular JavaScript library for building user interfaces (UIs), especially for single-page applications (SPAs)</p>
        </div>

      <div data-aos="fade-right"
        data-aos-duration="3000" className="border border-gray-200 h-70 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#4A9542] mb-4">
          <IoLogoNodejs className="text-2xl" />
          </div>
          <h2 className="text-lg text-gray-400 font-medium title-font mb-2">Node.js</h2>
          <p className="leading-relaxed text-base">Node.js is an open-source, cross-platform runtime environment that allows developers to run outside of a web browser.</p>
        </div>

        <div data-aos="fade-right"
          data-aos-duration="3000" className="border border-gray-200 h-70 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#00B656] mb-4">
          <SiMongodb className="text-2xl" />
          </div>
          <h2 className="text-lg text-gray-400 font-medium title-font mb-2">MongoDB</h2>
          <p className="leading-relaxed text-base">MongoDB is a NoSQL database, meaning it doesn&apos;t use the traditional relational database model (which organizes data into tables with rows and columns).</p>
        </div>

        <div data-aos="fade-right"
          data-aos-duration="3000" className="border border-gray-200 h-70 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-black mb-4">
          <TbBrandNextjs className="text-2xl" />
          </div>
          <h2 className="text-lg text-gray-300 font-medium title-font mb-2">NEXT.js</h2>
          <p className="leading-relaxed text-base">Next.js is a React framework by Vercel for building fast, scalable, and SEO-friendly web apps. It offers SSR, SSG, API routes, and more, making it ideal for modern web development.</p>
        </div>

      <div data-aos="fade-left"
        data-aos-duration="2000" className="border border-gray-200 h-70 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#29BAF8] mb-4">
          <RiTailwindCssFill className="text-2xl" />
          </div>
          <h2 className="text-lg text-gray-400 font-medium title-font mb-2">Tailwind</h2>
          <p className="leading-relaxed text-base">Tailwind CSS is a powerful and flexible utility-first framework that speeds up web development by allowing developers to style elements directly in the markup.</p>
        </div>

    </div>
</div>
      </section>
    </>
  )
}
