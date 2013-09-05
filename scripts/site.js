// Shrink site title when cramped for space
new Shrink({ target: 'h1.site-title', overflow: '#header', minFontSize: 16 });

// DOM ready
Y.use('node', function(Y) {
  Y.on('domready', function() {

    // Init ImageLoader  
    new Y.Squarespace.Loader({
      img:Y.all('img[data-image]')
    });

    // Keyboard navigation
    Y.on('keydown', function(event) {
      var targetLink = Y.one('a[data-keypress="'+event.keyCode+'"]');
      if (targetLink) {
        event.preventDefault();
        window.location.href = targetLink.getAttribute('href');
      }
    });

  });
});