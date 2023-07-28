<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Modal from '$components/Modal.svelte';
	import Code from '$components/icons/code.svelte';
	import ExternelLink from '$components/icons/externel-link.svelte';
	import { websiteData, type Category } from '$lib/db';

	$: [category, site] = $page.url.pathname.split('/').slice(1);
	let showModal = false;
	let website: Category;

	let cards: HTMLDivElement;
	let cardArray: HTMLButtonElement[] = [];

	onMount(() => {
		if (site) {
			const website = websiteData[category].find(
				(w) => w.name.toLowerCase().replace(/\s/g, '-') === site
			);

			if (website) {
				openModal(website);
			} else {
				goto(`/${category}`);
			}
		}

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

	function openModal(website_: Category) {
		showModal = true;
		website = website_;
		history.pushState(null, '', `/${category}/${website.name.toLowerCase().replace(/\s/g, '-')}`);
	}

	function closeModal() {
		showModal = false;
		history.pushState(null, '', `/${category}`);
	}
</script>

<main class="w-full py-2.5 sm:w-[85%]">
	<div
		bind:this={cards}
		class="cards grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
	>
		{#each websiteData[category] as website, i (website.name)}
			<button
				bind:this={cardArray[i]}
				on:click={() => openModal(website)}
				class="card group relative h-72 w-full max-w-[375px] rounded-xl bg-zinc-700 shadow-md shadow-black outline-none before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-xl after:opacity-0 after:transition-opacity after:duration-500 hover:shadow-xl hover:shadow-black hover:before:opacity-100"
			>
				<div
					class="absolute inset-[1px] z-[2] flex flex-col gap-2.5 rounded-xl bg-background p-2.5"
				>
					<div class="h-full w-full overflow-hidden rounded-md">
						<img
							src={website.image}
							alt={website.name}
							class="h-full w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>

					<div class="flex w-full items-center justify-between gap-5">
						<h2 class="font-medium hover:text-primary">{website.name}</h2>

						<div class="flex items-center justify-end gap-2.5">
							{#if website.code && website.code !== null}
								<a
									href={website.code}
									target="_blank"
									rel="ugc"
									aria-label="{website.name} code"
									class="rounded bg-white/10 px-2 py-1 font-medium transition-colors duration-200 hover:bg-primary hover:text-background"
									on:click|stopPropagation
								>
									<svelte:component this={Code} />
								</a>
							{/if}

							<a
								href={website.url}
								target="_blank"
								rel="ugc"
								aria-label="{website.name} website"
								class="rounded bg-white/10 px-2 py-1 font-medium transition-colors duration-200 hover:bg-primary hover:text-background"
								on:click|stopPropagation
							>
								<svelte:component this={ExternelLink} />
							</a>
						</div>
					</div>
				</div>
			</button>
		{/each}
	</div>

	<Modal {showModal} {closeModal} {website} />
</main>

<style>
	.cards:hover > .card::after {
		opacity: 1;
	}

	.card::before {
		background: radial-gradient(
			800px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.06),
			transparent 40%
		);
		z-index: 3;
	}

	.card::after {
		background: radial-gradient(
			600px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.4),
			transparent 40%
		);
		z-index: 1;
	}
</style>
