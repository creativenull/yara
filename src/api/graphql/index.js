const endpoint = 'http://localhost:8080/graphql'

export default (query) => {
  return window.fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
}
