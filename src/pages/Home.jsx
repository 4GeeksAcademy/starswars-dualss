
import People from "../components/People.jsx";
import Planets from "../components/Planets.jsx";
import Vehicles from "../components/Vehicles.jsx";

export const Home = () => {


	return (
		<div className="m-4">
			<div className="row">
				<div className="col-2 me-3"> 
					<div id="list-example" class="list-group sidelist"> 
						<a class="list-group-item list-group-item-action" href="#list-item-1">People</a> 
						<a class="list-group-item list-group-item-action" href="#list-item-2">Vehicles</a>
						<a class="list-group-item list-group-item-action" href="#list-item-3">Planets</a>
						{/*Mirar despues Scrollspy para meter las secciones al traer los datos de la api */}
					</div>
				</div>
				<div className="col">
					<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
					<div className="mb-5" id="list-item-1">
						<People />
					</div>
					<div className="mb-5" id="list-item-2">
						<Vehicles />
					</div>
					<div className="mb-5" id="list-item-3">
						<Planets />
					</div>
					</div>
				</div>
			</div>

		</div>
	);
}; 