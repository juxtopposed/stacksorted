<script>
    export let category;
    import { websiteData } from './database';
    import Modal from './Modal.svelte';
    import {onMount} from 'svelte';

    onMount(() => {
      const pathParts = window.location.pathname.split('/');
      if (pathParts.length === 3) {
        const [category, siteNameFromURL] = pathParts.slice(1);
        const website = websites.find((site) => site.name.toLowerCase().replace(/\s/g, '-') === siteNameFromURL);
        if (website) {
          showOverlay(website);
        }
      }

      window.addEventListener('popstate', handlePopState);
    });

    function handlePopState() {
      closeOverlay();
      history.pushState(null, null, `/${category}`);
    }
    
      const websites = websiteData.categories[category] || [];
      let overlayVisible = false;
      let currentWebsite = {};
    
      function showOverlay(website) {
      currentWebsite = website;
      overlayVisible = true;

      const siteName = currentWebsite.name.toLowerCase().replace(/\s/g, '-');
      history.pushState(null, null, `/${category}/${siteName}`);
    }
    
  
    function closeOverlay() {
      overlayVisible = false;
      history.pushState(null, null, `/${category}`);
    }

    function nextModal(){
      const index = websites.indexOf(currentWebsite);
      const nextIndex = index + 1;
      if (nextIndex < websites.length) {
        showOverlay(websites[nextIndex]);
      }
    }
    
    function prevModal (){
      const index = websites.indexOf(currentWebsite);
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        showOverlay(websites[prevIndex]);
      }
    }
    
    
</script>
  
<main>
    <div class="main-grid">
      {#each websites as website}
        <button class="website-card" on:click={() => showOverlay(website)}>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img src={website.image} alt={website.name} class="website-image"/>
          <div class="card-info">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h2>{website.name}</h2>
            <div class="outbound-cont">
                {#if website.code && website.code !== null}
                    <a href="{website.code}" aria-label="{website.name} code" rel="ugc" target="_blank" class="outbound code-link" on:click|stopPropagation>
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="30" height="29" rx="3" fill="transparent"/>
                          <path d="M19 7L26 14L19 21" stroke="white"/>
                          <path d="M12 21L5 14L12 7" stroke="white"/>
                        </svg>                   
                    </a>
                {/if}


                <a href="{website.url}" aria-label="{website.name} site" rel="ugc" target="_blank" class="outbound" on:click|stopPropagation>
                  <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="30" height="29" rx="3" fill="transparent"/>
                      <path d="M10.454 7.36396H23.182V20.0919" stroke="white"/>
                      <path d="M23 7.54596L9 21.546" stroke="white"/>
                  </svg>
                </a>
            </div>
          </div>
        </button>
      {/each}
    </div>
  
    {#if overlayVisible}
      <Modal
        websiteImage={currentWebsite.image}
        websiteName={currentWebsite.name}
        websiteUrl={currentWebsite.url}
        websiteCode={currentWebsite.code}
        websiteGif={currentWebsite.gif}
        closeModal={closeOverlay}
        nextModal = {nextModal}
        prevModal = {prevModal}
      />
    {/if}
</main>
  