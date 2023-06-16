
import { Icon } from "@iconify/react"
import Image from "next/image"

const HeaderBar = ({isLight, setIsLight}) =>{
    return(
        <header className="w-screen flex justify-end">
            <div className="w-1/4 h-[95px] bg-[url('/headerSmBg.svg')] md:hidden bg-no-repeat ">

            </div>
            <div className={`w-3/4 md:w-screen min-h-[74px] flex justify-end md:items-start p-4 md:pr-16 md:fixed ${isLight ? "md:bg-secondary/70 md:hover:bg-secondary" : "md:bg-alt-navy/70 md:hover:bg-navy"} md:z-20`}>
                <div className="w-full flex items-center justify-end">
                    <div className="border-l-4 border-white w-[51%] flex justify-start"><Image src="/rb_logo_1.png" alt="rbportfolio logo" width={80} height={80} /></div>
                    <div className="hidden md:flex md:mr-12 md:space-x-12">
                        <span className="flex items-center hover:text-primary"><Icon icon="bx:home-smile" className="w-[30px] h-[30px] mr-1" /> Home</span>
                        <span className="flex items-center hover:text-primary"><Icon icon="bx:user" className="w-[30px] h-[30px] mr-1" /> About</span>
                        <span className="flex items-center hover:text-primary"><Icon icon="material-symbols:computer-outline" className="w-[30px] h-[30px] mr-1" /> Portfolio</span>
                        <span className="flex items-center hover:text-primary"><Icon icon="iconoir:mail" className="w-[30px] h-[30px] mr-1" /> Contact</span>
                    </div>                
                    <button onClick={()=>setIsLight(!isLight)}><Icon icon={ isLight ? "solar:moon-broken" : "solar:sun-broken"} className={`hover:text-primary ${isLight ? "w-[30px] h-[30px]" : "w-[40px] h-[40px] text-white"} `} /></button>
                </div>

            </div>
        </header>
    )    
}
export default HeaderBar