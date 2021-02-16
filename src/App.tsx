import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainView from './components/MainView';
import { DataContextProvider } from './context/DataContext';
import { StateContextProvider } from './context/StateContext';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<DataContextProvider>
				<StateContextProvider>
					<MainView />
				</StateContextProvider>
			</DataContextProvider>
		</QueryClientProvider>
	);
}

export default App;
