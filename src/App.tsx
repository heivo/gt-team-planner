import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainView from './components/MainView';
import { DataContextProvider } from './context/DataContext';
import { StateContextProvider } from './context/StateContext';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchInterval: -1,
				refetchIntervalInBackground: false,
				refetchOnReconnect: false,
				refetchOnMount: false
			},
		},
	});

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
