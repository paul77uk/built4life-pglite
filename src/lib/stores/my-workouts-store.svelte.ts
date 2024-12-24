import { getDB } from '$lib/db';
import {
	addWorkout,
	deleteWorkoutById,
	getWorkoutById,
	getWorkouts
	// workoutWithExercisesJoin
} from '$lib/db/repositories/workout-repository';

let workouts: Workout[] = $state([]);

export const saveWorkout = async (title: string) => {
	const workout = await addWorkout(title);
	getAllWorkouts();
	return workout;
};

export const getWorkout = async (id: number) => {
	const workout = await getWorkoutById(id);
	return workout;
};

export const getAllWorkouts = async () => {
	const result = await getWorkouts();
	workouts = result.rows.flat();
	console.log('test', workouts);
};

export const deleteWorkout = async (id: number) => {
	await deleteWorkoutById(id);
	getAllWorkouts();
};

// export const getWorkoutWithExercises = async (workoutId: number) => {
// 	const workoutWithExercises = await workoutWithExercisesJoin(workoutId);
// 	workouts = workoutWithExercises;
// };

export const getFilteredWorkouts = async (filter: string) => {
	const db = await getDB();
	const result = await db.sql`SELECT * FROM workout WHERE title ILIKE ${`%${filter}%`}`;
	workouts = result.rows as Workout[];
};

const workoutStore = () => {
	return {
		get workouts() {
			return workouts;
		},
		set workouts(value: Workout[]) {
			workouts = value;
		}
	};
};

export { workoutStore };
