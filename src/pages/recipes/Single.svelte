<script>
  import { onMount } from 'svelte';
  import { useParams } from 'svelte-navigator';
  import { fetchRecipe } from '../../api/index.js';

  let title = 'YARA - Yet Another Recipes App';
  let recipe = {
    title: '',
    quickSummary: '',
    author: {
      name: 'CreativeNull',
      avatar: 'https://picsum.photos/100',
    },
    featuredImage: {
      caption: 'Featured',
      src: 'https://picsum.photos/200',
    },
    images: [{ caption: 'Image 1', src: 'https://picsum.photos/700/300' }],
    ingredients: [
      {
        name: 'default',
        measurement: { amt: 2, unit: 'tbsp' },
        notes: 'Smol measurement gud',
      },
    ],
    steps: ['default'],
    notes: '',
  };

  const params = useParams();

  onMount(async () => {
    const { data } = await fetchRecipe($params.id);
    recipe = { ...recipe, ...data.recipe };
  });
</script>

<main class="dark py-5 w-3/5 mx-auto">
  <!-- Title -->
  <div class="text-center">
    <h1 class="font-shadows text-6xl mb-10">{title}</h1>
  </div>

  <!-- Recipe Title -->
  <div
    class="recipe__header flex items-end rounded"
    style="background-image: url('{recipe.images[0].src}')"
  >
    <div class="flex bg-black bg-opacity-40 rounded-b filter blur-3xl p-6">
      <div class="mr-2">
        <img
        class="rounded-full shadow border border-blue-100 border-4"
        src={recipe.featuredImage.src}
        alt={recipe.featuredImage.caption}
        />
      </div>
    <div class="ml-2 flex flex-col justify-center w-full">
      <h1 class="text-4xl pb-4">{recipe.title}</h1>
      <span class="text-md italic py-2">{recipe.quickSummary}</span>
      <div class="flex items-center py-4">
        <img
          class="recipe__avatar rounded-full mr-2"
          src={recipe.author.avatar}
          alt="author"
        />
        <span class="text-sm">{recipe.author.name}</span>
      </div>
    </div>
    </div>
  </div>

  <!-- Recipe Description -->
  <div class="recipe grid gap-4 mt-4">
    <div class="steps shadow rounded dark:border dark:border-white py-6 px-4">
      <h3 class="text-3xl mb-4">Steps</h3>
      <ol class="list-decimal ml-5">
        {#each recipe.steps as step}
          <li>{step.description}</li>
        {/each}
      </ol>
    </div>
    <div
      class="ingredients shadow rounded dark:border dark:border-white py-6 px-4"
    >
      <h3 class="text-3xl mb-4">Ingredients</h3>
      {#each recipe.ingredients as ingredient}
        <ul class="list-disc ml-6">
          <li>{ingredient.name} - {ingredient.measurement.amount} {ingredient.measurement.unit}</li>
        </ul>
      {/each}
    </div>
  </div>
</main>

<style>
  .recipe {
    grid-template-columns: 2fr 1fr;
  }

  .recipe__avatar {
    width: 32px;
  }

  .recipe__header {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 700px;
  }
</style>
