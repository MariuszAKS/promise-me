# Promise Me

An app created:
- with Vite
- in React
- using TypeScript

Additionally:
- react router dom - routing between pages
- local forage - storing Promises locally in user's browser

## What will it do

The app is going to allow the user creation of Promises.

They are objects that contain a promise, that the user makes to himself.

#### Examples:
- stop smoking
- exercise every day
- learn something new every week

#### Promise will contain:
- question (that user is asked)
- additional description
- how often is it asked
- creation date
- dates when it was kept
- current and max streaks

It's supposed to aid in creation of positive habits

## Deadline

App is supposed to be finished before the end of November 2024

## Planning
- [X] routing
- [ ] pages
  - [X] set-up
  - [ ] list of promises
    - [X] listing all promises
    - [X] redirecting to edit page
    - [ ] checking promise as done in current day
  - [X] promise creation
    - [X] page with form
    - [X] set up list as temp db
    - [X] use localForage to store locally
  - [X] promise editing
  - [ ] callendar visualizing how many were kept
- [X] database
  - [X] temporary in-code list (and type)
  - [X] localForage - storing locally in user's browser
- [ ] update UI
  - [ ] list of promises
  - [ ] create promise
  - [ ] edit promise
