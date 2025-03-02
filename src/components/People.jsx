import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { FavoriteContent } from "../hooks/FavoriteContent";

const People = () => {
    const [people, setPeople] = useState([])
    const [favorite, setFavorite] = useContext(FavoriteContent)
    const getPeople = async () => {
        const response = await fetch("https://swapi.tech/api/people")
        const data = await response.json()
        console.log(data)
        setPeople(data.results)
        console.log(people)
    }
//Hacer el card con dos botones, uno el de favoritos otro el del Collapse para lo que seria la descripcion, el card base es imagen arriba, nombre y abajo botones
    useEffect(() => {
        getPeople()
    }, [])
    const addFavPeople = (person) => {
        if (!favorite.some((fav) => fav.name === person.name)){
            setFavorite([...favorite, person]);
        }
    }

    return (
        <>
        <h1>PEOPLE</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {people.map((person, index) => (
                    <div key={index} className="col-md-3 me-3">
                        <div className="card mt-1 cardEdit" style={{ height: "auto", minHeight: "23rem", width: "20rem"}}>
                            <img src="https://www.viapais.com.ar/resizer/v2/2Y3ZYEELEFAGFDOG2EOKF6WCLA.jpg?auth=13c87dc07a6e76eab8d5ea146a61476b49fceecdddf7fc973433fb10273c6a0e&width=2896&height=2896" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mb-5">{person.name}</h5>
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
                                    <i className="fa-regular fa-star ms-auto p-2 bd-highlight" onClick={() =>addFavPeople(person)}></i>
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
export default People;