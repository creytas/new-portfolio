import { Icon } from "@iconify/react"
import Image from "next/image"
import 'animate.css'

const Project = ({projectImg, title, }) =>{
    return(
        <div className="w-full h-[220px] border-2 border-primary rounded-lg relative hover:scale-110 hover:shadow-2xl">
            <Image src={projectImg} alt={title} className="rounded-lg absolute" fill loading="lazy"/>
        </div>
    )
}
export default Project