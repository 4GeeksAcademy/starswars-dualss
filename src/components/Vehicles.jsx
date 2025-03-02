import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { FavoriteContent } from "../hooks/FavoriteContent";

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [favorite, setFavorite] = useContext(FavoriteContent);
    const getVehicles = async () => {
        const response = await fetch("https://swapi.tech/api/vehicles")
        const data = await response.json()
        console.log(data)
        setVehicles(data.results);
        console.log(vehicles)
    }
    useEffect(() => {
        getVehicles()
    }, [])
    const addFavVehicles = (vehicle) => {
        if (!favorite.some((fav) => fav.name === vehicle.name)){
            setFavorite([...favorite, vehicle]);
        }
    }

    return (
        <>
        <h1>VEHICLES</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {vehicles.map((vehicle, index) => (
                    <div key={index} className="col-md-3">
                        <div className="card mt-1 cardEdit" style={{ height: "auto", minHeight: "20rem", width: "20rem" }}>
                            <img src="https://wallpapercave.com/wp/wp9534712.png" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mb-5">{vehicle.name}</h5>
                                <div className="d-flex bd-highlight mb-1">
                                    <button
                                        className="btn btn-outline-primary p-2 bd-highlight"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse-${index}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse-${index}`}
                                    >
                                        More info
                                    </button>
                                    <i className="fa-regular fa-star ms-auto p-2 bd-highlight" onClick={() =>addFavVehicles(vehicle)}></i>
                                </div>

                                <div className="collapse mt-2" id={`collapse-${index}`}>
                                    <div className="mt-3">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam deleniti eveniet iure sunt amet cupiditate! Dolorum magnam nobis velit magni, itaque recusandae molestiae doloribus inventore dignissimos voluptatibus ratione labore!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Vehicles;