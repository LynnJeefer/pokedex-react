import { StrictMode } from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import AppRouter from './routes/AppRouter';
import { NameProvider } from './contexts/nameContext';

createRoot(document.getElementById('root')).render(
	<NameProvider>
		<HashRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			}}
		>
			<AppRouter />
		</HashRouter>
		,
	</NameProvider>,
);
