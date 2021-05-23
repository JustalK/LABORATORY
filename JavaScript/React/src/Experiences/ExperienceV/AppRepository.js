import { loadQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

// Define a query
export const AppRepository = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
export const preloadedQuery = loadQuery(RelayEnvironment, AppRepository, {
  /* query variables */
});
