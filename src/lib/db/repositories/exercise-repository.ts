// import { getDB } from '..';
// export const addExercise = async (
// 	name: string,
// 	reps: number,
// 	weight: number,
// 	workoutId: number
// ) => {
// 	const db = await getDB();
// 	await db.sql`INSERT INTO exercise (name, reps, weight, workoutId) VALUES (${name}, ${reps}, ${weight}, ${workoutId})`;
// };

// export const getExercisesByWorkoutId = async (workoutId: number) => {
// 	const db = await getDB();
// 	return await db.sql`SELECT * FROM exercise WHERE workoutId = ${workoutId}`;
// };

// export const workoutWithExercisesJoin = async (workoutId: number) => {
// 	const db = await getDB();
// 	return await db.sql`
// 		SELECT * FROM workout
// 		LEFT JOIN exercise ON workout.id = exercise.workoutId
// 		WHERE workout.id = ${workoutId}
// 	`;
// };

// export const deleteExercise = async (id: number) => {
// 	const db = await getDB();
// 	await db.sql`DELETE FROM exercise WHERE id = ${id}`;
// };
