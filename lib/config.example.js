module.exports = {
    themeConfig: {
      sidebar: {
        '/foo/': [
          '',     /* /foo/ */
          'one',  /* /foo/one.html */
          'two'   /* /foo/two.html */
        ],
  
        '/bar/': [
          '',      /* /bar/ */
          'three', /* /bar/three.html */
          'four'   /* /bar/four.html */
        ],
  
        '/baz/': 'auto', /* automatically generate single-page sidebars */
  
        // fallback
        '/': [
          '',        /* / */
          'contact', /* /contact.html */
          'about'    /* /about.html */
        ]
      }
    }
  }