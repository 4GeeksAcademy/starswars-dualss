import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { FavoriteContent } from "../hooks/FavoriteContent";

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const [favorite, setFavorite] = useContext(FavoriteContent);
    const getPlanets = async () => {
        const response = await fetch("https://swapi.tech/api/planets")
        const data = await response.json()
        console.log(data)
        setPlanets(data.results);
        console.log(planets)
    }
    useEffect(() => {
        getPlanets()
    }, [])
    const addFavPlanets = (planet) => {
        if (!favorite.some((fav) => fav.name === planet.name)){
            setFavorite([...favorite, planet]);
        }
    }

    return (
        <>
        <h1>PLANETS</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {planets.map((planet, index) => (
                    <div key={index} className="col-md-3">
                        <div className="card mt-1 cardEdit" style={{ height: "auto", minHeight: "20rem", width: "20rem" }}>
                            <img src="https://i.ytimg.com/vi/jl1J30dgivA/maxresdefault.jpg" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mb-5">{planet.name}</h5>
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
                                    <i className="fa-regular fa-star ms-auto p-2 bd-highlight" onClick={() =>addFavPlanets(planet)}></i>
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
export default Planets;