## Portfolio site - Refactoring from Bootstrap 4 to Vue.js

This project is meant to upgrade the architecture of my portfolio site and implement the best framework currently available.

Which will also serve to reduce the dependence on old tech like jQuery and increasingly irrelevant tech like Bootstrap. Both may have been a good solution to many problems in the past, but current web standards make these 2 technologies less and less necessary.


### to run the dev server
npm run serve


-----------------------------------------------------------------------------


# Using Amplify

## Linked to the github repo for the site

- set it up for cotinuous deployment
- should make it easier to re-upload the site anytime I add or change something; this way I won't have to upload the entire build folder.

- I still need TODO the following:
  - set up a test branch, so I don't break my website by changing stuff on prod
  - get it to redirect carlosv.dev to www.carlosv.dev; right now I have to type in the www using the root name directly goes nowhere.
  - might also need a subdomain for testing, something like development.carlosv.dev


-----------------------------------------------------------------------------

# Improvement Roadmap

- Migrate from Vue 2 to Vue 3
- Implement Vuex 4 store for the data used in the Cards
- Move all repeated code out of the components
  - either to a parent component 
  - or to the store
- Implement the following features:
  - the ability to select between List and Grid view in the projects section
  - make less colorful, make the style sharper and more professional, similar to Uniswap Dex UI
- cull projects shown
  - only show complex and complete applications
  - remove simple exercises
  - remove simple apps with no realworld biz use
  - best to have 2 or 3 professional looking projects than a bunch of silly exercises