<script>
    import { onMount } from 'svelte';
  
    let showButton = false;
  
    const scrollToTop = () => {
      const mainGrid = document.querySelector('.main-grid');

      window.scrollTo({ top: 0, behavior: 'smooth' });
      mainGrid.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const handleScroll = () => {
      const mainGrid = document.querySelector('.main-grid');
      
      showButton = window.scrollY > 100 || mainGrid.scrollTop > 100;
    };
  
    onMount(() => {
      const mainGrid = document.querySelector('.main-grid');

      window.addEventListener('scroll', handleScroll);
      mainGrid.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        mainGrid.removeEventListener('scroll', handleScroll);
      };
    });
</script>
  
{#if showButton}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={scrollToTop} class="back-to-top-btn">
        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0401 12.0543L15.0743 7.02002L20.1086 12.0543" stroke="white"/>
            <path d="M15.0748 7.20886L15.0748 21.755" stroke="white"/>
        </svg>
    </div>
{/if}
