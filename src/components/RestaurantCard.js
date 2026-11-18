import { IMAGE_CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    console.log(props);
    //destructuring the props object to extract restaurant data
    //we can use optional chaining to avoid errors if the props object is undefined or null

    const {resdata} = props;
    const {name, cuisine, rating} = resdata || {default: {name: "N/A", cuisine: "N/A", rating: "N/A"}};
    return(
        <div className="restaurant-card">
            <img className="restaurant-image" src={IMAGE_CDN_URL} alt="restaurant" />
            <h3 className="restaurant-name">{name}</h3>
            <p className="restaurant-cuisine">{cuisine}</p>
            <p className="restaurant-rating">Rating: {rating}</p>
        </div>
    )
}

export default RestaurantCard;