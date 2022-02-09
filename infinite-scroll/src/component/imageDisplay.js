import '../App.css'
import { useContext } from "react";
import { DataContext } from "./dataContext";

function ImageDisplay() {
    const {images, fakeImage} = useContext(DataContext)
    return ( 
        <>
            {images.map((element,index)=>{
                return <img src={element.urls.regular}
                    alt={element.alt_description}
                    key={index}
                    className='image'

                />
            })}
            {fakeImage.map((element,index)=>{
                return <img src={element.imageUrl}
                    alt={element.alt}
                    key={index}
                    className='image'

                />
            })}

            


        </>
    )
}

export default ImageDisplay;