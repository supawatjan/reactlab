import '../App'
export const FoodComponent = ({image_url,name}) =>{

    return(
        <div className="food-card">
            <img className="food-image"src={image_url} alt={name} />
            <span className='food-name'>{name}</span>
        </div>

    )
}