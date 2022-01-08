import "./profile.scss" 
import wallpaper from "../../assets/Wallpaper.png"
import logo from "../../assets/Logo.png"

export default function Profile() {
    return (
        <div className="profile" id="profile">
                  
             <img src={wallpaper} className="wallpaper"/>
             <img src={logo} className="logo"/>
             <a href="#packages" className="topleft" >Packages</a>
             <a href="#inspirations" className="topcenter" >Who are we?</a>
             <a href="#specialties" className="toplast">let's talk</a>

             <div className="slider">
               
             
                    <p className="caption"> Good design is </p>
                    <div className="words">
                        <span>text 1 </span> 
                        <span>text 2 </span> 
                        <span>text 3 </span>  
                        <span>text 1 </span>
                    </div>

             </div>
             <div className="auther">
                 <p>-Dieter Rams</p>
             </div>

        </div>
    )
}
