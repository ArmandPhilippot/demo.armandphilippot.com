# demo.armandphilippot.com

A website to present some small apps using Git submodules.

## Install

First, you need to `git clone` this repo or to use it as Git submodule.

Then, you need to build each React app. For each subdirectory inside `react-small-apps`, you need to execute the following commands:

1. `cd projects/react-small-apps/{project-name}/`
2. `cp .env.example .env`
3. Set the `PUBLIC_URL` in `.env` to `/projects/react-small-apps/{project-name}/build/`
4. `yarn install`
5. `yarn build`

## Development

At the root of this repo:

1. `cp .env.example .env`
2. Edit the `.env` file to suits your needs.
3. `yarn install`
4. `yarn run serve`

## Production

At the root of this repo:

1. `cp .env.example .env`
2. Edit the `.env` file to suits your needs.
3. `yarn install`
4. `yarn run build`

## License

This project is open-source and available under [MIT License](./LICENSE).
