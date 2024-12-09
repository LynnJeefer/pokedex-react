import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { types, useNameContext } from '../contexts/nameContext';
import './../styles/Home.css';
import pokedexImage from './../assets/ttitulo-pokedex.png';
import footerHome from './../assets/home-footer.png';

function Home() {
	const inputRef = useRef();
	const [name, dispatch] = useNameContext();
	const navigate = useNavigate();

	const setName = () => {
		dispatch({
			type: types.SET_NAME,
			payload: inputRef.current.value.trim(),
		});
		inputRef.current.value = '';
		navigate('/pokedex');
	};

	const clearName = () => {
		dispatch({
			type: types.CLEAR_NAME,
		});
	};
	return (
		<div className="home">
			<div className="home__header">
				<img src={pokedexImage} alt="pokedex" />
			</div>
			<div className="home__content">
				<h2 className="home__title">
					¡Hola {name ? <>de nuevo {name}</> : 'Entrenador'}!
				</h2>

				<div>
					{name ? (
						<>
							<p className="home__text">
								Continuemos con tu viaje! Ve a tu{' '}
								<Link className="home__link" to={'/pokedex'}>
									Pokedex
								</Link>
							</p>

							<button className="home__btn btn--radius" onClick={clearName}>
								Salir
							</button>
						</>
					) : (
						<>
							<p>Para poder comenzar, dame tu nombre </p>
							<input
								ref={inputRef}
								type="text"
								placeholder="Tu nombre..."
								className="home__input"
							/>
							<button className="home__btn" onClick={setName}>
								Comenzar
							</button>
						</>
					)}
				</div>
			</div>
			<div className="home__footer"></div>
		</div>
	);
}

export { Home };
