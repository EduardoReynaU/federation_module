import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'auten', url: 'https://auten-service-356996092654.us-central1.run.app' },
    { name: 'dashboard', url: 'https://dashboard-service-356996092654.us-central1.run.app' }
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
