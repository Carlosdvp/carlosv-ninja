## Portfolio site - Refactoring from Bootstrap 4 to Vue.js

This project is meant to upgrade the architecture of my portfolio site and implement the best framework currently available.

Which will also serve to reduce the dependence on old tech like jQuery and increasingly irrelevant tech like Bootstrap. Both may have been a good solution to many problems in the past, but current web standards make these 2 technologies less and less necessary.


- to run the dev server
- npm run serve

-----------------------------------------------------------------------------

# To Add New Projects

1. Update the following:
  - add a project component in /views
  - add entries to /store/index.js
    - in Cards[] and projects[]
  - add an image for the project in ./public
  - add an entry to the /router

-----------------------------------------------------------------------------


# Using Amplify

## Linked to the github repo for the site

- set it up for cotinuous deployment
- added a staging branch to test before merging changes to Prod

- I still need TODO the following:
  - get it to redirect carlosv.dev to www.carlosv.dev; right now I have to type in the www using the root name directly goes nowhere.

-----------------------------------------------------------------------------

# Improvement History - 2022

1. Migrated from Vue 2 to Vue 3
2. Implemented Vuex 4 store for the data used by the Cards
  - Moved all repeated code out of the components
    - either to a parent component 
    - or to the store
3. Added the ability to select between List and Grid view in the projects gallery
4. Fixed the Styling
  - make the layout responsive
  - make less colorful, make the style sharper and more professional, similar to Uniswap Dex UI
  - and clean up the css
  - some styles may need to be global to eliminate too much repetition of the same stuff
5. culled projects shown in the Project Gallery
  - only show complex and complete applications
  - removed simple exercises, apps with no realworld application

--------------------------------------------------------------------------

### 1. Migration from Vue 2 to Vue 3 - Details

- Ran the command `vue add vue-next`
  - this seems to have updated all the necessary packages
- Deleted node_modules and then re-installed dependencies
- Now it renders, but the code for the router needs to be upgraded
  - uninstalled previous vue-router package, remove main.js references to the router
  - installed vue-router: `vue add router`
  - manually edited the router/index.js files
- Moved all the routes to the router.index.js file
- Updated all component paths

- unrelated: 
  - I edited some of the styles to make it look cleaner and more uniform in its color scheme
  - Also made some changes to the Homepage text
  - Fixed link in the footer to live site

### 2. Added Vuex to project

Created new branch just in case: main > upgrade-from-vue2-to-vue3 >> feature-implement-vuex-store

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

### 3. Added the ability to select between List and Grid view in the projects gallery

  - create a pair of buttons
    - each should have a label 'LIST View' or 'GRID View'
    - the button for the current view should be disabled (optional)
  - create 2 separeate views
    - Grid View component
    - List View Component
  - Grid View is the default view I had in the Gallery component, move this to the Grid View component.

### 4. Fixed the Styling

1. clean up the css
2. some styles may need to be global to eliminate too much repetition of the same stuff
3. make the layout responsive
4. make less colorful, make the style sharper and more professional.

### 5. Cleaned up projects listed

  - Should only show complex and complete applications
  - Removed simple exercises, apps with no realworld biz use

  - Keep: 
    - Arquitetura
    - BTC pricefeed
    - Brid app clone
  - Removed:
    - Chuck Norris Facts
    - Color changing Grid

********************************************************

# 2023 Improvements

1. Added 2 new projects
2. Moved Bird app clone from Heroku to AWS. Heroku stopped their free hosting plan, and I already have a biiled account with AWS.
3. Added Pinia to replace Vuex
4. Added Tailwind and cleaned up the css throughout the app. Made the design look sharper and more professional.

********************************************************

# Improvements / Fixes Required - 2023

1. Add new Projects to the site

  - Hardhat Boilerplate conversion from React FE to Vue FE
  - HR Management app (re-create the UI using React)
  - Uniswap monitoring app (re-create the UI using Vue)


2. Bug Fix - Noticed that the Navbar renders incorrectly on Chrome

  - This nees to be fixed
    -- it looks like the media querries might have an issue


3. UI improvement - Grid vs List Persistence

  - make the grid vs list view selection persistent
  - when a user goes into a project's details page and goes back to the Portfolio page the view should be what had been previosuly selected by the user.
  - if it was in Grid view it should remain until List is selected
  - and vice versa
  - right now it goes back to Grid view whenever a user navigates away from that page


4. UI improvement - Responsiveness

    - the cards need to be fixed, the layout breaks badly on smaller screen sizes
    - the Gallery view espcially, the cards are pushed behind the footer

5. Architecture Improvement - replace Vue-cli with Vite

    - is this even possible without re-doing the whole thing?

6. Architecture Improvement - explore the possiblity of using Typescript

    - kind of like the previous point, is it possible to do something like this for an existing project?
    - I would probably have to create a new branch
    - Or start by adding new code in typescript and replacing legacy code little by little
    - not a must-have if is too cumbersome a task
