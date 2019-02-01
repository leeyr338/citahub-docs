window.onload = () => {
  const navs = document.querySelector('.nav-site.nav-site-internal')
  const lng = document.querySelector('.nav-site.nav-site-internal>span')
  const searchBar = document.createElement('div')
  const searchInput = document.createElement('div')
  const hitBar = document.createElement('div')
  searchBar.className = 'searchBar'
  searchInput.id = 'searchInput'
  hitBar.id = 'hits'
  hitBar.className = "hits"
  searchBar.append(searchInput)
  searchBar.append(hitBar)
  navs.insertBefore(searchBar, lng)

  const insSearch = instantsearch({
    indexName: 'citahub-docs',
    searchClient: algoliasearch('K49G7V3FTS', '3b32efa6eb6511b7508c87df5c011d29'),
  });

  insSearch.addWidget(
    instantsearch.widgets.searchBox({
      container: '#searchInput',
    })
  );

  insSearch.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      transformItems: items => items.map(item => {
        console.log(item)
        return item
      }),
      templates: {
        empty: 'No Result',
        item: `
        <div class="hit">
          <span class="name">
            <a href="{{url}}" alt="{{anchor}}" >
              {{ content }}
            </a>
          </span>
        </div>
      `,
      },
    })
  );


  insSearch.start();
}
