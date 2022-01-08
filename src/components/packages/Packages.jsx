import { render } from "@testing-library/react";
import Card from "./Card";
import "./packages.scss";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class Packages extends React.Component { 
 state = {
    data: [
        {
         title:"website design",
         price:"3,000 LE"
        },
        {
         title:"brand ID",
         price:"3,000 LE"
         },
        {
         title:"social media package ",
        price:"3,000 LE"
        } ,
        {
        title:"website design",
        price:"3,000 LE"
        } ,
        {
         title:"brand ID",
         price:"3,000 LE"
         },
         ,
        {
         title:"brand ID",
         price:"3,000 LE"
         },
         
         {
         title:"website design",
         price:"3,000 LE"
         } ,
         ,
         {
         title:"website design",
         price:"3,000 LE"
         } ,

    ]
}



  
    render(){
        const {data} = this.state;
        return (
        <div  className="packages" id="packages">
        
           <p className="identifier">social media marketing plans</p>

           <div className="list">
             <Card data={data}></Card>
           </div>
           <div className="links">
                <h1>We are backyard designs </h1>
                <p>We make high quality designs for almost anything</p>
               <p>follow us here:</p>
            </div>
        </div>
      );
    }
}

export default Packages;
