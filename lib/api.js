import Prismic from 'prismic-javascript'

function getAPI(req) {
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