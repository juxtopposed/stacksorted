<script>
    export let category;
    import { websiteData } from './database';
    import Modal from './Modal.svelte';
  
    const websites = websiteData.categories[category] || [];
    let overlayVisible = false;
    let currentWebsite = {};
  
    function showOverlay(website) {
      currentWebsite = website;
      overlayVisible = true;
    }
  
    function closeOverlay() {
      overlayVisible = false;
    }
    
</script>
  
<main>
    <div class="main-grid">
      {#each websites as website}
        <button class="website-card">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img src={website.image} alt={website.name} class="website-image" on:click={() => showOverlay(website)}/>
          <div class="card-info">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h3 on:click={() => showOverlay(website)}>{website.name}</h3>
            <div class="outbound-cont">
                {#if website.code && website.code !== null}
                    <a href="{website.code}" target="_blank" class="outbound code-link">
                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="29" rx="3" fill="transparent"/>
                        <path d="M19 7L26 14L19 21" stroke="white"/>
                        <path d="M12 21L5 14L12 7" stroke="white"/>
                        </svg>                   
                    </a>
                {/if}


                <a href="{website.url}" target="_blank" class="outbound">
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
        imageUrl={currentWebsite.image}
        imageName={currentWebsite.name}
        websiteUrl={currentWebsite.url}
        websiteCode={currentWebsite.code}
        closeModal={closeOverlay}
      />
    {/if}
</main>
  