import { getDB } from '..';

export const addWorkout = async (title: string) => {
	const db = await getDB();
	await db.sql`INSERT INTO workout (title) VALUES (${title})`;
};

export const getWorkoutById = async (id: number) => {
	const db = await getDB();
	const workouts = await db.sql`SELECT * FROM workout WHERE id = ${id}`;
	return workouts;
};

export const getWorkouts = async () => {
	const db = await getDB();
	const workouts = await db.sql<Workout[]>`SELECT * FROM workout`;
	return workouts;
};

export const deleteWorkoutById = async (id: number) => {
	const db = await getDB();
	await db.sql`DELETE FROM workout WHERE id = ${id}`;
};

// export const workoutWithExercisesJoin = async (workoutId: number) => {
// 	const db = await getDB();
// 	return await db.sql`
// 		SELECT * FROM workout
// 		LEFT JOIN exercise ON workout.id = exercise.workoutId
// 		WHERE workout.id = ${workoutId}
// 	`;
// };
