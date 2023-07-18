<script>
  import { navigate } from 'svelte-routing';
  import { websiteData } from './database';

  let activeCategory = 'buttons';

  function selectCategory(category) {
    activeCategory = category;
    navigate(`/${category}`);
  }

  const categories = Object.keys(websiteData.categories);

  const path = window.location.pathname.replace('/', '');
  activeCategory = categories.includes(path) ? path : categories[0];

  window.addEventListener('popstate', () => {
    const path = window.location.pathname.replace('/', '');
    activeCategory = categories.includes(path) ? path : categories[0];
  });

  function capitalize(str) {
    return str
      .split(/(?=[A-Z])/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  let displayOptions = false;

  function toggleOptions() {
    if (window.innerWidth <= 660) {
      displayOptions = !displayOptions;

      const buttons = document.querySelectorAll('.option');

      buttons.forEach((button) => {
        if (!button.classList.contains('active')) {
          button.style.display = displayOptions ? 'flex' : 'none';
        }
      });
    }
  }
  
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<aside on:click={toggleOptions}>
  {#each categories as category}
    <button
      class="option"
      class:active={activeCategory === category}
      on:click={() => selectCategory(category)}
    >
    {capitalize(category)}
    </button>
  {/each}
</aside>
