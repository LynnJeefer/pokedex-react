import { Link, useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { tipos } from '../utils/helpers';
import './../styles/Details.css';
import PokemonHeader from '../components/pokedex/PokemonHeader';
import useFetch from '../hooks/useFetch';

function Details() {
	const params = useParams();
	const [pokemon, setPokemon] = useFetch();

	useEffect(() => {
		if (params.name) getPokemon();
	}, [params.name]);

	const getPokemon = () => {
		setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
	};

	const types = pokemon?.types.map((type) => type.type.name);

	const translateStatName = (name) => {
		const translations = {
			hp: 'Puntos de salud',
			attack: 'Ataque',
			defense: 'Defensa',
			'special-attack': 'Ataque especial',
			'special-defense': 'Defensa especial',
			speed: 'Velocidad',
		};

		return translations[name] || name;
	};

	return (
		<div>
			<PokemonHeader />
			<div className="details">
				<Link to="/pokedex" className="details__back-link">
					Volver
				</Link>
				<div className={`details__card type--${types?.[0]}`}>
					<div className="details__header">
						<img
							src={pokemon?.sprites?.other?.dream_world?.front_default}
							alt={pokemon?.name}
							className="details__image"
						/>
					</div>
					<div className="details__body">
						<span className="details__id">
							#{pokemon?.id?.toString().padStart(3, '0')}
						</span>
						<h2 className="details__name">{pokemon?.name}</h2>

						<div className="details__metrics">
							<span className="details__metric">
								<span className="details__metric-label">Peso</span>
								{pokemon?.weight}
							</span>
							<span className="details__metric">
								<span className="details__metric-label">Altura</span>
								{pokemon?.height}
							</span>
						</div>

						<div className="details__types-skills">
							<div className="details__types-container">
								<h3 className="details__section-title">Tipo</h3>
								<div className="details__types">
									{types?.map((type) => (
										<span className={`details__type type--${type}`} key={type}>
											{tipos[type]}
										</span>
									))}
								</div>
							</div>
							<div className="details__skills-container">
								<h3 className="details__section-title">Habilidades</h3>
								<div className="details__skills">
									{pokemon?.abilities?.map((data) => (
										<span key={data.ability.name} className="details__skill">
											{data.ability.name}
										</span>
									))}
								</div>
							</div>
						</div>

						<div className="details__stats">
							<h3 className="details__section-title">Estadísticas</h3>
							{pokemon?.stats?.map((stat) => (
								<div key={stat.stat.name} className="details__stat">
									<span>{translateStatName(stat.stat.name)}</span>
									<div className="details__stat-bar">
										<div
											className="details__stat-fill"
											style={{
												width: `${(stat.base_stat / 150) * 100}%`,
											}}
										></div>
									</div>
									<span>{stat.base_stat}/150</span>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="details__movements">
					<h3 className="details__section-title">Movements</h3>
					<div className="details__movement-list">
						{pokemon?.moves?.map((move) => (
							<span key={move.move.name} className="details__movement">
								{move.move.name.replace('-', ' ')}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export { Details };
