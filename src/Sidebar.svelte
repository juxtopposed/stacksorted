<script>
  import { websiteData } from "./database";

  const categories = Object.keys(websiteData.categories);

  function capitalize(str) {
    return str
      .split(/-|\s/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const isActiveCategory = (category) => {
	  return window.location.pathname.split("/")[1] === category
  }
</script>

<aside>
  {#each categories as category}
    <a
	  href={`/${category}`}
      class="option"
      class:active={isActiveCategory(category)}
    >
      {capitalize(category)}
    </a>
  {/each}
</aside>
