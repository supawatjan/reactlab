import { useEffect, useState, createContext} from "react"

export const DataContext = createContext()

export function DataProvider({ children }) {
    const [countries, setCountries] = useState([])
    const [searchWord, setSearchWord] = useState('')
    const [filterCountries] = useState(["countryName","capitalCity","subregion"])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(countries => {
                countries.sort(sortName)
                countries.forEach((element)=>{ //creact new object for pull .name.common up 
                    element['countryName'] = element.name.common
                    element['capitalCity'] = createCapitalCity(element.capital)
                })
                setCountries(countries)
                console.log(countries);
            })
    }, [])

    const createCapitalCity = (name) => {
        if(name){
            return name.toString()
        }else{
            return ""
        }
    }

    const sortName=(a,b)=>{
        return (a.name.common).localeCompare((b.name.common))
        
    }
    const searchCountry = (countries /*countriesState*/ ) =>{
        return countries.filter((country)=>{ // filter to only thruthy element //this method return new arr
            return filterCountries.some((filterItem)=>{ //the method return a boolean
                if (country[filterItem]){ //if condition check Was property name  defined?
                    return country[filterItem].toLowerCase().indexOf(searchWord.toLowerCase()) > -1 //หาว่า searchWord ตรงกับ value ของ property name ตัวไหนบ้าง?
                }else{ //if property name is undefined return to false
                    return false
                }
            })
        })
    }
    
    return (
        <DataContext.Provider value={{
            countries, 
            searchWord, setSearchWord,
            searchCountry

        }}>
            {children}
        </DataContext.Provider>
    )
}

