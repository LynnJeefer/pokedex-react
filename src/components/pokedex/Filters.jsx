import { useEffect, useRef } from 'react';
import { useFetch } from '../../hooks/UseFetch';
import { tipos } from '../../utils/helpers';
import './../../styles/Filters.css';

function Filters({ handleTypeFilter }) {
	const [types, setTypes] = useFetch();
	const selectRef = useRef();

	useEffect(() => {
		getTypes();
	}, []);

	const getTypes = () => {
		setTypes('https://pokeapi.co/api/v2/type');
	};

	return (
		<div className="select">
			<select
				className="select__input"
				ref={selectRef}
				onChange={() => handleTypeFilter(selectRef.current.value)}
			>
				<option value="">Todos los tipos</option>
				{types?.results?.map((type) => {
					return (
						<option key={type.name} value={type.name}>
							{tipos[type.name]}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export default Filters;
