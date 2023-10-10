![img](public/images/apple-icon-180x180.png)

# **[TorontoJS.com](http://torontojs.com/)**

Wanna discuss the website? Tell `#orgmode` on our Slack channel

### Overview of the Repo

```
|-- build // deployable contents that are gitignored but will show up locally.
|-- flow-typed
|-- public
  |-- images
  |-- pages // contains markdown content that appears after `torontojs.com/p/`
|-- src
  |-- _old       // Deprecated views
  |-- components
  |-- views      // Contains all pages
  |-- theme
  ...
  App.js // top level app entry point
  index.js
|-- package.json
|-- README.md -- You are here.
```

### Tech Stack

Due to this org being around for 10+ years with many different organizers, friends, and maintainers, this site has many problems a legacy project does. We're happy for anyone to come help improve this!

Built with [create-react-app](https://github.com/facebookincubator/create-react-app).

- React 16 with vanilla JS
- styled-components
- [recompose](https://github.com/acdlite/recompose) helpers
- [glamor](https://github.com/threepointone/glamor) for css
- [color](https://github.com/Qix-/color) utility
- [eslint-config-minimal](https://github.com/alex-wilmer/eslint-config-minimal)
- [gitmoji](https://gitmoji.carloscuesta.me/)

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

### Troubleshooting

#### Inability to commit due to lint error

```
git commit -m 'my commit message' --no-verify
```
