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
		class="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
	>
		{#each websiteData[category] as website}
			<button
				class="group flex max-w-[375px] cursor-pointer flex-col gap-2.5 rounded-xl border border-zinc-700 bg-background p-2.5 shadow-md shadow-black outline-none transition-all hover:bg-zinc-800 hover:shadow-xl hover:shadow-black"
				on:click={() => openModal(website)}
			>
				<div class="h-full w-full overflow-hidden rounded-md">
					<img
						src={website.image}
						alt={website.name}
						class="h-52 w-80 rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
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
			</button>
		{/each}
	</div>

	<Modal {showModal} {closeModal} {website} />
</main>
