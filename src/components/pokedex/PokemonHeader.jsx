import pokedexImage from './../../assets/ttitulo-pokedex.png';
import './../../styles/PokemonHeader.css';

function PokemonHeader() {
	return (
		<div className="pokedex__title">
			<div className="pokedex__title-logo">
				<img src={pokedexImage} alt="Pokedex Logo" />
			</div>
			<div className="pokedex__title-circle">
				<div className="pokeball-outer">
					<div className="pokeball-inner"></div>
				</div>
			</div>
		</div>
	);
}

export default PokemonHeader;
