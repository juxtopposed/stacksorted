<script lang="ts">
	import { siteConfig } from '$lib/site-config';
	import Sparkle from './Sparkle.svelte';
	import LogoMobile from './icons/logo-mobile.svelte';
	import Logo from './icons/logo.svelte';
</script>

<main class="flex flex-col items-center justify-start">
	<nav class="mb-8 flex w-full items-center justify-between md:px-6">
		<svelte:component this={Logo} />
		<svelte:component this={LogoMobile} />

		<div class="flex items-center justify-end gap-4 font-medium">
			<span class="note hidden rounded-full bg-primary p-2 text-sm text-background sm:block">
				Collection updating every 24h. Join in!
			</span>

			<a
				href={siteConfig.links.form}
				target="_blank"
				class="rounded-md border border-zinc-600 bg-white/10 px-3 py-1 shadow-md shadow-black ring-white ring-offset-2 ring-offset-background transition-all duration-200 hover:bg-white hover:text-background hover:ring-2 sm:px-3.5 sm:py-2"
			>
				Add a Site
			</a>
		</div>
	</nav>

	<h1
		class="relative my-6 inline-block text-center font-space-grotesk text-2xl text-primary md:text-4xl"
	>
		<Sparkle />
		Find Inspiration in Design Elements.
	</h1>

	<p class="my-4 text-center md:text-lg">
		Collection of the web's best designs sorted by elements. Choose an element and view
		projects/websites with creative designs for it.
	</p>
</main>

<style>
	.note {
		animation: alert 2s infinite linear;
	}

	@keyframes alert {
		0% {
			box-shadow: 0 0 0 0px #daed6e33;
		}
		80% {
			box-shadow: 0 0 0 8px #daed6e33, 0 0 0 5px #daed6e33;
		}
		100% {
			box-shadow: 0 0 0 8px #daed6e00, 0 0 0 10px #daed6e00;
		}
	}
</style>
