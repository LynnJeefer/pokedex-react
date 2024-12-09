import axios from 'axios';
import { useState } from 'react';

function useFetch() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const dataFetch = (url) => {
		setLoading(true);
		axios
			.get(url)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err.message))
			.finally();
	};

	return [data, dataFetch, loading, error];
}

export { useFetch };