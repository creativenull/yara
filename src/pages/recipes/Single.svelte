<script>
  import { onMount } from 'svelte';
  import { useParams, Link } from 'svelte-navigator';
  import { fetchRecipe } from '../../api/index.js';

  let title = 'YARA - Yet Another Recipes App';
  let recipe = {
    title: '',
    quickSummary: '',
    author: {
      name: '',
      avatar: 'https://picsum.photos/100',
    },
    featuredImg: {
      caption: '',
      src: 'https://picsum.photos/200',
    },
    images: [{ caption: '', src: '' }],
    ingredients: [
      {
        name: '',
        measurement: { amt: 0, unit: 'tbsp' },
        notes: '',
      },
    ],
    steps: [''],
    notes: '',
  };
  let dialog;

  const params = useParams();

  onMount(async () => {
    const { data } = await fetchRecipe($params.id);
    recipe = { ...recipe, ...data.recipe };
  });

  function onClickDelete() {
    dialog.showModal();
  }

  function onClickCloseDialog() {
    dialog.close();
  }
</script>

<main class="dark py-5 w-3/5 mx-auto">
  <dialog class="dialog rounded shadow bg-gray-200 p-0" bind:this={dialog}>
    <div class="w-full">
      <div class="flex justify-between items-center bg-blue-800 text-white px-4 py-2">
        <h2 class="text-3xl">Confirm</h2>
        <button on:click={onClickCloseDialog} class="bg-red-800 text-white rounded px-3 py-1">X</button>
      </div>
      <div class="p-4 flex flex-col justify-between">
        <h2 class="text-2xl">Are you sure you want to delete?</h2>
        <div>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  </dialog>
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
          class="img__featured shadow border border-blue-100 border-4"
          src={recipe.featuredImg.src}
          alt={recipe.featuredImg.caption}
        />
      </div>
    <div class="ml-2 flex flex-col justify-center w-full">
      <h1 class="text-4xl pb-4">{recipe.title}</h1>
      <span class="text-md italic py-2">{recipe.quickSummary}</span>
      <div class="flex justify-between py-4">
        <div class="flex items-center">
          <img
            class="recipe__avatar rounded-full mr-2"
            src={recipe.author.avatar}
            alt="author"
          />
          <span class="text-sm">{recipe.author.name}</span>
        </div>
        <div>
          <Link to={`/recipes/${$params.id}/edit`} class="rounded shadow bg-blue-500 px-6 py-2">Edit</Link>
          <button on:click={onClickDelete} class="rounded shadow bg-red-500 ml-2 px-6 py-2">Delete</button>
        </div>
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
    <div class="ingredients shadow rounded dark:border dark:border-white py-6 px-4">
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
  .dialog {
    width: 400px;
    height: 200px;
  }

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

  .img__featured {
    border-radius: 100px;
  }
</style>
