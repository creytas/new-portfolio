
import { Icon } from "@iconify/react"

const FooterBar = () =>{
    return(
        <footer className="w-screen flex justify-end items-center">
            <strong className="w-3/4 min-h-[74px] space-x-1 flex justify-center p-6 font-thin text-[12.5px]">
                <span className="font-bold">© Imagin’Soft 2023</span><span> - All rights reserved </span>
            </strong>
            <div className="w-1/4 h-[95px] md:h-[304px] bg-[url('/footerSmBg.svg')] md:bg-[url('/footerMdBg.svg')] bg-no-repeat bg-right">
            </div>
        </footer>
    )    
}
export default FooterBar