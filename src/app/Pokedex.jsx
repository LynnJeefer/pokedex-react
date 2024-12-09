import { Link } from 'react-router-dom';
import Search from '../components/pokedex/Search';
import Filters from '../components/pokedex/Filters';
import { useFetch } from '../hooks/UseFetch';
import { useEffect, useState } from 'react';
import { useNameContext } from '../contexts/nameContext';

import PokemonCard from '../components/pokedex/PokemonCard';
import PokemontList from '../components/pokedex/PokemontList';
import './../styles/Pokedex.css';
import PokemonHeader from '../components/pokedex/PokemonHeader';

function Pokedex() {
	const [name] = useNameContext();
	const [pokemons, setPokemons] = useFetch();
	const [pokemonUrl, setPokemonUrl] = useState(null);
	const [isFiltering, setIsFiltering] = useState(false);

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 12;

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = () => {
		setPokemons('https://pokeapi.co/api/v2/pokemon');
	};

	const handleSearch = (value) => {
		if (!value) {
			setIsFiltering(false);
			setPokemonUrl(null);
			getPokemons();
		} else {
			value = value.toLowerCase().trim();
			setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${value}`);
		}
	};

	const handleTypeFilter = (type) => {
		if (!type) {
			setIsFiltering(false);
			setPokemons('https://pokeapi.co/api/v2/pokemon');
		} else {
			setIsFiltering(true);
			setPokemons(`https://pokeapi.co/api/v2/type/${type}`);
		}
		setCurrentPage(1);
	};

	const onNext = () => {
		setPokemons(pokemons?.next);
	};
	const onPrev = () => {
		setPokemons(pokemons?.previous);
	};

	const pokemonsArray = isFiltering ? pokemons?.pokemon : pokemons?.results;
	const totalItems = pokemonsArray?.length || 0;
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const paginatedPokemons = pokemonsArray?.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	return (
		<div className="pokedex">
			<PokemonHeader />
			<div className="pokedex__container">
				<Link to="/" className="pokedex__link">
					Volver
				</Link>
				<div className="pokedex__header">
					<p>
						{' '}
						<span>Bienvenido {name},</span> Aqui podras encontrar tu pokemon
						favorito
					</p>
				</div>

				<div className="pokedex__form">
					<Search handleSearch={handleSearch} />
					<Filters handleTypeFilter={handleTypeFilter} />
				</div>

				<div className="pokedex__cards">
					{pokemonUrl ? (
						<PokemonCard url={pokemonUrl} />
					) : (
						<PokemontList pokemons={pokemonsArray} isFiltering={isFiltering} />
					)}
				</div>

				<div className="pokedex__buttons">
					<button
						className="pokedex__button"
						onClick={onPrev}
						disabled={!pokemons?.previous}
					>
						Anterior
					</button>
					<button
						className="pokedex__button"
						onClick={onNext}
						disabled={!pokemons?.next}
					>
						Siguiente
					</button>
				</div>
			</div>
		</div>
	);
}

export { Pokedex };
