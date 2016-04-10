Template.footer.rendered = function() {

  Deps.autorun(function() {
    $('.link-footer').removeClass('active-tab')
    $('#' + Router.current().route.getName() + ' .link-footer').addClass(
      'active-tab');
    $('#' + Router.current().route.getName() + ' .link-footer').hover(
      function() {
        $(this).css('color', '');
      });
  });


}
