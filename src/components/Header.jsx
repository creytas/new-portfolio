
import { Icon } from "@iconify/react"

const HeaderBar = ({isLight, setIsLight}) =>{
    return(
        <header className="w-screen flex justify-end md:pr-16">
            <div className="w-1/4 h-[95px] md:h-[304px] bg-[url('/headerSmBg.svg')] md:bg-[url('/headerMdBg.svg')] bg-no-repeat">

            </div>
            <div className="w-3/4 min-h-[74px] flex justify-end md:items-start p-4">
                <div className="w-full flex items-center justify-end">
                    <div className="hidden md:flex md:mr-12 md:space-x-12">
                        <span className="flex items-center hover:text-primary"><Icon icon="bx:home-smile" className="w-[30px] h-[30px] mr-1" /> Home</span>
                        <span className="flex items-center hover:text-primary"><Icon icon="bx:user" className="w-[30px] h-[30px] mr-1" /> About</span>
                        <span className="flex items-center hover:text-primary"><Icon icon="material-symbols:computer-outline" className="w-[30px] h-[30px] mr-1" /> Portfolio</span>
                        <span className="flex items-center hover:text-primary"><Icon icon="iconoir:mail" className="w-[30px] h-[30px] mr-1" /> Contact</span>
                    </div>                
                    <button onClick={()=>setIsLight(!isLight)}><Icon icon={ isLight ? "solar:moon-broken" : "solar:sun-broken"} className={ isLight ? "w-[30px] h-[30px]" : "w-[40px] h-[40px] text-white"} /></button>
                </div>

            </div>
        </header>
    )    
}
export default HeaderBar