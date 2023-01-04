export async function load(params) {
    const url =
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=7c1985cbce31441c853525ce93e10e33";
    const res = await fetch(url);
    const { results } = await res.json();
    console.log("server");
    return {
      recipes: results,
    };
  }
  