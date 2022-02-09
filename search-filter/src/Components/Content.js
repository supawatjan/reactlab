import './Content.css'
import {useContext} from 'react'

import { DataContext} from './DataContext'

const Content = () => {
    const {countries, searchCountry} = useContext(DataContext)
    
    return(
        <div className="content-container">
            <ul className='grid'>
                {searchCountry(countries).map((element,index)=>{
                    return (
                        <li key={index} className='flex data-container'>
                            <img src={element.flags.svg}
                                className='flag'
                                alt={`${element.name.common}-flag`}
                            />
                            <span className='nation-name'>{element.name.common}</span>
                            <div className='detail'>
                                
                                <span>Capital city : {element.capital}</span>
                                <span>
                                Population : {element.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </span>
                                <span>Region : {element.subregion}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
 export default Content