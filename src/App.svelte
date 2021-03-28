<script>
  let title = 'YARA - Yet Another Recipes App'
  let search = ''
  let recipes = [
    {
      title: 'Pizza',
      quickSummary: 'A quick summary on pizza',
      notes: 'A quick note'
    },
    {
      title: 'Pizza',
      quickSummary: 'A quick summary on pizza',
      notes: 'A quick note'
    },
    {
      title: 'Pizza',
      quickSummary: 'A quick summary on pizza',
      notes: 'A quick note'
    },
    {
      title: 'Pizza',
      quickSummary: 'A quick summary on pizza',
      notes: 'A quick note'
    },
    {
      title: 'Pizza',
      quickSummary: 'A quick summary on pizza',
      notes: 'A quick note'
    }
  ]
</script>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<main class="dark pt-8">
  <div class="text-center">
    <h1 class="font-shadows text-5xl">{title}</h1>
  </div>
  <div class="search-box flex w-2/6 mx-auto mt-5">
    <input
      style="width: 100%"
      class="rounded bg-white dark:bg-gray-800 dark:border dark:border-blue-500 p-2"
      type="text"
      value={search} />
  </div>
  <div class="recipes-box w-4/6 mx-auto flex flex-wrap justify-center mt-10">

    {#each recipes as recipe}
      <div class="p-5">
        <h2 class="text-3xl">{recipe.title}</h2>
        <p class="text-xl">{recipe.quickSummary}</p>
        <p class="text-sm">{recipe.notes}</p>
        <div class="my-3">
          <button class="dark:bg-blue-600 dark:text-white rounded px-4 py-2">View</button>
        </div>
      </div>
    {/each}

  </div>
</main>
