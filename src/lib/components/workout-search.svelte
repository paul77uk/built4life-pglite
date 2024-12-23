<script lang="ts">
	import { workoutWithExercisesStore } from '$lib/stores/workout-with-exercise-store.svelte';
	import Input from './ui/input/input.svelte';
	import workoutData from '$lib/json-data/workouts.json';
	import Icon from '@iconify/svelte';

	let searchInput: string = $state('');

	const search = () => {
		workoutWithExercisesStore().workoutWithExercises = workoutData.filter((workout) => {
			return workout.title.toLowerCase().includes(searchInput.toLowerCase());
		});
	};
</script>

<div class="relative mx-auto mt-6 flex w-fit">
	<Icon
		icon="mingcute:search-line"
		class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
	/>
	<Input
		type="search"
		placeholder="Search workouts..."
		bind:value={searchInput}
		oninput={search}
		class="pl-8 text-sm"
	></Input>
</div>
