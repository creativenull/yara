<script>
  import { Router, Route } from 'svelte-navigator'
  import HomePage from './pages/Home.svelte'
  import SingleRecipePage from './pages/recipes/Single.svelte'
  import EditRecipePage from './pages/recipes/Edit.svelte'
</script>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<Router>
  <Route path="/recipes/:id" component={SingleRecipePage} />
  <Route path="/recipes/:id/edit" component={EditRecipePage} />
  <Route path="/" component={HomePage} />
</Router>
