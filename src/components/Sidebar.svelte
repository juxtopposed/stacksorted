<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { websiteData } from '$lib/db';
	import { cn } from '$lib/utils';
	import Sparkle from './Sparkle.svelte';

	const categories = Object.keys(websiteData);
	let path = $page.url.pathname.split('/')[1];
	let activeCategory = categories.includes(path) ? path : categories[0];
	let showSidebar = false;

	function capitalize(str: string) {
		return str
			.split(/-|\s/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	function selectCategory(category: string) {
		activeCategory = category;

		if (window.innerWidth < 640) showSidebar = !showSidebar;

		goto(`/${category}`);
	}
</script>

<aside
	class={cn(
		'fixed bottom-0 right-0 w-full min-w-[250px] flex-col space-y-3 overflow-y-auto rounded-xl p-2.5 sm:relative sm:w-1/6',
		showSidebar && 'max-h-[90vh] border border-zinc-600 bg-background'
	)}
>
	{#each categories as category}
		<button
			class={cn(
				'relative hidden w-full cursor-pointer items-center gap-2.5 rounded-md border border-zinc-700 bg-background px-5 py-3 text-left text-lg font-medium shadow-md shadow-black transition-all duration-200 before:block before:h-3.5 before:w-4 before:rounded-full before:bg-white/20 hover:bg-zinc-800 hover:shadow-lg hover:shadow-black sm:flex',
				activeCategory === category &&
					'flex bg-primary text-background before:bg-background hover:bg-primary hover:brightness-110',
				showSidebar && 'flex'
			)}
			on:click={() => selectCategory(category)}
		>
			<span class="w-full truncate">
				{#if activeCategory === category}
					<Sparkle />
				{/if}

				{capitalize(category)}
			</span>
		</button>
	{/each}
</aside>
