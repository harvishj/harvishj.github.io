import BouncingElement from './BouncingElement';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
                </div>
                <div className="headline-text-class ">
                    <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white fade-in-text">
                        Hi, I'm <span className="text-[#915EFF]">Harvish</span>
                    </h1>
                    <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] fade-in-text mt-2 text-white-100">
                        I believe every <span className="error-code">404</span>{' '}
                        error is just a{' '}
                        <span className="success-code">200</span> in disguise,{' '}
                        <br className="sm:block hidden" />
                        waiting for the right path. 🧭
                    </p>
                </div>
            </div>
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
                            width: '957px',
                            height: '857px',
                        }}
                        data-engine="three.js r149"
                        width="1914"
                        height="1714"
                    ></canvas>
                </div>
            </div>
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <BouncingElement />
                </a>
            </div>
        </section>
    );
};

export default Hero;
