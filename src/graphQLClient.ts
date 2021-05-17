import { GraphQLClient } from 'graphql-request';

export default new GraphQLClient(process.env.RAZZLE_GQL_ENDPOINT ?? '', {
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${process.env.RAZZLE_API_TOKEN}`,
	},
});
