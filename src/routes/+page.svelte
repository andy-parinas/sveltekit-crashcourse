<script>
  import { onMount } from 'svelte'


    let data;
    onMount(async () => {
        const res = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=7c1985cbce31441c853525ce93e10e33")

        const data = await res.json()
        console.log(data)
    })
</script>


<h1>Welcome to SvelteKit Updated</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
