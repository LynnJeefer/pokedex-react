import { useRef } from 'react';
import { MdOutlineYoutubeSearchedFor } from 'react-icons/md';
import './../../styles/Search.css';

function Search({ handleSearch }) {
	const inputRef = useRef();

	const onSearch = () => {
		handleSearch(inputRef.current.value.toLowerCase().trim());
		inputRef.current.value = '';
	};

	return (
		<div className="search">
			<div className="search__input">
				<MdOutlineYoutubeSearchedFor className="search__icon" />
				<input type="text" placeholder="Buscar un Pokemon" ref={inputRef} />
			</div>
			<button onClick={onSearch} className="search__btn">
				Buscar
			</button>
		</div>
	);
}

export default Search;
