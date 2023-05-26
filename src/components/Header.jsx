
import { Icon } from "@iconify/react"

const HeaderBar = ({isLight, setIsLight}) =>{
    return(
        <header className="border w-screen flex justify-end">
            <div className="w-1/2 h-[95px] border border-red bg-[url('/headerSmBg.svg')] bg-no-repeat">

            </div>
            <div className="w-1/2 min-h-[74px] flex justify-end p-4">
                <button onClick={()=>setIsLight(!isLight)}><Icon icon={ isLight ? "solar:moon-broken" : "solar:sun-broken"} className={ isLight ? "w-[30px] h-[30px]" : "w-[40px] h-[40px] text-white"} /></button>
            </div>
        </header>
    )    
}
export default HeaderBar