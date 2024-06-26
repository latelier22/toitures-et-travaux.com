// app/sitemap.js

// L'URL de votre site
const URL = "https://www.toitures-et-travaux.fr"

// Vos routes statiques
const SITE_ROUTES = ["", "/contact", "/entretien", "/fuite", "/reparation", "/travaux-divers"]

// Vos routes dynamiques
// Ici, on utilisera plus souvent le résultat d'un call API
// ou bien une fonction qui va récupérer les chemins de vos pages
// const getBlogPosts = () => {
//   return [{ slug: "nextjs-sitemap", date: "2024-01-01T08:00:00.000Z" }]
// }

export default async function sitemap() {
//   const posts = BLOG_POSTS.map(({ slug, date }) => ({
//     url: `${URL}/blog/${slug}`,
//     lastModified: date,
//   }))

  const routes = SITE_ROUTES.map(route => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

//   return [...routes, ...posts]
  return [...routes]
}
