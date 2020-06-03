/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  '9JJSSMOF8Q',
  '1ee6a3f362d0613b2ba2336f7c542ea9'
);

const search = instantsearch({
  indexName: 'games',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <align="left" alt="{{name}}" />
          <div class="hit-name">
            {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "genre" }{{/helpers.highlight}}
          </div>
          <div class="episodes">Episodes: {{episodes}}</div>
          <div class="Rating">Score: {{rating}}</div>
        </div>
      `,
    },
  })
]);
// After the `searchBox` widget
search.addWidgets([
  
  instantsearch.widgets.currentRefinements({
    container: '#current-refinements',
  }),

  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'genre',
    autoHideContainer: false,
    templates: {
      header: "Genres"
    }
  })
]);

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
); 

search.start();
