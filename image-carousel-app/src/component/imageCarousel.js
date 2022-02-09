import imageAlbum from "./imageAlbum"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
 
const ImageCarousel = () =>{
    
    const [imageOrder, setImageOrder] = useState(0)
    const prevImage =()=>{
        if(imageOrder === 0){
            setImageOrder(imageAlbum.length - 1)
        }else{
            setImageOrder(imageOrder - 1)
        }
    }
    const nextImage =()=>{
        if(imageOrder === imageAlbum.length - 1 ){
            setImageOrder(0)
        }else{
            setImageOrder(imageOrder + 1)
        }
    }
    // console.log(imageOrder);
    return(
        <section>
            <h1>Image Carousel</h1>
            
            <div className="image-carousel">
                <div className="back-arrow">
                    <MdArrowBackIos onClick={prevImage}/>
                </div>
                {imageAlbum.map((element,index)=>{
                    if (imageOrder === index){
                        return (
                            <div className="image" key={index}>
                                <img src={element.imageURL} alt={element.title}/>
                                <div className="image-title">
                                    <p>{element.title}</p>
                                </div>
                            </div>
                        )
                    }
                })}
                <div className="forward-arrow">
                    <MdArrowForwardIos onClick={nextImage}/>
                </div>
            </div>
            
        </section>
    )
}
export default ImageCarousel