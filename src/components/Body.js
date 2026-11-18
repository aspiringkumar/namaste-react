import RestaurantCard from "./RestaurantCard";
import  apiResponse from "../utils/mockData";



const Body = () => {
    return(
        <div className="body">
            <div className="search">
                <input id="search" type="text" placeholder="Search for restaurants" />
            </div>
            <div className="restaurant-list">
                {
                  apiResponse.restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resdata={restaurant} />
                  ))  
                }

               {/* <RestaurantCard resdata={apiResponse.restaurants[0]} />
                <RestaurantCard resdata={apiResponse.restaurants[1]} />
                <RestaurantCard resdata={apiResponse.restaurants[2]} />
                <RestaurantCard resdata={apiResponse.restaurants[3]} />
                <RestaurantCard resdata={apiResponse.restaurants[4]} />
                <RestaurantCard resdata={apiResponse.restaurants[5]} /> */}
            </div>
        </div>
    )
}

export default Body;