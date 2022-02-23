import { ApolloClient, InMemoryCache } from '@apollo/client';
import config from '../../next.config';

const client = new ApolloClient({
    uri: `${config.env.API_URL}graphql`,
    cache: new InMemoryCache()
})

export default client;