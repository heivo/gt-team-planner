import { useEffect } from 'react';
import { useParams } from 'react-router';
import invariant from 'tiny-invariant';
import MainView from '~/components/MainView';
import { decode } from 'universal-base64';

export default function EncodedState() {
  /* const { encodedState } = useParams<'encodedState'>();
  invariant(encodedState, 'URL paramter with encoded state is missing');
  useEffect(() => {
    const decoded = decode(encodedState);
    console.log(decoded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */
  return <MainView />;
}
