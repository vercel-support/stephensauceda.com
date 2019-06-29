import Prismic from 'prismic-javascript'

export function getAPI(req) {
  return Prismic.getApi(process.env.API_ENDPOINT, {
    req,
    accessToken: process.env.ACCESS_TOKEN
  })
}

export async function getSingle(req, docName) {
  try {
    const API = await getAPI(req)
    // Use the function to get a single document for home
    const document = await API.getSingle(docName)
    return { document }
  } catch (error) {
    console.error(error)
    return error
  }
}

export async function getAllOfType(req, type, options = {}) {
  try {
    const API = await getAPI(req)
    const document = await API.query(
      Prismic.Predicates.at('document.type', type),
      options
    )
    return document.results
  } catch (error) {
    console.error(error)
    return error
  }
}

export async function getByUID(req, uid) {
  try {
    const API = await getAPI(req)
    const document = await API.getByUID('post', uid)
    return document
  } catch (error) {
    console.error(error)
    return error
  }
}

export async function getPosts(req, type, options = {}) {
  try {
    const API = await getAPI(req)
    const document = await API.query(
      Prismic.Predicates.at('document.type', type),
      options
    )
    return document.results
  } catch (error) {
    console.error(error)
    return error
  }
}
