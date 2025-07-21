

// export default function SkillsCard() {
//   return (
//     <div className='w-full h-1/3  bg-gradient-to-tr from-black to-[#20123d] to-75%'>
//         <div className='w-10 h-[6px] mt-16 bg-black relative '>
//             <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center
//              bg-black'>
//              <span className='w-3 h-3'></span>
//              </span>
//         </div>

//     </div>
//   )
// }


// components/SkillCard.jsx

import PropTypes from "prop-types";

SkillCard.propTypes = {
  skill: PropTypes.shape({
    img: PropTypes.string.isRequired,
  }),
};

export default function SkillCard({ skill = {} }) {
  const { img } = skill;
  return (
    <div className="card bg-base-100 card-sm shadow-sm">
      <div className="card-body flex justify-center items-center bg-[#0c0c0ca6] shadow-2xl">
        {img ? (
          <img
            src={img}
            alt="logo"
            className="w-full md:h-20 h-16 object-cover p-2 object-center"
          />
        ) : (
          <p className="text-white">No image</p>
        )}
      </div>
    </div>
  );
}
