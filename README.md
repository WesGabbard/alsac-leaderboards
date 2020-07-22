# ALSAC LEADERBOARD POC

## Overview
Proof of concept pulling leaderboard csv reports and parse data to show in leaderboard. Requires pulling in leaderboard csv (this is done server side along with logging in as API Admin to fetch auth token), and then making API calls to Luminate to get each avatar in the pagination list.

This is a React app that uses [Next.js](https://nextjs.org/) (for ease of SSR and initial setup) as well as [Constructicon](https://everydayhero.github.io/constructicon) UI library. It also relies on [react pappa-parse](https://react-papaparse.js.org/) to format the data fetched from the csv.

There is no deployment setup, so will only work locally. You will need to set environment variables in next.config.js (mainly setting API user credentials).


## System Requirements

- Node (version 10): local JavaScript runtime to run the application
- Yarn: reliable dependency management for Node applications

[Guide to installing Node and Yarn on Mac](https://medium.com/@itsromiljain/the-best-way-to-install-node-js-npm-and-yarn-on-mac-osx-4d8a8544987a)

## Running Site Locally

### Install dependencies

```
yarn install
```

This may take a few mintues.

### Run the application

```
yarn start
```
The development server will now be serving your app, and can be viewed at [http://localhost:3000](http://localhost:3000).

Note that the development server will live re-load changes to your browser as you make changes to the codebase.

## Implementation notes
Each page fetches a token and then the appropiate csv file using Luminate Server APIs (Next.js SSR is wrapped in getIntitalProps). TO use Luminate Server APIs, you will need a admin account that is in the API Adminstrators group as well as to make sure the IP address is added to the *Configure API to allow server access* in the Open API Configuration. The Leaderboard's Item component will then take the token and fetch either personal or team page photo to show as a avataar (event has no photo).


