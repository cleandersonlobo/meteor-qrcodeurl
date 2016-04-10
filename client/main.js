Meteor.startup(function() {

  if (Meteor.isCordova) {
    $(document).on("deviceready", function() {
      if (window.isTablet) {
        screen.lockOrientation('landscape');
      } else {
        screen.lockOrientation('portrait');
      }
    });


  }
})
