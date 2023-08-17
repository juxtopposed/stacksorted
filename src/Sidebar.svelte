<script>
  import { navigate } from "svelte-routing";
  import { websiteData } from "./database";

  const categories = Object.keys(websiteData.categories);
  let path = window.location.pathname.split("/")[1];
  let activeCategory = categories.includes(path) ? path : categories[0];

  let optionButtons = [];
  let showButtons = false;

  function capitalize(str) {
    return str
      .split(/-|\s/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function selectCategory(category) {
    activeCategory = category;
    navigate(`/${category}`);
  }

  function handlePopstate() {
    path = window.location.pathname.split("/")[1];
    activeCategory = categories.includes(path) ? path : categories[0];
  };
</script>

<svelte:window
  on:resize={() => (showButtons = false)}
  on:popstate={handlePopstate}
/>

<aside
  on:click={() => (showButtons = !showButtons)}
  on:keydown={() => (showButtons = !showButtons)}
>
  {#each categories as category, index}
    <button
      class="option"
      class:active={activeCategory === category}
	  aria-selected={window.URL.pathname === category}
      class:show={showButtons}
      on:click={() => selectCategory(category)}
      on:keydown={() => selectCategory(category)}
      bind:this={optionButtons[index]}
    >
      {capitalize(category)}
    </button>
  {/each}
</aside>