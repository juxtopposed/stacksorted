<script>
    import { onMount } from 'svelte';
    
    export let imageUrl;
    export let imageName;
    export let websiteUrl;
    export let closeModal;
    export let websiteCode;

    function handleOverlayClick(event) {
      const isOverlayClick = event.target === event.currentTarget;
      if (isOverlayClick) {
        closeModal();
      }
    }

    function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  onMount(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>
  
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal-overlay" on:click|stopPropagation={handleOverlayClick}>
    <div class="modal">
      <button class="close-button" on:click={closeModal}>esc</button>
      <img src={imageUrl} alt={imageName} class="img-big"/>

      <div class="card-info">
        <h3>{imageName}</h3>
        <!-- svelte-ignore missing-declaration -->
        <div class="outbound-cont">
          {#if websiteCode && websiteCode !== null}
            <a href="{websiteCode}" target="_blank" class="outbound code-link">
              <span>Check Code</span>
              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="29" rx="3" fill="transparent"/>
                <path d="M19 7L26 14L19 21" stroke="white"/>
                <path d="M12 21L5 14L12 7" stroke="white"/>
              </svg>                   
            </a>
          {/if}
          <a href="{websiteUrl}" target="_blank" class="outbound">
            <span>Visit Site</span>
            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="29" rx="3" fill="transparent"/>
              <path d="M10.454 7.36396H23.182V20.0919" stroke="white"/>
              <path d="M23 7.54596L9 21.546" stroke="white"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
</div>