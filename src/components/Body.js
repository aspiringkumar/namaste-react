import RestaurantCard from "./RestaurantCard";
import  apiResponse from "../utils/mockData";
import { useState } from "react";



const Body = () => {

    const [restaurants, setRestaurants] = useState(apiResponse.restaurants);
    
    return(
        <div className="body">
            <div className="search">
                <input id="search" type="text" placeholder="Search for restaurants" />
            </div>
            <button id="search-btn" onClick={() => {
                const filteredRestaurants = apiResponse.restaurants.filter((restaurant) => { return restaurant.rating > 4; });
                setRestaurants(filteredRestaurants);
            }}>
                Filter Top Rated Restaurants
            </button>
            <div className="restaurant-list">
                {
                  restaurants.map((restaurant) => (
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