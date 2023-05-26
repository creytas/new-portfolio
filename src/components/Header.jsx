
import { Icon } from "@iconify/react"

const HeaderBar = ({isLight, setIsLight}) =>{
    return(
        <header className="w-screen flex justify-end">
            <div className="w-1/4 h-[95px] bg-[url('/headerSmBg.svg')] bg-no-repeat">

            </div>
            <div className="w-3/4 min-h-[74px] flex justify-end p-4">
                <button onClick={()=>setIsLight(!isLight)}><Icon icon={ isLight ? "solar:moon-broken" : "solar:sun-broken"} className={ isLight ? "w-[30px] h-[30px]" : "w-[40px] h-[40px] text-white"} /></button>
            </div>
        </header>
    )    
}
export default HeaderBar