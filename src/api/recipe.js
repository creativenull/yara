import { gql } from 'graphql-request'
import request from './graphql'

export async function fetchRecipes () {
  return request(gql`
    query {
      recipes {
        _id
        title
        quickSummary
        notes
      }
    }
  `)
}

/**
  * @param {string} id
  *
  * @returns {Promise<any>}
  */
export function fetchRecipe (id) {
  return request(gql`
    query {
      recipe(id: "${id}") {
        title
        quickSummary
        notes
      }
    }
  `)
}
