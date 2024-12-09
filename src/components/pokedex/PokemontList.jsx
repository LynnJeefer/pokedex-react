import PokemonCard from './PokemonCard';

function PokemontList({ pokemons, isFiltering }) {
	return (
		<>
			{pokemons?.map((pokemon, index) => {
				const pokemonUrl = isFiltering ? pokemon.pokemon.url : pokemon.url;
				const pokemonName = isFiltering ? pokemon.pokemon.name : pokemon.name;
				return <PokemonCard key={`${pokemonName}-${index}`} url={pokemonUrl} />;
			})}
		</>
	);
}

export default PokemontList;
