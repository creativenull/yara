<script>
  import { onMount } from 'svelte'
  import { useParams } from 'svelte-navigator'
  import { fetchRecipe } from '../../api/index.js'

  let title = 'YARA - Yet Another Recipes App'

  const params = useParams()

  onMount(async () => {
    const { data } = await fetchRecipe($params.id)
    recipe = { ...recipe, ...data.recipe }
  })
</script>

<main class="dark py-5 w-3/5 mx-auto">
  <!-- Title -->
  <div class="text-center">
    <h1 class="font-shadows text-6xl mb-10">{title}</h1>
  </div>

  <div class="recipe__carosel w-full mt-4">
    <img
      class="object-cover w-full rounded-t border-t border-r border-l"
      src={recipe.images[0].src}
      alt={recipe.images[0].caption} />
  </div>

  <!-- Recipe Title -->
  <div class="flex rounded-b shadow border-r border-l border-b border-white py-6 px-4">
    <div class="mr-2">
      <img
        class="rounded-full shadow border border-blue-100 border-4"
        src={recipe.featuredImage.src}
        alt={recipe.featuredImage.caption} />
    </div>
    <div class="ml-2 flex flex-col justify-center w-full">
      <h1 class="text-4xl pb-4">{recipe.title}</h1>
      <span class="text-md italic py-2">{recipe.quickSummary}</span>
      <div class="flex items-center py-4">
        <img class="recipe__avatar rounded-full mr-2" src={recipe.author.avatar} alt="author" />
        <span class="text-sm">{recipe.author.name}</span>
      </div>
    </div>
  </div>

  <!-- Recipe Description -->
  <div class="recipe grid gap-4 mt-4">
    <div class="steps shadow rounded dark:border dark:border-white py-6 px-4">
      <h3 class="text-3xl mb-4">Steps</h3>
      {#each recipe.steps as step}
        <p>{step}</p>
      {/each}
    </div>
    <div class="ingredients shadow rounded dark:border dark:border-white py-6 px-4">
      <h3 class="text-3xl mb-4">Ingredients</h3>
      {#each recipe.ingredients as ingredient}
        <ul class="list-disc ml-6">
          <li>{ingredient.name}</li>
        </ul>
      {/each}
    </div>
  </div>

  <!-- Sidebar
  <div class="sidebar fixed">
    <div class="flex flex-col items-stretch p-4">
      <div>
        <img class="sidebar__img object-cover" src={recipe.featuredImage.src} alt={recipe.featuredImage.caption} />
      </div>
      <div>
        <h3 class="text-4xl my-4">Ingredients</h3>
        {#each recipe.ingredients as ingredient}
          <ul class="list-disc ml-6">
            <li>{ingredient.name}</li>
          </ul>
        {/each}
      </div>
    </div>
  </div>

  <!-- Recipe
  <div class="recipe">
    <div class="recipe__title border-b border-white flex flex-col">
      <h1 class="text-6xl mb-4">{recipe.title}</h1>
      <span class="text-md italic mb-4">{recipe.quickSummary}</span>
      <div class="text-sm mb-4">
        <div class="rounded-full flex items-center justify-start p-2">
          <img class="recipe__avatar rounded-full mr-4" src={recipe.author.avatar} alt="author" />
          <span>{recipe.author.name}</span>
        </div>
      </div>
    </div>

    <div class="recipe__steps py-6 px-4">
      <h3 class="text-3xl mb-4">Steps</h3>
      {#each recipe.steps as step}
        <p>{step}</p>
      {/each}
    </div>
  </div>
  -->

</main>

<style>
  .recipe {
    grid-template-columns: 2fr 1fr
  }

  .recipe__avatar {
    width: 32px;
  }
</style>
