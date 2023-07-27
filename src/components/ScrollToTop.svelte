<script>
	import { onMount } from 'svelte';
	import ArrowUp from './icons/arrow-up.svelte';

	let showButton = false;

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleScroll = () => {
		showButton = window.scrollY > 100;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if showButton}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:click={scrollToTop}
		on:keydown={scrollToTop}
		class="fixed bottom-20 right-5 cursor-pointer rounded-md border border-zinc-600 bg-zinc-800 p-1 shadow-md shadow-black hover:bg-zinc-700 hover:shadow-lg hover:shadow-black sm:bottom-5"
	>
		<svelte:component this={ArrowUp} />
	</div>
{/if}
