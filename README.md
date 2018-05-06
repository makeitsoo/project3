
# Workout-app --> CUT? getCut? repIt? 

## Overview
Simple app for quickly and easily recording info during your workouts at the gym (e.g. chest fly, 4 sets of 10 reps, 150 lbs.)


## Instructions 

#### Install the dependencies and run the app
1. Start the server - 
cd into the server side directory and run:
``` 
npm install

node index.js
``` 
2. Start React -
cd into the client side directory and run:
``` 
yarn add

yarn start
```
3. Browser - 
app server and endpoints listening on:
```
localhost:3000
localhost:3000/logit
localhost:3000/charts

localhost:3000/auth/google
localhost:3000/api/current_user
localhost:3000/api/logout
```



### Key Features
```
- Ability to easily log an exercise after completion while at 
  the gym
    - include option to edit/delete a previous entry
- mobile responsive design
- ability to view  previous “checkins” and exercise log history
    - include filtering & sorting capabilities (e.g. sort by date, filter: bicep curls)
- provide stats based on user previous logs/exercises
- provide recommendations/challenges for increasing weights each time
- use charts library for stats data/viz 
- could track all sorts of stats:
    - frequency of user “checkins” (e.g. average of 3 activities per week, etc…)
    - set, rep, & workout counts for each exercise
- could filter by category like upperbody/lowerbody/date range
```


## Categories
```
    - quads
    - hams
    - calves
    - pelvis/waist
    - abs
    - chest
    - upper back
    - lower back
    - triceps
    - biceps
    - shoulders
```


## Exercises
```
    - bench press
    - chest fly
    - lat pulldown
    - row
    - shoulder press
    - military press
    - shoulder fly
    - shoulder shrug
    - pushup
    - pull up
    - tricep extension
    - tricep pushdown
    - bicep curls
    - wrist curls
    - situp
    - stomach crunch
    - torso rotation
    - back extension
    - deadlift
    - good-morning
    - lunge
    - squat
    - leg extension
    - leg press
    - leg curl
    - calf raise
```

## Folder Structure

```
project3_WorkoutApp/
  README.md
  client/
    node_modules/
    package.json
    public/
      index.html
      favicon.ico
    src/
      actions.js
      actions.test.js
      App.css
      App.js
      App.test.js
      Day.jsx
      Detail.jsx
      DetailContainer.jsx
      index.css
      index.js
      logo.svg
      reducer.js
      reducer.test.js
      registerServiceWorker.js
      SaveButton.jsx
      selectors.js
      selectors.test.js
      Week.jsx
      WeekContainer.jsx
    server/
      .nyc_output/
      coverage/
        base.css
        block-navigation.js
        index.hmtl
        prettify.js
        server.js.html
        sorter.js
      node_modules/
      public/
        build/
          static/
            css/
            js/
          asset-manifest.json
          favicon.ico
          index.html
          manifest.json
          service-worker.js
        staic/
          css/
          js/
        asset-manifest.json
        favicon.ico
        index.html
        manifest.json
        service-worker.js
      test/
        helloworld.js
      .eslintrc.json
      index.js
      package.json
      server.js

```


## Database Schema

### Tables
```
- user
    - user_id
    - username
    - email
    - height
    - weight
    - age
    - goal (weight loss, regular fitness/exercise, tone, body building)

- exercise
    - exercise_id
    - exercise_name
    - exercise_description
    - category_id
    - category_name

- category
    - category_id
    - category_name
    - category_description

- logs
    - log_id
    - log_date
    - log_exercise
    - log_weight
    - log_sets
    - log_reps

- challenges (stretch goal)
    - id
    - name
    - type
    - description
    - points
```



