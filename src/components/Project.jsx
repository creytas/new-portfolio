import { Icon } from "@iconify/react"
import Image from "next/image"

const Project = ({projectImg, title, }) =>{
    return(
        <div className="w-full h-[220px] relative">
            <Image src={projectImg} alt={title} className="rounded-lg absolute" fill loading="lazy"/>
        </div>
    )
}
export default Project