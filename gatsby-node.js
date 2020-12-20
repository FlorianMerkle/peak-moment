var blog_data = require('./content/blog.json');


exports.createPages =  ({ actions: { createPage } }) => {
    // `getPokemonData` is a function that fetches our data
    const blogs = blog_data.blog
    blogs.forEach( item => {
        createPage({
            path: 'blog/'+item.path,
            component: require.resolve("./src/components/Blog.js"),
            context: {item}
        })
    })
    /*const enWorkshops = en_workshops.workshop
    const deWorkshops = de_workshops.workshop
    const enWebinars = en_webinars.webinar
    const deWebinars = de_webinars.webinar
    const workshops = enWorkshops.map((enWorkshop, i) => ({en:enWorkshop, de: deWorkshops[i]}))
    const webinars = enWebinars.map((enWebinar, i) => ({en: enWebinar, de: deWebinars[i]}))
    const deJobs = de_careers.job
    const enJobs = en_careers.job
    const jobs = enJobs.map((enJob,i) => ({en: enJob, de: deJobs[i]}))
    
    workshops.map(item => item.en.url = `/workshop/${item.en.title.replace(/\s+|\?|\#/g, '-').toLowerCase()}/`)
    workshops.map(item => item.de.url = `/workshop/${item.en.title.replace(/\s+|\?|\#/g, '-').toLowerCase()}/` )
    webinars.map(item => item.en.url = `/webinar/${item.en.title.replace(/\s+|\?|\#/g, '-').toLowerCase()}/`)
    webinars.map(item => item.de.url = `/webinar/${item.en.title.replace(/\s+|\?|\#/g, '-').toLowerCase()}/`)
    jobs.map(item => item.en.url = `/careers/hiring-${item.en.jobTitle.replace(/\s+|\?|\#/g, '-').toLowerCase()}/`)
    jobs.map(item => item.de.url = `/careers/hiring-${item.en.jobTitle.replace(/\s+|\?|\#/g, '-').toLowerCase()}/`)
    jobs.forEach(item=> {
      createPage({
        path: item.en.url,
        component: require.resolve("./src/components/jobDetail.js"),
        context: { item, webinar:true },
      })
    })
    webinars.forEach(item=> {
      createPage({
        path: item.en.url,
        component: require.resolve("./src/components/workshopDetail.js"),
        context: { item, webinar:true },
      })
    })
    workshops.forEach(item=> {
      createPage({
        path: item.en.url,
        component: require.resolve("./src/components/workshopDetail.js"),
        context: { item, webinar:false },
      })
    })
*/
  }

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */