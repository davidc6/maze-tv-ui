# Maze TV

## Maze TV UI

- To run locally `npm run dev` (runs webpack dev server locally and serves unoptimised assets)
- To build production version (CSS minified, JS uglified) `npm run build` (please note, opening `index.html` from the `public` directory won't load js bundle properly since the setup it's not designed to work in such way)
- To run tests `npm t`

## Project structure

- `public/index.html` - default / home page
- `public/assets/*` - JavaScript and CSS files are located in this directory
- `src/components` - React components are located in this directory
- `src/clients` - all clients are located here (there is only one Maze TV client here at the moment)
- `src/hooks` - all custom hooks live in this directory
- `src/styles` - CSS styles
- `src/utils` - various shared helpers/utilities
- `src/index.tsx` - entry point into the application
- webpack and other configs live in the root directory of the project

## Testing

- I covered one of each types of modules just to demonstrate my testing approach
	- `src/components/pages/home` - page component tests
	- `src/utils` - utilities tests

## Potential improvements

- A better user experience (loader/spinner) when it comes to switching states
- Extract all React inline styles into separate CSS files
- Split webpack into multiple chunks/bundles (e.g. vendors) to serve
- Lazy-load modules (rather than loading all modules at once)
- Hash bundle names
- Use SCSS, to be able to define functions, mixing and variables
- Add client-side telemetry
- Add request timeout
- A local server to serve production assets
- Add linter and prettier

## Comments

- Search endpoint does not allow for embedding episodes: http://api.tvmaze.com/search/shows?q=doctor%20who&embed=episodes

- Single search endpoint allows for embedding episodes: http://api.tvmaze.com/singlesearch/shows?q=doctor%20who&embed=episodes

## References

- TV Maze API - https://www.tvmaze.com/api#search
- https://www.tvmaze.com/shows/210/doctor-who/episodes
