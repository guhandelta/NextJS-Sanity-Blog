import sanityClient from '@sanity/client';

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production', 
    /*useCdn: 
             true => Returns fast response by fetching cached data
             false => Returnsa little bit slow response by fetching latest data */
}

export default sanityClient(options);