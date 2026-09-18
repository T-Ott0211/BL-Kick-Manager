name: Bundesliga Spieltag Polling

on:
  schedule:
    - cron: '*/10 18-21 * * 5'   # Freitagabend
    - cron: '*/10 11-20 * * 6'   # Samstag
    - cron: '*/10 11-19 * * 0'   # Sonntag
    - cron: '*/10 18-21 * * 1'   # Montagabend
  workflow_dispatch: {}

jobs:
  poll:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install firebase-admin
      - run: node poll-script.js
        env:
          API_FOOTBALL_KEY: ${{ secrets.API_FOOTBALL_KEY }}
          FIREBASE_SERVICE_ACCOUNT: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
