<script>
  import { Router, Route } from 'svelte-navigator'
  import HomePage from './pages/Home.svelte'
  import SingleRecipePage from './pages/recipes/Single.svelte'
</script>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<Router>
  <Route path="/recipes/:id" component={SingleRecipePage} />
  <Route path="/" component={HomePage} />
</Router>
