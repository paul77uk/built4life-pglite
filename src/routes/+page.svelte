<script lang="ts">
	import { goto } from '$app/navigation';
	// import { db, initSchema } from '$lib/db';

	$effect(() => {
		goto('/workouts');
		// (async () => {
		// 	await initSchema();
		// })();
	});
</script>
