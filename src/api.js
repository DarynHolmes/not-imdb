import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql/',
  }),
});

function searchByTitle(term) {
    return client.query({
        query: gql`
            query Films { 
                films(searchTerm: "${term}") {
                    id
                    title
                    thumbnail
                    poster
                        reviews {
                            id
                            author
                            content
                            url
                            filmId
                        }
                }
            }
        `,
    });
 
}




export default {
    searchByTitle
}