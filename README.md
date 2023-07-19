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
  |-- _old       // Deprecated views 
  |-- components // `Splash.js` contains navigation links
  |-- theme
  ...
  App.js // top level app entry point
  index.js
|--.travis.yml
|-- package.json
|-- README.md -- You are here.
```

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
