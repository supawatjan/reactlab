import { useState } from "react"
import { AiFillDownCircle,AiFillUpCircle } from "react-icons/ai";
const SingleContent = ({title,description}) => {
    const [showContent, setShowContent] = useState(false)

    return(
        <article>
            <header>
                <h2>{title}</h2>
                <button className="btn" onClick={()=>setShowContent(!showContent)}>
                    {showContent? <AiFillUpCircle/> : <AiFillDownCircle/>}
                </button>
            </header>
            
            {showContent && <p>{description}</p>}
        </article>
    )
}

export default SingleContent