import { LinksFunction } from '@remix-run/server-runtime';
import MainView from '~/components/MainView';
import { StateContextProvider } from '~/StateContext';
import styles from '../style.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function Index() {
  return (
    <StateContextProvider>
      <MainView />
    </StateContextProvider>
  );
}
