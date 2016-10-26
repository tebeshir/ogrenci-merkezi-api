const databaseName = 'ogrenci_merkezi_local';

module.exports = {
    development: {
        client: 'postgresql',
        connection: `postgres://postgres:19yeko07@localhost:5433/${databaseName}`,
        username: 'postgres',
        migrations: {
            directory: __dirname + '/src/server/db/migrations'
        },
        seeds: {
            directory: __dirname + '/src/server/db/seeds'
        }
    },
    test: {
        client: 'postgresql',
        connection: `postgres://postgres:19yeko07@localhost:5433/${databaseName}_test`,
        username: 'postgres',
        migrations: {
            directory: __dirname + '/src/server/db/migrations'
        },
        seeds: {
            directory: __dirname + '/src/server/db/seeds'
        }
    }
};
