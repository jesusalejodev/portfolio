import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
            {/* background grid */}

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    ¿Preparado para llevar <span className="text-purple">tu producto digital </span>
                    al siguiente nivel?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Contacta conmigo y hablemos de cómo podemos trabajar juntos.
                </p>
                <a href="mailto:jesusalejowk@gmail.com">
                    <MagicButton
                        title="Ponernos en contacto"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Hecho por jesusalejodev
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <div>
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </div>
                        </a>
                    ))}

                </div>
            </div>
        </footer>
    );
};

export default Footer;