import { ApolloClient, InMemoryCache } from "@apollo/client";

let uri;
if (process.env.NODE_ENV === "production") {
  uri = "";
} else {
  uri = "http://localhost:1337/graphql";
}

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
