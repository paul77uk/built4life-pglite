let workoutWithExercises: WorkoutWithExercises[] = $state([{
	title: '',
	exercises: []
}]);

export const workoutWithExercisesStore = () => {
	return {
		get workoutWithExercises() {
			return workoutWithExercises;
		},
		set workoutWithExercises(value: WorkoutWithExercises[]) {
			workoutWithExercises = value;
		}
	};
};
