![img](public/images/apple-icon-180x180.png)

# **[TorontoJS.com](http://torontojs.com/)**

### Overview of the Repo

```
|-- build // deployable contents that are gitignored but will show up locally.
|-- flow-typed
|-- public
  |-- images
  |-- pages // contains markdown content that appears after `torontojs.com/p/`
|-- src
  |-- components // `Splash.js` contains navigation links
  |-- data
  |-- theme
  ...
  App.js // top level app entry point
  index.js
|--.travis.yml
|-- package.json
|-- README.md -- You are here.
```

### Add your meetup to our events feed

If you use meetup.com to host your events, then you can create a public Google Calendar Feed with the following steps:

1. Go to https://calendar.google.com/calendar/
2. On the sidebar, find the menu Other Calendars and then choose Add By URL
3. Go to your meetup home page and click the Our calendar link. 
4. At the bottom of the page, find the iCal link and copy the address of the link. 
5. Paste the URL in the dialog box that pops up at step 2 and also check the option to make it publically accessible. 
6. You should now see the calendar in the sidebar. Click the arrow icon and choose the Calendar settings option.
7. The section Calendar Address shows the unqie ID of the calendar. 
8. Submit a PR to the [events.js](torontojs.com/blob/master/src/data/events.js) file with the ID


Built with [create-react-app](https://github.com/facebookincubator/create-react-app).

### Clone / Install

```
git clone https://github.com/torontojs/torontojs.com.git
cd torontojs.com
yarn install
```

### Run in development mode

```
yarn start
```

This command should choose a port and open your default browser with the page open.

### Deploy to github pages (Requires contributor access)

```
yarn deploy
```

### Technologies

- [recompose](https://github.com/acdlite/recompose) helpers
- [glamor](https://github.com/threepointone/glamor) for css
- [color](https://github.com/Qix-/color) utility
- [eslint-config-minimal](https://github.com/alex-wilmer/eslint-config-minimal)
- [gitmoji](https://gitmoji.carloscuesta.me/)
