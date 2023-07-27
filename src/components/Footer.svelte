<script>
	import { siteConfig } from '$lib/site-config';
</script>

<main
	class="flex w-full flex-wrap justify-between border-t border-zinc-600 py-5 text-sm font-light"
>
	<p class="w-[10%] text-sm">
		<span class="text-base font-medium">What is Stack Sorted?</span>
		<br />
		It's an open-source, open-to-contribution project that categorizes websites, not by general design
		or topic but specific elements.
	</p>

	<p>
		Made by <a href={siteConfig.links.twitter} target="_blank">Juxtopposed</a>
	</p>

	<p>
		<a href={siteConfig.links.db} target="_blank">Add your own sites</a>
	</p>

	<p>
		<a href={siteConfig.links.github} target="_blank">Edit this on GitHub</a>
	</p>

	<p>
		<a href={siteConfig.links.kofi}>Support this project</a>
	</p>

	<p>
		<a
			href="https://twitter.com/intent/tweet?text=Check%20out%20Stack%20Sorted:%20stacksorted.com%20-%20You%20can%20find%20inspiration%20for%20design%20elements."
			target="_blank"
		>
			Tweet about this
		</a>
	</p>
</main>

<style lang="postcss">
	p {
		@apply h-fit;
	}

	a {
		@apply border-b border-white pb-1 text-sm transition duration-200 hover:border-b-2 hover:border-primary hover:text-primary;
	}
</style>
