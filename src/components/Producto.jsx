import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Producto = ({ Title, dTitle, title, Description, dDescripcion, ImageSrc }) => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out", 
          once: true,
        });
      }, []);

  return (
    <div className="container mx-auto p-4 md:p-12" >
      <main className="flex flex-col md:flex-row items-center md:text-left" >
        <div className="w-full md:w-1/2 flex flex-col items-start text-left md:ml-20" data-aos="fade out">
          <h1 className=" text-[36px] md:text-[64px] font-bold text-[#00C08B] font-montserrat mb-6 leading-tight">
            {Title} <br /> {dTitle} <br /> {title}
          </h1>
          <p className=" text-gray-500 mb-4 text-[16px] font-montserrat leading-relaxed">
            {Description} <br /> {dDescripcion}.
          </p>
          <button className=" px-6 py-2 mt-5 border-2 border-[#00C08B] text-[#00C08B] font-bold uppercase hover:bg-teal-600 hover:text-white transition-colors duration-300">
            Ver Más
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <img
            src={ImageSrc}
            alt={Title}
            className=" w-full md:w-[640px] h-auto md:h-[640px] object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default Producto;
