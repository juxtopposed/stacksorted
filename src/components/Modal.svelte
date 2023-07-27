<script lang="ts">
	import { onMount } from 'svelte';

	import type { Category } from '$lib/db';
	import Code from './icons/code.svelte';
	import ExternelLink from './icons/externel-link.svelte';
	import { siteConfig } from '$lib/site-config';

	export let showModal: boolean;
	export let closeModal: () => void;
	export let website: Category;

	let modal: HTMLDialogElement;

	$: if (showModal) modal.showModal();

	onMount(() => {
		modal.addEventListener('keydown', esc);
	});

	function closeModal_() {
		modal.close();
		closeModal();
	}

	// dialog element has built-in close on esc
	// but as we want to call the closeModal function,
	// we need to add the event listener manually
	function esc(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeModal_();
		}
	}
</script>

<dialog
	bind:this={modal}
	class="space-y-4 rounded-xl border border-zinc-600 bg-background p-5 text-text backdrop:bg-black/50 backdrop:backdrop-blur"
>
	<div class="flex w-full items-center justify-between gap-5">
		<h2>
			{#if website}
				<a href={website?.url} rel="ugc" class="hover:text-primary">{website?.name}</a>
			{/if}
		</h2>

		<button
			class="cursor-pointer rounded-md bg-white/20 px-2 py-1 font-medium outline-none transition-colors duration-200 hover:bg-primary hover:text-background"
			on:click={closeModal_}>esc</button
		>
	</div>

	<img
		src={website?.gif ?? website?.image}
		alt={website?.name}
		class="h-full max-h-[600px] w-full max-w-5xl rounded-xl"
	/>

	<div class="flex w-full items-center justify-between gap-5">
		<!-- svelte-ignore missing-declaration -->
		{#if website?.code && website?.code !== null}
			<a
				href={website.code}
				target="_blank"
				rel="ugc"
				class="flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-2 font-medium transition-colors duration-200 hover:bg-primary hover:text-background"
			>
				<span>Check Code</span>

				<svelte:component this={Code} />
			</a>
		{:else}
			<a
				href={siteConfig.links.form}
				target="_blank"
				rel="ugc"
				class="flex items-center gap-2 rounded-md border border-dashed border-zinc-600 bg-black px-2.5 py-2 font-medium transition-colors duration-200 hover:bg-white hover:text-background"
			>
				<span>Add CodePen Link</span>

				<svelte:component this={Code} />
			</a>
		{/if}

		{#if website}
			<a
				href={website?.url}
				target="_blank"
				rel="ugc"
				class="flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-2 font-medium transition-colors duration-200 hover:bg-primary hover:text-background"
			>
				<span>Visit Site</span>

				<svelte:component this={ExternelLink} />
			</a>
		{/if}
	</div>
</dialog>
