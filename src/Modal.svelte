<script>
  import { onMount } from 'svelte';

  let imageLoaded = false;
    
  export let websiteImage;
  export let websiteName;
  export let websiteUrl;
  export let websiteCode;
  export let codeLinkBoolean;
  export let websiteGif;
  export let closeModal;
  export let nextModal;
  export let prevModal;  


  function handleOverlayClick(event) {
    const isOverlayClick = event.target === event.currentTarget;
    if (isOverlayClick) {
      closeModal();
    }
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowRight':
        nextModal()
        break;
      case 'ArrowLeft':
        prevModal()
        break;
      default:
        break;
    }
  }

  const handleImageLoad = () => {
    imageLoaded = true;
  };

  onMount(() => {
    const image = new Image();
    image.src = websiteGif ? websiteGif : websiteImage;
    image.onload = handleImageLoad;

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });



</script>
  
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal-overlay" on:click|stopPropagation={handleOverlayClick}>
    <div class="modal">
      <div class="card-info">
        <h3><a href="{websiteUrl}" target="_blank">{websiteName}</a></h3>
        <div class="modal-nav">

          <svg on:click={prevModal} class="modal-nav-button" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7413 19.422L7.70703 14.3879L12.7413 9.35359" stroke="white"/>
            <path d="M7.89587 14.3878L22.442 14.3878" stroke="white"/>
          </svg>
            
          
          <svg on:click={nextModal} class="modal-nav-button" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7011 9.35359L21.7354 14.3878L16.7011 19.422" stroke="white"/>
            <path d="M21.5465 14.3878H7.00037" stroke="white"/>
          </svg>
            
          
          <button class="modal-nav-button" on:click={closeModal}>esc</button>

        </div>
      </div>

      {#if !imageLoaded}
        <img src={websiteImage} alt={websiteName} class="img-big" />
      {:else}
        <img src={websiteGif ? websiteGif : websiteImage} alt={websiteName} class="img-big" />
      {/if}

      <div class="card-info">
        
        <!-- svelte-ignore missing-declaration -->
          {#if websiteCode && websiteCode !== null}
            <a href="{websiteCode}" target="_blank" class="outbound code-link">
              <span>Check Code</span>
              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="29" rx="3" fill="transparent"/>
                <path d="M19 7L26 14L19 21" stroke="white"/>
                <path d="M12 21L5 14L12 7" stroke="white"/>
              </svg>                   
            </a>
          {:else if !codeLinkBoolean} 
            <a href="https://forms.gle/7gi8eLZZoQmbVyst5" target="_blank" class="outbound code-link empty-code">
              <span>Add CodePen Link</span>
              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="29" rx="3" fill="transparent"/>
                <path d="M19 7L26 14L19 21" stroke="white"/>
                <path d="M12 21L5 14L12 7" stroke="white"/>
              </svg>                   
            </a>
          {/if}

          <a href="{websiteUrl}" target="_blank" class="outbound site-link">
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