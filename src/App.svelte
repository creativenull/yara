<script>
  import { Router, Route } from 'svelte-routing'
    import HomePage from './pages/Home.svelte'
    import SingleRecipePage from './pages/recipes/Single.svelte'
  export let url = ''
</script>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<Router {url}>
  <Route path="recipes/:id" component={SingleRecipePage} />
  <Route path="/" component={HomePage} />
</Router>
