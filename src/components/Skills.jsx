

export default function Skills({ skill }) {
    const { name, img } = skill

    return (
            <div className="card bg-base-100 card-sm shadow-sm">
                <div className="card-body flex justify-center items-center bg-[#0c0c0ca6] shadow-2xl ">
                    <img src={img} alt="logo" className="w-full md:h-20 h-16 object-cover p-2 object-center" />
                </div>
            </div>
    )
}
