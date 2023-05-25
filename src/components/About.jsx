import { Icon } from "@iconify/react"
import Image from "next/image"
import { Tab } from '@headlessui/react'
import Skill from "./Skill"
import Project from "./Project"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const About = ({isLight})=>{
    return(
        <section className="w-screen px-4">
            <div className="w-full flex flex-col justify-center items-center space-y-4">
                <div className="w-[65%] flex items-center justify-center">
                    <Image src="/profile_picture_1.png" alt="randy buhendwa's picture" width={560} height={560} loading="lazy"/>
                </div>
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-xl"><span className="font-bold">Randy Buhendwa</span></h1>
                    <h2 className="text-sm font-normal opacity-70">Web developer</h2>
                    <div className="flex space-x-4">
                        <a href="https://github.com/creytas" target="_blank"><Icon icon="eva:github-outline" className="w-[26px] h-[26px]" /></a>
                        <a href="https://instagram.com/creytas" target="_blank"><Icon icon="bi:instagram" className="w-[26px] h-[26px]" /></a>
                        <a href="https://twitter.com/creytas" target="_blank"><Icon icon="uil:twitter-alt" className="w-[26px] h-[26px]" /></a>
                        <a href="https://linkedin.com/in/creytas" target="_blank"><Icon icon="uil:linkedin-alt" className="w-[26px] h-[26px]" /></a>
                    </div>
                </div>
                <div className="w-full flex justify-center space-x-4">
                    <div className="w-1/3 flex flex-col items-center">
                        <span>2</span>
                        <span className="text-center">Years of work</span>
                    </div>
                    <div className="w-1/3 flex flex-col items-center">
                        <span>+5</span>
                        <span className="text-center">Completed project</span>
                    </div>
                    <div className="w-1/3 flex flex-col items-center">
                        <span>+10</span>
                        <span className="text-center">Satisfied customer</span>
                    </div>
                </div>
                <div className="w-full flex space-x-2">
                    <a href="https://drive.google.com/file/d/1QlLlx7AGLt6nPGxjU_-4IUrlFteNEndx/view?usp=sharing" target="_blank" className="w-[60%]">
                        <button className="w-full border border-primary rounded-xl bg-primary text-white font-light flex items-center justify-center space-x-2 py-4 ">
                            <Icon icon="charm:download" />
                            Download CV
                        </button>
                    </a>    
                    <a href="mailto:randy.buhendwa@gmail.com" className="w-[20%]">
                        <button className="w-full border border-secondary bg-secondary rounded-xl text-black font-light flex items-center justify-center space-x-2 py-4 ">
                            <Icon icon="mdi:gmail" className="w-[26px] h-[26px]" />
                        </button>
                    </a>    
                    <button className="w-[20%] border  border-secondary bg-secondary rounded-xl text-black font-light flex items-center justify-center space-x-2 py-4 ">
                        <Icon icon="bi:messenger" className="w-[20px] h-[20px]" />
                    </button>
                </div>
                <div className="w-full">
                    <Tab.Group>
                        <Tab.List className={`w-full flex space-x-1 rounded-xl ${isLight? "bg-secondary" : "bg-alt-navy"} p-1.5`}>
                            <Tab className={({ selected }) =>
                                classNames(
                                    'w-full flex items-center justify-center space-x-2 rounded-lg py-5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
                                    selected
                                        ? 'bg-white shadow'
                                        : ''
                                )
                            }>
                                <Icon icon="fluent:certificate-24-regular" className="w-[20px] h-[20px]" />
                                <span className="text-[15px]">Skills</span>
                            </Tab>
                            <Tab className={({ selected }) =>
                                classNames(
                                    'w-full flex items-center justify-center space-x-2 rounded-lg py-5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
                                    selected
                                        ? 'bg-white shadow'
                                        : ''
                                )
                            }>
                                <Icon icon="mi:computer" className="w-[20px] h-[20px]" />
                                <span className="text-[15px]">Projects</span>
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="w-full">
                            <Tab.Panel className="w-full">
                                <div className="w-full py-2 px-4 flex flex-col items-center justify-center">
                                    <h3 className="font-bold text-lg m-2">UI/UX design</h3>
                                    <div className="w-full flex justify-center flex-wrap">
                                        <Skill icon="akar-icons:html-fill" iconColor="#E44D26" skill="HTML" level="Advanced" />
                                        <Skill icon="fa-brands:react" iconColor="#00D8FF" skill="React" level="Intermediate" />
                                        <Skill icon="akar-icons:css-fill" iconColor="#264DE4" skill="CSS" level="Advanced" />
                                        <Skill icon="akar-icons:bootstrap-fill" iconColor="#7E13F8" skill="Bootstrap" level="Advanced" />
                                        <Skill icon="akar-icons:javascript-fill" iconColor="#F7DF1E" skill="JavaScript" level="Intermediate" />
                                        <Skill icon="cib:redux" iconColor="#764ABC" skill="Redux" level="Advanced" />
                                        <Skill icon="akar-icons:sass-fill" iconColor="#CD6799" skill="Sass" level="Basic" />
                                        <Skill icon="logos:figma" iconColor="" skill="Figma" level="Intermediate" />
                                        <Skill icon="devicon:tailwindcss" iconColor="#38BDF8" skill="Tailwind" level="Intermediate" />
                                        <Skill icon="simple-icons:mui" iconColor="#007FFF" skill="MUI" level="intermediate" />
                                    </div>
                                </div>
                                <div className="w-full py-2 px-4 flex flex-col items-center justify-center">
                                    <h3 className="font-bold text-lg m-2">Backend</h3>
                                    <div className="w-full flex justify-center flex-wrap">
                                        <Skill icon="vscode-icons:file-type-node" iconColor="#83CD29" skill="Node Js" level="Intermediate" />
                                        <Skill icon="logos:docker-icon" iconColor="#2396ED" skill="Docker" level="Basic" />
                                        <Skill icon="vscode-icons:file-type-firebase" iconColor="#EEAB37, #F4BD62, #F6820C, #FCCA3F, #FDE068, #FFA50E, #FFA712, #FFC24A" skill="Firebase" level="Basic" />
                                        <Skill icon="logos:strapi-icon" iconColor="#8E75FF" skill="Strapi" level="Basic" />
                                        <Skill icon="vscode-icons:file-type-mysql" iconColor="#00758F, #5D87A1" skill="MySQL" level="Advanced" />
                                        <Skill icon="vscode-icons:file-type-mongo" iconColor="##41A247, #4BA74B, #67B554, #69B655" skill="MongoDB" level="Intermediate" />
                                    </div>
                                </div>
                                <div className="w-full py-2 px-4 flex flex-col items-center justify-center">
                                    <h3 className="font-bold text-lg m-2">Project management</h3>
                                    <div className="w-full flex justify-center flex-wrap">
                                        <Skill icon="logos:asana-icon" iconColor="#F06A6A" skill="Asana" level="Intermediate" />
                                        <Skill icon="logos:trello" iconColor="#FFFFFF, #0091E6, #0079BF" skill="Trello" level="Intermediate" />
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel className="w-full py-5 px-4 space-y-2.5">
                                <Project projectImg="/project_5.png" title="temabe global website"/>
                                <Project projectImg="/project_6.png" title="koumishop website"/>
                                <Project projectImg="/project_7.png" title="koumi-merchant webapp"/>
                                <Project projectImg="/project_8.png" title="match-making webapp"/>
                                <Project projectImg="/project_9.png" title="kesho-cntes webapp"/>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>                
                </div>
            </div>
        </section>
    )    
}
export default About