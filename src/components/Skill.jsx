import { Icon } from "@iconify/react"

const Skill = ({icon, iconColor, skill, level}) =>{
 return (
    <div className="w-1/2 px-2 py-1 space-x-2 flex items-center hover:scale-110 hover:text-primary md:w-1/4">
        <Icon icon={icon} width={38} height={38} color={iconColor} className="md:w-[60px] md:h-[60px] p-1" />
        <h4 className="flex flex-col md:hidden">
            <span className="font-semibold text-[15px]">{skill}</span>
            <span className="font-medium text-[13px] opacity-70">{level}</span>
        </h4>
    </div>    
 )   
}
export default Skill