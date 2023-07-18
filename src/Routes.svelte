<script>
  import { Router, Route } from 'svelte-routing';
  import Category from './Category.svelte';
  import { websiteData } from './database';

  const categories = Object.keys(websiteData.categories);
  const defaultCategory = categories[0];

  const routes = categories.map((category) => ({
    path: `/${category}`,
    component: Category,
    props: { category },
  }));

  $: if (!window.location.pathname.startsWith('/')) {
    window.location.href = `/${defaultCategory}`;
  }

  import { onMount } from 'svelte';

  onMount(() => {
    const currentCategory = window.location.pathname.split('/')[1];
    if (!categories.includes(currentCategory)) {
      window.location.href = `/${defaultCategory}`;
    }
  });
</script>

<Router>
  {#each routes as { path, component, props }}
    <Route path={path} component={component} {...props} />
  {/each}
</Router>



