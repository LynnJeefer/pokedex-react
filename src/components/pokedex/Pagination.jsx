function Pagination({ currentPage, totalPages, onPageChange }) {
	const maxVisibleButtons = 5;

	let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
	let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

	if (endPage - startPage + 1 < maxVisibleButtons) {
		startPage = Math.max(1, endPage - maxVisibleButtons + 1);
	}

	const visiblePages = [];
	for (let i = startPage; i <= endPage; i++) {
		visiblePages.push(i);
	}

	return (
		<div className="pagination">
			<button
				className="pagination__button"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Anterior
			</button>

			{visiblePages.map((page) => (
				<button
					key={page}
					className={`pagination__button ${
						page === currentPage ? 'pagination__button--active' : ''
					}`}
					onClick={() => onPageChange(page)}
				>
					{page}
				</button>
			))}

			<button
				className="pagination__button"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Siguiente
			</button>
		</div>
	);
}

export default Pagination;
