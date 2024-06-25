import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import suitcaseIcon from '../assets/suitcase.png';
import educationIcon from '../assets/education.png';

const Projects = () => {
    return (
        <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
            <span className="hash-span" id="work"> 
                &nbsp;
            </span>
            <div style={{ opacity: 1, transform: 'none' }}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
                    Lets take a look at
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
                    My Coding Journey So Far
                </h2>
            </div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'rgb(29, 24, 54)',
                            color: '#fff',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid  rgb(35, 38, 49)',
                        }}
                        date="January 2024 - Present"
                        iconStyle={{
                            background: 'rgb(230, 222, 221)',
                            color: '#fff',
                        }}
                        icon={
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={suitcaseIcon}
                                    alt="Metropolitan Transportation Authority (MTA)"
                                    className="w-[60%] h-[60%] object-contain"
                                />
                            </div>
                        }
                        position="left"
                    >
                        <h3 className="vertical-timeline-element-title">
                            Software Developer College Aide
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Metropolitan Transportation Authority (MTA)
                        </h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'rgb(29, 24, 54)',
                            color: '#fff',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid  rgb(35, 38, 49)',
                        }}
                        date="March 2023 - Present"
                        iconStyle={{
                            background: 'rgb(230, 222, 221)',
                            color: '#fff',
                        }}
                        icon={
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={suitcaseIcon}
                                    alt="Rutgers University"
                                    className="w-[60%] h-[60%] object-contain"
                                />
                            </div>
                        }
                        position="left"
                    >
                        <h3 className="vertical-timeline-element-title">
                            Application Developer
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Rutgers University
                        </h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{
                            background: 'rgb(29, 24, 54)',
                            color: '#fff',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid  rgb(35, 38, 49)',
                        }}
                        date="December 2024"
                        iconStyle={{
                            background: 'rgb(230, 222, 221)',
                            color: '#fff',
                        }}
                        icon={
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={educationIcon}
                                    alt="Rutgers University"
                                    className="w-[60%] h-[60%] object-contain"
                                />
                            </div>
                        }
                        position="right"
                    >
                        <h3 className="vertical-timeline-element-title">
                            Master of Science in Computer Science
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Rutgers University
                        </h4>
                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                                Relevant Courses: Compilers, DBMS, Topics in AI,
                                Machine Learning, Operating Systems, Computer
                                Vision, Cybersecurity.
                            </li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'rgb(29, 24, 54)',
                            color: '#fff',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid  rgb(35, 38, 49)',
                        }}
                        date="March 2023 - Present"
                        iconStyle={{
                            background: 'rgb(230, 222, 221)',
                            color: '#fff',
                        }}
                        icon={
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={suitcaseIcon}
                                    alt="Anicca Data"
                                    className="w-[60%] h-[60%] object-contain"
                                />
                            </div>
                        }
                        position="left"
                    >
                        <h3 className="vertical-timeline-element-title">
                            Data Engineer
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Anicca Data
                        </h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{
                            background: 'rgb(29, 24, 54)',
                            color: '#fff',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid  rgb(35, 38, 49)',
                        }}
                        date="May 2022"
                        iconStyle={{
                            background: 'rgb(230, 222, 221)',
                            color: '#fff',
                        }}
                        icon={
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={educationIcon}
                                    alt="Ahmedabad University"
                                    className="w-[60%] h-[60%] object-contain"
                                />
                            </div>
                        }
                        position="right"
                    >
                        <h3 className="vertical-timeline-element-title">
                            Bachelor of Technology in Information and
                            Communication Technology
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Ahmedabad University
                        </h4>
                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
                                Relevant Courses: Data Structures and
                                Algorithms, Computer Networks, Operating
                                Systems, Object Oriented Programming.
                            </li>
                        </ul>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'rgb(29, 24, 54)',
                            color: '#fff',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid  rgb(35, 38, 49)',
                        }}
                        date="January 2022 - May 2022"
                        iconStyle={{
                            background: 'rgb(230, 222, 221)',
                            color: '#fff',
                        }}
                        icon={
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={suitcaseIcon}
                                    alt="FERO.ai"
                                    className="w-[60%] h-[60%] object-contain"
                                />
                            </div>
                        }
                        position="left"
                    >
                        <h3 className="vertical-timeline-element-title">
                            Backend and AI/ML Engineer
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            FERO.ai
                        </h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'rgb(29, 24, 54)',
                            color: '#fff',
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid  rgb(35, 38, 49)',
                        }}
                        date="May 2021 - January 2022"
                        iconStyle={{
                            background: 'rgb(230, 222, 221)',
                            color: '#fff',
                        }}
                        icon={
                            <div className="flex justify-center items-center w-full h-full">
                                <img
                                    src={suitcaseIcon}
                                    alt="Summachar AI Media Labs"
                                    className="w-[60%] h-[60%] object-contain"
                                />
                            </div>
                        }
                        position="left"
                    >
                        <h3 className="vertical-timeline-element-title">
                            Software Engineering Intern
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Summachar AI Media Labs
                        </h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Projects;
