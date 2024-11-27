import pg from 'pg';

// on crée une instance de client et on lui passe l'url de la bdd
const client = new pg.Client(process.env.PG_URL);

// on connecte le client
client.connect();

// export du client
export { client };
