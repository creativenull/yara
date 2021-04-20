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
  Edit
</main>

<style>
</style>
