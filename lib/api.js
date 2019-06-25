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

export async function getAllOfType(req, type) {
  try {
    const API = await getAPI(req)
    // Use the function to get a single document for home
    const document = await API.query(Prismic.Predicates.at('document.type', type), {
      orderings: '[my.post.publish_date desc]'
    })
    return document.results
  } catch (error) {
    console.error(error)
    return error
  }
}

export async function getByUID(req, uid) {
  try {
    const API = await getAPI(req)
    // Use the function to get a single document for home
    const document = await API.getByUID('post', uid)
    return document
  } catch (error) {
    console.error(error)
    return error
  }
}
