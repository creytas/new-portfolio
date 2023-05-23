import { Icon } from "@iconify/react"
import Image from "next/image"
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const About = ()=>{
    return(
        <section className="">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
            <Image src="/profile_picture_1.png" alt="randy buhendwa's picture" width={560} height={560}/>
            <div className="flex flex-col justify-center items-center space-y-2">
                <h1 className="text-xl"><span className="font-bold">Randy Buhendwa</span></h1>
                <h2 className="text-sm font-normal opacity-70">Web developer</h2>
                <div className="flex space-x-4">
                    <Icon icon="eva:github-outline" className="w-[26px] h-[26px]" />
                    <Icon icon="bi:instagram" className="w-[26px] h-[26px]" />
                    <Icon icon="uil:twitter-alt" className="w-[26px] h-[26px]" />
                    <Icon icon="uil:linkedin-alt" className="w-[26px] h-[26px]" />
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                    <span>2</span>
                    <span className="text-center">Years</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>+5</span>
                    <span className="text-center">Completed project</span>
                </div>
                <div className="flex flex-col items-center">
                    <span>+10</span>
                    <span className="text-center">Satisfied customer</span>
                </div>
            </div>
            <div className="w-full flex space-x-2">
                <button className="w-[60%] border border-primary rounded-xl bg-primary text-white font-light flex items-center justify-center space-x-2 py-4 ">
                    <Icon icon="charm:download" />
                    Download CV
                </button>
                <button className="w-[20%] border border-secondary bg-secondary rounded-xl text-black font-light flex items-center justify-center space-x-2 py-4 ">
                    <Icon icon="mdi:gmail" className="w-[26px] h-[26px]" />
                </button>
                <button className="w-[20%] border  border-secondary bg-secondary rounded-xl text-black font-light flex items-center justify-center space-x-2 py-4 ">
                    <Icon icon="bi:messenger" className="w-[20px] h-[20px]" />
                </button>
            </div>
            <div className="w-full">
            <Tab.Group>
                <Tab.List className="w-full flex space-x-1 rounded-xl bg-secondary p-1">
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full flex items-center justify-center space-x-2 rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white shadow'
                                : ''
                        )
                    }>
                        <Icon icon="fluent:certificate-24-filled" className="w-[20px] h-[20px]" />
                        <span>Skills</span>
                    </Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full flex items-center justify-center space-x-2 rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white shadow'
                                : ''
                        )
                    }>
                        <Icon icon="mi:computer" className="w-[20px] h-[20px]" />
                        <span>Projects</span>
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>                
            </div>
        </div>
    </section>
    )    
}
export default About