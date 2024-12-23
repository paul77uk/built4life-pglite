<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { db } from '$lib/db';
	// import { export_to_json, onChange } from '$lib/stores/file-transfer-store.svelte';
	// import { exerciseStore, saveExercise } from '$lib/stores/my-exercises-store.svelte';
	import {
		getAllWorkouts,
		getFilteredWorkouts,
		saveWorkout,
		workoutStore
	} from '$lib/stores/my-workouts-store.svelte';

	import WorkoutCard from '../../lib/components/workout-card.svelte';

	// let json: Array<string> | undefined | null = $state();

	// async function onChange(e: Event) {
	// 	const target = e.target as HTMLInputElement;
	// 	if (target == null || target.files == null) {
	// 		json = null;
	// 		return;
	// 	}
	// 	const file = target.files[0];
	// 	if (file == null) {
	// 		json = null;
	// 		return;
	// 	}

	// 	json = (await readJsonFile(file)) as Array<string> | null | undefined;
	// 	// save json to workout db table
	// 	json?.forEach(async (workout: any) => {
	// 		const workoutData = await saveWorkout(workout.title);
	// 		workout.exercises.forEach((exercise: any) => {
	// 			if (workoutData) saveExercise(exercise.name, exercise.reps, exercise.weight, workoutData);
	// 		});
	// 	});
	// }

	// function readJsonFile(file: File) {
	// 	const reader = new FileReader();
	// 	return new Promise((resolve, reject) => {
	// 		reader.onload = () => {
	// 			if (typeof reader.result === 'string') {
	// 				resolve(JSON.parse(reader.result));
	// 			} else {
	// 				reject(new Error('File content is not a string'));
	// 			}
	// 		};
	// 		reader.onerror = reject;
	// 		reader.readAsText(file);
	// 	});
	// }

	// const export_to_json = async () => {
	// 	const data = workoutStore().workouts.map((workout) => {
	// 		if (workout.id) getExercises(workout.id);
	// 		return {
	// 			title: workout.title,
	// 			exercises: exerciseStore().exercises
	// 		};
	// 	});

	// 	const json = JSON.stringify(data);
	// 	const blob = new Blob([json], { type: 'application/json' });
	// 	const url = URL.createObjectURL(blob);
	// 	const a = document.createElement('a');
	// 	a.href = url;
	// 	a.download = 'workouts.json';
	// 	document.body.appendChild(a);
	// 	a.click();
	// 	setTimeout(() => {
	// 		document.body.removeChild(a);
	// 		window.URL.revokeObjectURL(url);
	// 	}, 0);
	// };
	// let input = $state('');

	// $effect(() => {
	// 	(async () => {
	// 		await getAllWorkouts();
	// 	})();
	// });
	let input = $state('');
	let workouts: Workout[] = $state([]);

	const insertWorkout = async () => {
		await db.sql`INSERT INTO workout (title) VALUES (${input})`;
		input = '';
	};

	const getWorkouts = async () => {
		workouts = (await db.sql<Workout[]>`SELECT * FROM workout`).rows.flat();
		console.log('test', workouts);
	};
</script>

<input
	type="text"
	placeholder="Enter workout title"
	class="w-1/2 rounded-md border border-gray-300 p-2"
	bind:value={input}
/>

<Button variant="outline" onclick={insertWorkout}>Add workout</Button>

<Button variant="outline" onclick={getWorkouts}>Get workouts</Button>

{#each workouts as workout (workout.id)}
	<p>{workout.title}</p>
{/each}

<!-- <div class="mt-5 flex items-center justify-center gap-3">
	<Button variant="outline" onclick={export_to_json}>Download all workouts</Button>
	<Button variant="outline"
		><Label for="input" class="cursor-pointer">Upload workouts</Label></Button
	>
	<Input id="input" class="hidden w-28" type="file" onchange={onChange} accept=".json" />
</div> -->

<div class="m-3">
	<!-- <div class="flex flex-wrap justify-center"> -->
	<!-- <input
		type="search"
		placeholder="Search"
		class="w-1/2 rounded-md border border-gray-300 p-2"
		bind:value={input}
		oninput={() => getFilteredWorkouts(input)}
	/> -->
	<div>
		<!-- {#each workoutStore().workouts as workout (workout.id)} -->

		<!-- <p>{workout.title}</p> -->

		<!-- <WorkoutCard {workout} /> -->

		<!-- {/each} -->
	</div>
</div>
