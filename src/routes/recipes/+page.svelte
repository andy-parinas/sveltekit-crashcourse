
<script>

    export let data;
</script>


<h1>Food Recipes</h1>

{#each data.recipes as item}
    <a data-sveltekit-preload-data="tap" href="/recipes/{item.id}">
        <h3>{item.title}</h3>
        <img src="{item.image}" alt="{item.title}" >
    </a>
{/each}