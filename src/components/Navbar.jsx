import { Link } from "react-router-dom";
import starswarslogo from "../assets/img/pngwing.com.png"
import { FavoriteContent } from "../hooks/FavoriteContent";
import { useContext } from "react";

export const Navbar = () => {

	const [favorite, setFavorite] = useContext(FavoriteContent)

	const removeFavorite = (chooseone) => {
		const updateFavorites = favorite.filter((fav) => fav.name !== chooseone.name)
		setFavorite(updateFavorites)
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src={starswarslogo} class="rounded mx-auto d-block logo" alt="..." />
				</Link>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {favorite.length}
						</button>
						<ul class="dropdown-menu me-2">
						{favorite.length === 0 ? (
							<li>No favorites</li>
						) : (
							favorite.map((chooseone, index) =>(
								<li key={index} className="dropdown-item">
									<span className="">{chooseone.name}</span><button className="btn btn-sm btn-danger ms-2"onClick={() => removeFavorite(chooseone)}>
									<i class="fa-solid fa-trash"></i>
									</button>
								</li>
							) )
						)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};