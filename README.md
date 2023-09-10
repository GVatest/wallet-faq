<h1 align="center">Wallet Helpscoutdocs FAQ customize</h1>

> Admin panel -  https://secure.helpscout.net/

## Available commands

**Build application files (dist/main.scss, dist/bundle.js)**

```bash
yarn build
```

**Run dev server**

```bash
yarn dev
```

## Deploy

- Run `yarn build`
- Copy `main.css` from the `/dist` folder & upload it to helpscoutdocs customize page tab in the stylesheet field
- Copy `index.js` source code, insert it in the script tag, copy & paste to helpscoutdocs customize page tab in the head script field
