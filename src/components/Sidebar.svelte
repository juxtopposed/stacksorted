<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { websiteData } from '$lib/db';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import Sparkle from './Sparkle.svelte';

	const categories = Object.keys(websiteData);
	let path = $page.url.pathname.split('/')[1];
	let activeCategory = categories.includes(path) ? path : categories[0];
	let showSidebar = false;

	let cards: HTMLElement;
	let cardArray: HTMLButtonElement[] = [];

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

	onMount(() => {
		cards.onmousemove = (e) => {
			for (const card of cardArray) {
				const rect = card.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top;

				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`);
			}
		};
	});
</script>

<aside
	bind:this={cards}
	class={cn(
		'cards fixed bottom-0 right-0 w-full min-w-[250px] flex-col space-y-3 overflow-y-auto overflow-x-hidden rounded-xl p-2.5 sm:relative sm:w-1/6',
		showSidebar && 'max-h-[90vh] border border-zinc-600 bg-background'
	)}
>
	{#each categories as category, i (category)}
		<button
			bind:this={cardArray[i]}
			class={cn(
				'card relative hidden h-14 w-full rounded-md bg-zinc-700 text-left text-lg font-medium shadow-md shadow-black outline-none before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-xl after:opacity-0 after:transition-opacity after:duration-500 hover:shadow-xl hover:shadow-black hover:before:opacity-100 sm:block',
				showSidebar && 'flex'
			)}
			on:click={() => selectCategory(category)}
		>
			<div
				class={cn(
					'absolute inset-[1px] z-[2] flex items-center gap-2.5 rounded-md bg-background px-5 before:block before:h-3.5 before:w-4 before:rounded-full before:bg-white/20',
					activeCategory === category &&
						'bg-primary text-background before:bg-background hover:bg-primary hover:brightness-110'
				)}
			>
				{#if activeCategory === category}
					<Sparkle />
				{/if}

				<span class="w-full truncate">
					{capitalize(category)}
				</span>
			</div>
		</button>
	{/each}
</aside>

<style>
	.cards:hover > .card::after {
		opacity: 1;
	}

	.card::before {
		background: radial-gradient(
			400px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.06),
			transparent 40%
		);
		z-index: 3;
	}

	.card::after {
		background: radial-gradient(
			300px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.4),
			transparent 40%
		);
		z-index: 1;
	}
</style>
