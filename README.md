# node static server template

This is a very basic template for getting a static server up and running using node. Relies on ecstatic, union, and director. Includes a Procfile to work with Heroku buildpacks so you can easily deploy to something like [dokku](https://github.com/progrium/dokku).

## Usage

`index.js` initializes your static server with some options, `server.js` interprets those options and houses the defaults.

Default settings:

| option     | default                  |
| ---------- | ------------------------ |
| basePath   | __dirname                |
| publicPath | 'public'                 |
| port       | process.env.PORT or 3000 |
| name       | 'static server'          |

---

Example index.js:

```js
require('./server').start({
  basePath: 'site',
  publicPath: 'build',
  port: 1337,
  name: 'your name here'
});
```

This will serve a site on port 1337 whose static assets are located at `./site/build` relative to the root of repo. The name is just what shows up in the log when the server initializes.

---

All config options are optional since they all have defaults, so this would be an equally valid `index.js`:

```js
require('./server').start();
```

This will serve static assets from `./public` on the port set at process.env.PORT or 3000 if it doesn't exist.
