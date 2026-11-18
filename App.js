
 import React from "react";
 import ReactDOM from "react-dom/client";

 /*
 Header
 -logo
 -nav items
 -cart

 Body
 -search bar
 -restaurant list
 -restaurant card

 Footer 
 -copyrights
 -address
 -contact info
 */

 //config driven UI rendering is that we can use a configuration object to render the UI dynamically instead of  
 // hardcoding the data in the components.

 const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
            <Footer />
            </div>
    )
}

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/736x/79/59/ab/7959ab638a6d29a3120cc1508046ed9d.jpg" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const apiResponse = {
    "restaurants": [
        {
            "id": 1,
            "name": "Restaurant 1",
            "cuisine": "Italian",
            "rating": 4.5
        },
        {
            "id": 2,
            "name": "Restaurant 2",
            "cuisine": "Indian",
            "rating": 4.0
        },
        {
            "id": 3,
            "name": "Restaurant 3",
            "cuisine": "Chinese",
            "rating": 4.8
        },
        {
            "id": 4,
            "name": "Restaurant 4",
            "cuisine": "Mexican",
            "rating": 4.2
        },
        {
            "id": 5,
            "name": "Restaurant 5",
            "cuisine": "Thai",
            "rating": 4.6
        },
        {
            "id": 6,
            "name": "Restaurant 6",
            "cuisine": "Japanese",
            "rating": 4.9
        }
    ]
};

// key is a special prop in React that helps identify which items have changed, are added, or are removed from a list. 
// It is used to optimize the rendering of lists and improve performance. 
// In this case, we are using the restaurant's id as the key for each RestaurantCard component in the map function.
//keys are better than using index as they are unique and stable, while index can change if the list is reordered or filtered.

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

const RestaurantCard = (props) => {
    console.log(props);
    //destructuring the props object to extract restaurant data
    //we can use optional chaining to avoid errors if the props object is undefined or null

    const {resdata} = props;
    const {name, cuisine, rating} = resdata || {default: {name: "N/A", cuisine: "N/A", rating: "N/A"}};
    return(
        <div className="restaurant-card">
            <img className="restaurant-image" src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1677762922/de904a7f9b28b05468bf17d84883b9e1.jpg" alt="restaurant" />
            <h3 className="restaurant-name">{name}</h3>
            <p className="restaurant-cuisine">{cuisine}</p>
            <p className="restaurant-rating">Rating: {rating}</p>
        </div>
    )
}

const Footer = () => {
    return(
        <div className="footer">
            <p>&copy; 2024 Food Delivery App. All rights reserved.</p>
            <p>Address: 123 Main Street, City, Country</p>
            <p>Contact: 123-456-7890</p>
        </div>
    )
}


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);



