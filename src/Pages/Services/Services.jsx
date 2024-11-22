import {servicesdata} from "../../Data/Services.json.js";

const Services = () =>{
    const servicecardstyle = "  relative bg-gradient-to-br from-gray-800 via-purple-800 to-indigo-900 text-white p-2 \n" +
        "  flex flex-col items-center justify-center rounded-xl border-2 border-transparent \n" +
        "  hover:scale-105 transition ease-in-out duration-300 \n" +
        "  before:absolute before:inset-0 before:rounded-xl \n" +
        "  before:border-2 before:border-transparent before:animate-glow-border"
    return (
        <div className=" grid grid-cols-2">
            <div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] min-h-screen mx-10 mt-10">
                {servicesdata.map((item, i) => (
                    <div key={i} className={`${servicecardstyle} ${i===0 || i===5 ? 'md:col-span-2' : ''} ${i===2 ? 'md:row-span-2' : ''} `}>
                        <h3 className=' text-xl text-center font-bold'>{item.title}</h3>
                        <p className='text-center'>{item.description}</p>

                    </div>
                ))}
            </div>
            <div className=" flex flex-col items-center mt-10">
                <img className=' h-[350px] w-[350px] rounded-full shadow-[0_0_20px_4px_rgba(139,92,246,0.7)]' src='https://res.cloudinary.com/dnkhpkpy4/image/upload/v1732266890/AlbedoBase_XL_make_an_Image_with_related_software_development_1_1_hdhqyi.jpg'></img>
                <h1 className="text-white text-5xl font-bold m-4">Freescle</h1>
                <h3 className=" text-white text-2xl italic text-center font-bold  m-4">Freescle empowers businesses by delivering cutting-edge web and software solutions tailored to their needs.</h3>
                <button className=" bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500  text-white font-bold text-2xl p-2 h-[50px] w-[300px] rounded-3xl hover:scale-105 transition ease-in-out duration-300 hover:bg-violet-700">Get Started</button>
            </div>
        </div>
    )
}

export default Services;