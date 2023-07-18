<script>
    import Navbar from './Navbar.svelte';
    import Sidebar from './Sidebar.svelte';
    import Routes from './Routes.svelte';
    import Footer from './Footer.svelte';
</script>
  
<main>
    <Navbar />
    <div class="main-content">
        <Sidebar />
        <Routes />
    </div>
    <Footer />
</main>

<style>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 1em;
        box-sizing: border-box;
        gap: 3em;
    }
</style>