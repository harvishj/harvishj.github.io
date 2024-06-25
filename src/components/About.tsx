const About = () => {
    return (
        <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
            <span className="hash-span" id="about">
                &nbsp;
            </span>
            <div style={{ opacity: 1, transform: 'none' }}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    Introduction
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Overview
                </h2>
            </div>
            <p
                className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
                style={{ opacity: 1, transform: 'none' }}
            >
                {/* I'm a skilled Software Engineer with a passion for developing
                innovative solutions using Python, Java, PHP, and JavaScript.
                Specializing in frameworks like React, Node.js, and Three.js, I
                thrive on creating efficient, scalable, and user-friendly
                applications. My journey in software development is fueled by my
                eagerness to tackle challenging problems and my commitment to
                continuous learning.
                <br /> <br />
                Whether it's bringing your ideas to life or collaborating on
                cutting-edge projects, I'm ready to contribute with my unique
                blend of skills and enthusiasm.
                <br />
                <br />
                Let's collaborate to turn your vision into reality! 🚀 */}
                👋 Hello! I'm Harvish Jariwala, a passionate and dedicated
                Application Developer with a strong foundation in Computer
                Science. Currently based in USA, I take pride in crafting
                innovative solutions that drive efficiency and create meaningful
                impact. Let's connect and explore the possibilities!
                <br />
                <br /> I'm proficient in a wide array of languages and
                technologies including Java, Python, JavaScript, Golang, C/C++,
                SQL, Spring Boot, Django, Celery, Docker, and more. My skills
                extend to frameworks and tools like RabbitMQ, Elasticsearch,
                GCP, AWS, and many others, enabling me to build and deploy
                scalable and efficient applications. 💡
            </p>
            <div className="mt-20 flex flex-wrap gap-10">
                <div className="xs:w-[100%] sm:w-[250px] w-full">
                    <div
                        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                        style={{ opacity: 1, transform: 'none' }}
                    >
                        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                            <img
                                src="/assets/web.png"
                                alt="web-development"
                                className="w-16 h-16 object-contain"
                            />
                            <h3 className="text-white text-[20px] font-bold text-center">
                                Web Developer
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="xs:w-[100%] sm:w-[250px] w-full">
                    <div
                        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                        style={{ opacity: 1, transform: 'none' }}
                    >
                        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                            <img
                                src="/assets/mobile.png"
                                alt="web-development"
                                className="w-16 h-16 object-contain"
                            />
                            <h3 className="text-white text-[20px] font-bold text-center">
                                Full Stack Developer
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="xs:w-[100%] sm:w-[250px] w-full">
                    <div
                        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                        style={{ opacity: 1, transform: 'none' }}
                    >
                        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                            <img
                                src="/assets/backend.png"
                                alt="web-development"
                                className="w-16 h-16 object-contain"
                            />
                            <h3 className="text-white text-[20px] font-bold text-center">
                                Backend Developer
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="xs:w-[100%] sm:w-[250px] w-full">
                    <div
                        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                        style={{ opacity: 1, transform: 'none' }}
                    >
                        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                            <img
                                src="/assets/creator.png"
                                alt="web-development"
                                className="w-16 h-16 object-contain"
                            />
                            <h3 className="text-white text-[20px] font-bold text-center">
                                Frontend Developer
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
