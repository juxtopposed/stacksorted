<script lang="ts">
	export let numSparkles = 50;

	function randomValue(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	let sparkles = Array(numSparkles)
		.fill(null)
		.map(() => ({
			translateX: `${randomValue(-10, 105)}%`,
			translateY: `${randomValue(-30, 100)}%`,
			size: `${randomValue(1, 5)}px`,
			opacity: `${randomValue(0.2, 1)}`,
			animationDelay: `${randomValue(0, 2)}s`
		}));
</script>

{#each sparkles as sparkle}
	<span
		class="sparkle pointer-events-none absolute origin-center rounded-full bg-yellow-300"
		style="
      top: {sparkle.translateY};
      left: {sparkle.translateX};
      width: {sparkle.size};
      height: {sparkle.size};
      opacity: {sparkle.opacity};
      animation-delay: {sparkle.animationDelay};
    "
	/>
{/each}

<style>
	.sparkle {
		animation: sparkle-anim 2s infinite;
	}

	@keyframes sparkle-anim {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}
</style>
