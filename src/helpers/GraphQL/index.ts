import { GraphQLResult } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";

async function callGraphQL<T>(query: unknown, variables?: Record<string, unknown> | undefined, authToken?: string | undefined): Promise<GraphQLResult<T>> {
  return (await API.graphql(graphqlOperation(query, variables, authToken))) as GraphQLResult<T>
}

export default callGraphQL;