import sanityClient from '@sanity/client'

// Run @sanity/client
// To allow React to jump to find the Sanity Client.js 
// and use the project id to pull the studio and make it a sanity project.

export default sanityClient({
    projectId: "uh9kq253",
    dataset:"production"
})