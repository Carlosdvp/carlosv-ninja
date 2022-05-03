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

`
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
`

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
  - I edited some of the styles to make it look cleaner and more uniform in its color scheme
  - Also made some changes to the Homepage text
  - fixed link in the footer to live site

### 2. Add Vuex to project

created new branch just in case: main > upgrade-from-vue2-to-vue3 >> feature-implement-vuex-store

- installed the vuex package with npm: `npm install vuex@next`
- created the store folder and the store/index.js file
- updated that file and the main.js file to use the store

- project views: only the first one was showing the correct path: localhost:8080/portfolio/project-1
  - I just had to make sure the card.href matched the route path in the router file

  *The Cards*

  * Discovered that the 'Card' component does nothing at all except take space.
    - the individual project views are the ones being rendered
    - First, I should move the projects data to the store
    - Then I can go about removing all the project views and only using the Card component, as was originally intended.

  *Current Status:*

    1. Gallery component uses the data from state.cards to generate the Gallery cards, one per project
    2. Each project view has the card's data in its data property, and the 'Card' CSS is repeated in all the project views
    3. Project view used the data for the project included in the data() method for each component
    4. Pictures link to the project view

  *Desired Final Form:*

    1. This is fine, by moving the data to the store this part is now good.
    2. Moved all the projects data into the store
      - used the Card comonent that wasn't being used in each of the prject views
      - this allowed me to remove the data prperty from them
      - and to remove all the CSS, since it was the same as the Card component's
      - Now the project views are small and cleaner, no repeated code
      - And the Card component is doing the job it was made to do.
    3. This resulted in a bug: when you click on the first project the view it takes you to renders all projects, and clicking on another project renders nothing.
      - tried several things:
        - using v-if in the Card component, would only render the views if the condition evaluated to id = 1 or index = 0 (`project.id === 1`). If I used something like `project.id === index` nothing happened, it didn't work.
        - moving the v-if statement to the project views (the Card's parents) did nothing but move the same issue to them.
        - trying to split the projects array in the store into individual project objects was overly complicated and did not solve the issue either.
        - Finallly the *solution* was to simply pull the data for one project from the store inside the project view and pass that data down into the Card as a prop.
    4. This is fine.

### 3. Implement the following features:

1. the ability to select between List and Grid view in the projects section
  - create a pair of buttons
    - each should have a label 'LIST View' or 'GRID View'
    - the button for the current view should be disabled

2. make less colorful, make the style sharper and more professional, similar to Uniswap Dex UI