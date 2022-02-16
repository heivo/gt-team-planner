import { GraphQLClient } from 'graphql-request';
import invariant from 'tiny-invariant';

const url = process.env.CONTENTFUL_URL;
const authToken = process.env.CONTENTFUL_AUTH_TOKEN;

invariant(url, 'the env variable CONTENTFUL_URL is missing');
invariant(authToken, 'the env variable CONTENTFUL_AUTH_TOKEN is missing');

export default new GraphQLClient(url, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  },
});
