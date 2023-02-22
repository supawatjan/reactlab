import { createContext, useEffect, useState} from 'react';
import testImages from './testImages';

function DataProvider({children}) {
    const apiKey = process.env.API_KEY
    const [images, setImage] = useState([])
    const [apiPage, setApiPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [fakeImage, setFakeImage] = useState([])

    
    const fetchImage = async () =>{
        setIsLoading(true)
        if (!isLoading){
            try { //if api success
                const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${apiPage}`
                const response = await fetch(apiUrl)  //keep data from api server
                const apiImages = await response.json()
                setImage((prev)=>{
                    return [...prev,...apiImages]
                });
            } catch (error){ //if api error
                console.log(error);
            }
        }
        
        setIsLoading(false)
       
    }
    // const addImage = () =>{
    //     setIsLoading(true)
    //     console.log(isLoading);
    //     if (!isLoading) {
    //         setFakeImage((prev)=>{
    //             return[...prev,...testImages]
    //         })
    //     }
        
    //     setIsLoading(false)
    // }

    useEffect(()=>{
        fetchImage()
        //addImage()
        //eslint-disable-next-line
    },[apiPage])

    useEffect(()=>{
        const event = window.addEventListener('scroll',()=>{
            // console.log(`window.innerHeight:`,window.innerHeight);
            // console.log(`window.scrollY:`,window.scrollY);
            // console.log(`document.body.offsetHeight`,document.body.offsetHeight);
            if (
                ((window.innerHeight + window.scrollY) > document.body.offsetHeight - 1)
                && !isLoading
            ){
                setApiPage((prevPage)=>{
                    return prevPage + 1
                })
            }
        })
        return ()=> window.removeEventListener('scroll',event)

    },[])

    return (
        <DataContext.Provider value={{images, fakeImage}}>
            {children}
        </DataContext.Provider>

      );
}

export default DataProvider;
export const DataContext = createContext()
