
import { Icon } from "@iconify/react"

const HeaderBar = ({isLight, setIsLight}) =>{
    return(
        <header className="border w-screen flex justify-end">
            <div className="w-1/2 min-h-[74px] flex justify-end p-4 border border-red">
                <button onClick={()=>setIsLight(!isLight)}><Icon icon={ isLight ?  "solar:sun-broken": "solar:moon-broken"} className={ isLight ? "w-[40px] h-[40px]" : "w-[30px] h-[30px] text-white"} /></button>
            </div>
        </header>
    )    
}
export default HeaderBar