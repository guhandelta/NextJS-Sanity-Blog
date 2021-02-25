"use strict";

module.exports = {
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID
  },
  images: {
    domains: ['cdn.sanity.io'],
    deviceSizes: [640, 750] //Array of breakpoints for the sizes of the devices for which the-
    //- images should be optimized for 

  }
};