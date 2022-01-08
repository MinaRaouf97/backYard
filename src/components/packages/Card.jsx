import React from 'react'
import "./card.scss"
import background from "../../assets/Rec.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class Card extends React.Component {
 
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            adaptiveHeight: true,
            centerMode: true,
            variableWidth: true,
            arrows:true,
            
            
            
          };
        const {data} =this.props;
        
        return (
         
            <Slider {...settings} >
                {
                    data.map(item=>(

                     
                            <div className="card">
                                <img src={background} className="background"/>
                                <h2>{item.title}</h2>
                                <p>{item.price}</p>
                                <a href="/">details</a>
                            </div>
                         
                        
                       
                 ))
                }
           </Slider>
        

        );     

    };
    
   
}

export default Card ;