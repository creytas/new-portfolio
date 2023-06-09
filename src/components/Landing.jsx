import { Icon } from "@iconify/react"
import Image from "next/image"
import { Tab } from '@headlessui/react'
import Skill from "./Skill"
import Project from "./Project"
import style from "../app/landing.module.css"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const Landing = ({isLight})=>{
    return(
        <section className="w-screen px-4 md:px-0">
            <div className="w-full flex flex-col justify-center items-center space-y-4">
                <div className="hidden md:w-screen md:flex md:bg-left  md:h-[304px] md:bg-[url('/headerMdBg.svg')] bg-no-repeat"></div>
                <div className="w-full flex flex-col items-center space-y-4  md:flex-row-reverse md:justify-center md:mt-40">
                    <div className="w-[65%] flex items-center justify-center md:w-[271px] md:ml-8">
                        <Image src="/profile_picture_1.png" alt="randy buhendwa's picture" width={560} height={560} loading="lazy"/>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2 md:space-y-10">
                        <h1 className="text-xl flex md:space-x-2"><span className={`hidden md:flex ${isLight ? "md:text-black" : "md:text-white"} md:text-[40px] `}>Hi, I’m</span><span className="font-bold md:text-[40px]">Randy Buhendwa</span></h1>
                        <h2 className="text-sm font-normal opacity-70 md:text-[32px]">Web developer</h2>
                        <p className="hidden md:flex md:w-[487px] md:font-light text-[21px] md:opacity-60">
                            Passionate, creative and determined, I know how to carefully identify the needs of a client and provide adapted software solutions.
                        </p>
                        <div className="flex space-x-4 md:space-x-8">
                            <a href="https://github.com/creytas" target="_blank" className="hover:scale-150 hover:text-primary"><Icon icon="eva:github-outline" className="w-[26px] h-[26px] md:w-[35px] md:h-[35px]" /></a>
                            <a href="https://instagram.com/creytas" target="_blank" className="hover:scale-150 hover:text-primary"><Icon icon="bi:instagram" className="w-[26px] h-[26px] md:w-[35px] md:h-[35px]" /></a>
                            <a href="https://twitter.com/creytas" target="_blank" className="hover:scale-150 hover:text-primary"><Icon icon="uil:twitter-alt" className="w-[26px] h-[26px] md:w-[35px] md:h-[35px]" /></a>
                            <a href="https://linkedin.com/in/creytas" target="_blank" className="hover:scale-150 hover:text-primary"><Icon icon="uil:linkedin-alt" className="w-[26px] h-[26px] md:w-[35px] md:h-[35px]" /></a>
                        </div>
                        <a href="#" target="_blank" className="hidden md:flex md:w-[60%]">
                            <button className="w-full border border-primary rounded-xl bg-primary text-white font-light flex items-center justify-center space-x-2 py-4 ">
                                <Icon icon="clarity:briefcase-line" className="mr-2" />
                                Hire me
                            </button>
                        </a>                        
                    </div>
                </div>
                <div className="hidden md:w-screen md:flex md:bg-right  md:h-[304px] md:bg-[url('/footerMdBg.svg')] bg-no-repeat"></div>
                <div className="hidden md:w-screen md:flex md:bg-left  md:h-[304px] md:bg-[url('/headerMdBg.svg')] bg-no-repeat"></div>
                <div className="w-full flex flex-col items-center space-y-4 md:justify-center ">
                    <h2 className="hidden md:flex md:flex-col items-center">
                        <span className="font-bold text-[40px]">About Me</span>
                        <span className="text-[32px] opacity-70">Who Am I ?</span>
                    </h2>
                    <div className="w-full flex justify-center md:px-16">
                        <div className="hidden md:flex md:w-[55%] md:h-[562px] md:relative ">
                            <Image src="/profile_picture_2.jpg" fill className="rounded-xl"/>
                        </div>
                        <div className="w-full flex flex-col items-center md:space-y-8">
                            <div className="hidden md:w-[594px] md:flex md:flex-col md:space-y-4 md:font-light md:text-xl">
                                <p>
                                    I am an enthusiastic, conscientious and determined person with a hint of curiosity. This makes me never miss an opportunity to learn new things (especially in my favorite fields).
                                </p>
                                <p>
                                    I favor interpersonal relationships as well as everything that makes this world a pleasant place to live, while raising us above our current condition.
                                </p>
                                <p>
                                    I have a passion for information technology (the software design industry), video games, movies and reading, because in my opinion they add a certain flavor to everyday life.                                
                                </p>
                            </div>
                            <div className="w-full flex justify-center space-x-4">
                                <div className="w-1/3 flex flex-col items-center">
                                    <span className="md:font-bold md:text-[33px] md:flex md:flex-col md:items-center md:justify-center"><Icon icon="icon-park-outline:add-computer" className="hidden md:flex md:w-[60px] md:h-[60px] md:text-primary"/>2</span>
                                    <span className="text-center md:text-[31px] opacity-70">Years of work</span>
                                </div>
                                <div className="w-1/3 flex flex-col items-center">
                                    <span className="md:font-bold md:text-[33px] md:flex md:flex-col md:items-center md:justify-center"><Icon icon="icon-park-outline:check-correct" className="hidden md:flex md:w-[55px] md:h-[55px] md:text-primary"/>+5</span>
                                    <span className="text-center md:text-[31px] opacity-70">Completed project</span>
                                </div>
                                <div className="w-1/3 flex flex-col items-center">
                                    <span className="md:font-bold md:text-[33px] md:flex md:flex-col md:items-center md:justify-center"><Icon icon="icon-park-outline:emotion-happy" className="hidden md:flex md:w-[55px] md:h-[55px] md:text-primary"/>+10</span>
                                    <span className="text-center md:text-[31px] opacity-70">Satisfied customer</span>
                                </div>
                            </div>
                            <div className="w-full flex space-x-2 mt-4">
                                <a href="https://drive.google.com/file/d/1QlLlx7AGLt6nPGxjU_-4IUrlFteNEndx/view?usp=sharing" target="_blank" className="w-[60%]">
                                    <button className="w-full border border-primary rounded-xl bg-primary text-white font-light flex items-center justify-center space-x-2 py-4 ">
                                        <Icon icon="charm:download" className="mr-2" />
                                        Download CV
                                    </button>
                                </a>    
                                <a href="mailto:randy.buhendwa@gmail.com" className="w-[20%]">
                                    <button className="w-full border border-secondary bg-secondary rounded-xl text-black font-light flex items-center justify-center space-x-2 py-4 ">
                                        <Icon icon="mdi:gmail" className="w-[26px] h-[26px]" />
                                    </button>
                                </a>
                                <a href="tel:+243 822 561 854" className="w-[20%]">    
                                    <button className="w-full border  border-secondary bg-secondary rounded-xl text-black font-light flex items-center justify-center space-x-2 py-4 ">
                                        <Icon icon="majesticons:phone-dial" className="w-[24px] h-[24px]" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="hidden md:w-screen md:flex md:bg-right  md:h-[304px] md:bg-[url('/footerMdBg.svg')] bg-no-repeat"></div>
                <div className="hidden md:w-screen md:flex md:bg-left  md:h-[304px] md:bg-[url('/headerMdBg.svg')] bg-no-repeat"></div>                
                <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:space-y-10">
                    <div className="w-screen flex justify-start px-16">
                        <h2 className="flex flex-col items-start">
                            <span className="font-bold text-[40px]">Expertise</span>
                            <span className="text-[32px] opacity-70">What Are My Skills ?</span>
                        </h2>
                    </div>
                    <div className="w-screen flex justify-around px-16">
                        <div className="group w-96 h-96 [perspective:1000px]">
                            <div className="relative w-full h-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className={`absolute inset-0 space-y-4 rounded-xl flex flex-col items-center justify-center bg-[url('/shape.svg')] bg-no-repeat bg-primary/25`}>
                                    <Icon icon="tabler:device-imac-cog" className="w-[35%] h-[35%] text-white" />
                                    <h3 className="text-2xl text-primary font-extrabold">UI/UX design</h3>
                                </div>
                                <div className="absolute inset-0 w-full h-full rounded-xl bg-white px-12 flex flex-col items-center justify-center text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <h3 className="font-bold text-xl text-primary">UI/UX design</h3>
                                    <div className="w-full flex flex-wrap">
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
                                        <Skill icon="skill-icons:wordpress" iconColor="" skill="WordPress" level="intermediate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group w-96 h-96 [perspective:1000px]">
                            <div className="relative w-full h-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className={`absolute inset-0 space-y-4 rounded-xl flex flex-col items-center justify-center bg-[url('/shape.svg')] bg-no-repeat bg-primary/25`}>
                                    <Icon icon="tabler:server-cog" className="w-[35%] h-[35%] text-white" />
                                    <h3 className="text-2xl text-primary font-extrabold">Backend</h3>
                                </div>
                                <div className="absolute inset-0 w-full h-full rounded-xl bg-white px-12 flex flex-col items-center justify-center text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <h3 className="font-bold text-xl text-primary">Backend</h3>
                                    <div className="w-full flex flex-wrap">
                                        <Skill icon="vscode-icons:file-type-node" iconColor="#83CD29" skill="Node Js" level="Intermediate" />
                                        <Skill icon="logos:docker-icon" iconColor="#2396ED" skill="Docker" level="Basic" />
                                        <Skill icon="vscode-icons:file-type-firebase" iconColor="#EEAB37, #F4BD62, #F6820C, #FCCA3F, #FDE068, #FFA50E, #FFA712, #FFC24A" skill="Firebase" level="Basic" />
                                        <Skill icon="logos:strapi-icon" iconColor="#8E75FF" skill="Strapi" level="Basic" />
                                        <Skill icon="vscode-icons:file-type-mysql" iconColor="#00758F, #5D87A1" skill="MySQL" level="Advanced" />
                                        <Skill icon="vscode-icons:file-type-mongo" iconColor="##41A247, #4BA74B, #67B554, #69B655" skill="MongoDB" level="Intermediate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group w-96 h-96 [perspective:1000px]">
                            <div className="relative w-full h-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div className={`absolute inset-0 space-y-4 rounded-xl flex flex-col items-center justify-center bg-[url('/shape.svg')] bg-no-repeat bg-primary/25`}>
                                    <Icon icon="tabler:calendar-cog" className="w-[35%] h-[35%] text-white" />
                                    <h3 className="text-2xl text-primary font-extrabold">Project management</h3>
                                </div>
                                <div className="absolute inset-0 w-full h-full rounded-xl bg-white px-12 flex flex-col items-center justify-center text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <h3 className="font-bold text-xl text-primary">Project management</h3>
                                    <div className="w-full flex flex-wrap">
                                        <Skill icon="logos:asana-icon" iconColor="#F06A6A" skill="Asana" level="Intermediate" />
                                        <Skill icon="logos:trello" iconColor="#FFFFFF, #0091E6, #0079BF" skill="Trello" level="Intermediate" />
                                    </div>
                                </div>
                            </div>
                        </div>                                                
                    </div>

                </div>

                <div className="w-full flex flex-col md:hidden">
                    <Tab.Group>
                        <Tab.List className={`w-full flex space-x-1 rounded-xl ${isLight? "bg-secondary" : "bg-alt-navy"} p-1.5`}>
                            <Tab className={
                                ({ selected }) =>
                                classNames(
                                    'w-full flex items-center justify-center space-x-2 rounded-lg py-5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
                                    selected && isLight
                                        ? 'bg-white shadow'
                                        : selected && !isLight? 'bg-navy shadow':""
                                )}>                            
                                <Icon icon="fluent:certificate-24-regular" className="w-[20px] h-[20px]" />
                                <span className="text-[15px]">Skills</span>
                            </Tab>
                            <Tab className={
                                ({ selected }) =>
                                classNames(
                                    'w-full flex items-center justify-center space-x-2 rounded-lg py-5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
                                    selected && isLight
                                        ? 'bg-white shadow'
                                        : selected && !isLight? 'bg-navy shadow':""
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
export default Landing