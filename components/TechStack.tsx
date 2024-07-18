import { technologies } from '@/data'
import React from 'react'

const TechStack = () => {
    return (
        <section id="techstack" className="py-20">
            <h1 className="heading">
                Mi <span className="text-purple">Tech Stack</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center mt-20 gap-4 md:gap-16 max-lg:mt-10">
                {technologies.map((tech) => (
                    <React.Fragment key={tech.id}>
                        <div className="flex md:max-w-60 max-w-32 gap-2">
                            <img
                                src={tech.img}
                                alt={tech.name}
                                className="md:w-24 w-20"
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section >
    );
};

export default TechStack