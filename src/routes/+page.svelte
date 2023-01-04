
<script>

    export let data;

    // onMount(async () => {
    //     console.log(recipes)
    //     // const res = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=7c1985cbce31441c853525ce93e10e33")

    //     // const {results} = await res.json()
    //     // data = results
    // })
</script>


<h1>Food Recipes</h1>

{#each data.recipes as item}
    <div>
        <h3>{item.title}</h3>
        <img src="{item.image}" alt="{item.title}" >
    </div>
{/each}