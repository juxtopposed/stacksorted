<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { websiteData } from '$lib/db';

	const categories = Object.keys(websiteData);
	const defaultCategory = categories[0];

	onMount(() => {
		const currentCategory = $page.url.pathname.split('/')[1];

		if (!categories.includes(currentCategory)) {
			goto(`/${defaultCategory}`);
		}
	});
</script>
