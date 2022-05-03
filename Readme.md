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

# Improvement Roadmap - 2022

1. Migrate from Vue 2 to Vue 3
2. Implement Vuex 4 store for the data used in the Cards
  - Move all repeated code out of the components
    - either to a parent component 
    - or to the store
3. Implement the following features:
  - the ability to select between List and Grid view in the projects section
  - make less colorful, make the style sharper and more professional, similar to Uniswap Dex UI
4. cull projects shown
  - only show complex and complete applications
  - remove simple exercises
  - remove simple apps with no realworld biz use
  - best to have 2 or 3 professional looking projects than a bunch of silly exercises
5. Make the layout responsive
  - especially the vh of the .jumbotron


### 1. Migrate from Vue 2 to Vue 3

- ran the command `vue add vue-next`
  - this seems to have updated all the necessary packages
- deleted node_modules and then re-installed dependencies
- now it renders. but the code for the router needs to be upgraded
  - uninstall previous vue-router package, remove main.js references to the router
  - install vue-router: `vue add router`
  - manually edit the router/index.js files
- moved all the routes to the router.index.js file
- updated all component paths

- unrealted: 
  - I edoted some of the styles to make it look cleaner and more uniform in its color scheme
  - Also made some changes to the Homepage text
  - fixed link in the footer to live site

### 2. Add Vuex to project

created new branch just in case: main > upgrade-from-vue2-to-vue3 >> feature-implement-vuex-store

- installed the vuex package with npm: `npm install vuex@next`
- created the store folder and the store/index.js file
- updated that file and the main.js file to use the store

- of the project views, only the first one is working, showing the correct path: localhost:8080/portfolio/project-1
  - the others show only: localhost:8080/project-2
  - the problem has to be with nested routing
  - well, it wasn't, I just had to make sure the card.href matched the route path in the router file

* Discovered that the 'Card' component does nothing at all exceot take space.
  - the individual project views are the ones being rendered
  - First, I should move the projects data to the store
  - Then I can go about removing all the project views and only using the Card component, as was originally intended.