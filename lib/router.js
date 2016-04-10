Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    nav: {
      to: 'nav'
    },
    footer: {
      to: 'footer'
    }
  }
});
Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('sobre', {
    yieldTemplates: {
      navsobre: {
        to: 'navsobre'
      },
      footer: {
        to: 'footer'
      }
    }
  });
})
