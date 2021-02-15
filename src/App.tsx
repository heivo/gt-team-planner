import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainView from './components/MainView';
import { DataContextProvider } from './context/DataContext';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<DataContextProvider>
				<MainView />
			</DataContextProvider>
		</QueryClientProvider>
	);
}

export default App;
