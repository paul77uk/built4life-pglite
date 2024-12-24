import { PGlite } from '@electric-sql/pglite';
// import { drizzle } from 'drizzle-orm/pglite';
let dbInstance: PGlite;
// Implement a singleton pattern to make sure we only create one database instance.
export async function getDB() {
	if (dbInstance) {
		return dbInstance;
	}
	const metaDb = new PGlite('idb://b4l-pgl-db');
	// const metaDb = new PGlite('C:/Users/Next.js/AppData/b4l-pgl-db');

	await metaDb.waitReady;
	dbInstance = metaDb;
	console.log('Database ready');
	console.log(metaDb);
	return metaDb;
}

async function initializeDB() {
	return await getDB();
}

export const db = await initializeDB();

// Initialize the database schema.
export const initSchema = async () => {
	console.log('Initializing schema');
	console.log(db);
	await db.exec(`
  CREATE TABLE IF NOT EXISTS workout (
    id SERIAL PRIMARY KEY,
    title TEXT,
		description TEXT
  );
`);
	await db.sql`
	CREATE TABLE IF NOT EXISTS exercise (
		id SERIAL PRIMARY KEY,
		workout_id INTEGER,
		title TEXT,
		FOREIGN KEY(workout_id) REFERENCES workout(id)
	);
`;
};
