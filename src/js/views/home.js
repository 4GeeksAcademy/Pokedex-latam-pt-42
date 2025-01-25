import React, { useEffect, useContext } from "react";
import { Context } from "./../store/appContext";
import "../../styles/home.css";

const PokemonCard = ({pokemonId, name }) => {
	return <div class="card mb-3 mx-4 p-2">
	<div class="row g-0">
	  <div class="col-md-4">
		<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} class="img-fluid rounded-start" alt="..."/>
	  </div>
	  <div class="col-md-8">
		<div class="card-body">
		  <h5 class="card-title">{ name.charAt(0).toUpperCase() + name.slice(1) }</h5>
		  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
		  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
		</div>
	  </div>
	</div>
  </div>
}

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPokemons();
	}, [])

	return <div className="text-center mt-5">
		<p>
			<img src={"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"} />
		</p>

		{
			store.pokemones && store.pokemones.map( (pokemon, index) => {
				return <PokemonCard key={index} pokemonId={index + 1} name={pokemon.name} />
			} )
		}

		<button onClick={() => actions.loadMorePokemons()} className="btn btn-success">
			load more
		</button>
	</div>
};
