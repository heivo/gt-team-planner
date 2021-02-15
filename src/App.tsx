import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import HeroSelectionView from './components/HeroSelectionView';
import { DataContextProvider } from './context/DataContext';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<DataContextProvider>
				<HeroSelectionView />
			</DataContextProvider>
		</QueryClientProvider>
	);
}

export default App;
