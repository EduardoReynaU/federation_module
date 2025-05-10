import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'auth', url: 'https://auth-service-<YOUR_PROJECT>.a.run.app/graphql' },
    // Aquí irán más servicios en el futuro
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false // Federation no soporta subscriptions aún
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Gateway corriendo en ${url}`);
});
