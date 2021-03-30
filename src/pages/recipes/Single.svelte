<script>
  import { onMount } from 'svelte'
  import { useParams } from 'svelte-navigator'
  import { fetchRecipe } from '../../api/index.js'

  let recipe = {
    title: '',
    quickSummary: '',
    notes: ''
  }

  const params = useParams()

  onMount(async () => {
    const { data } = await fetchRecipe($params.id)
    recipe = data.recipe
  })
</script>

<main>
  <h2>{recipe.title}</h2>
  <div>
    <p>{recipe.quickSummary}</p>
    <p>{recipe.notes}</p>
  </div>
</main>
