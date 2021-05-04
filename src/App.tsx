import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainView from './components/MainView';
import { DataContextProvider } from './context/DataContext';
import { StateContextProvider } from './context/StateContext';
import { Route } from 'react-router-dom';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchInterval: -1,
				refetchIntervalInBackground: false,
				refetchOnReconnect: false,
				refetchOnMount: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<DataContextProvider>
				<Route path={['/:slug', '/']}>
					<StateContextProvider>
						<MainView />
					</StateContextProvider>
				</Route>
			</DataContextProvider>
		</QueryClientProvider>
	);
}

export default App;
