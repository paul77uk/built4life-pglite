type Workout = {
  id?: number;
  title: string;
};

type Exercise = {
  id?: number;
  name: string;
  reps: number;
  weight: number;
  workoutId?: number;
};

type WorkoutWithExercises = {
  id?: number;
  title: string;
  description?: string;
  exercises: Exercise[];
};