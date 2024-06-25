import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import emailIcon from '../assets/email.png';

const Contact = () => {
    return (
        <section
            className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
            id="contact"
        >
            <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
                <div
                    className="flex-[0.75] bg-black-100 p-8 rounded-2xl text-center"
                    style={{
                        transform:
                            'translateX(0%) translateY(0px) translateZ(0px);',
                    }}
                >
                    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                        Get in touch
                    </p>
                    <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        Contact
                    </h3>
                    <div className="mt-7 flex justify-between">
                        <a
                            href="https://www.linkedin.com/in/harvishj/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={linkedinIcon}
                                className="w-20 h-20 object-cover"
                            />
                        </a>
                        <a
                            href="https://github.com/harvishj"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubIcon}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        </a>
                        <a href="mailto:harvishjariwala@gmail.com">
                            <img
                                src={emailIcon}
                                className="w-20 h-20 object-cover"
                            />
                        </a>
                    </div>
                </div>
                <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            pointerEvents: 'auto',
                            touchAction: 'none',
                        }}
                    >
                        <div style={{ width: '100%', height: '100%' }}>
                            <canvas
                                style={{
                                    display: 'block',
                                    width: '829px',
                                    height: '550px',
                                }}
                                data-engine="three.js r149"
                                width="1658"
                                height="1100"
                            ></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
