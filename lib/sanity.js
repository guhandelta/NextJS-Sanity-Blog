import sanityClient from '@sanity/client';

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production', 
    /*useCdn: 
             true => Returns fast response by fetching cached data
             false => Returns a little bit slow response by fetching latest data */
}

export const previewClient = sanityClient({
    ...options,
    useCdn: false,  
    // token is a specific token api in the Sanity app
    token: process.env.SANITY_API_TOKEN,
});

export default sanityClient(options);