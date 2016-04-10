if (Meteor.isCordova) {

  Template.home.events({
    'click #qrscan': function(e) {
      e.preventDefault()
      var http = /(http)/g // Insert whatever phrase or character you want to find
      var https = /(https)/g // Insert whatever phrase or character you want to find
      cordova.plugins.barcodeScanner.scan(
        function(result) {
          if (!result.cancelled) {
            if (result.format == "QR_CODE") {
              if (http.test(result.text) || https.test(result.text)) {
                window.open(result.text, "_system");
              } else {
                swal({
                  title: "<h4>Isto não é uma URL</h4>",
                  text: "<strong>QRcode:</strong> " + result.text +
                    ". <br>Desejar copiar conteudo?",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#DD6B55",
                  cancelButtonText: "Não",
                  confirmButtonText: "Sim",
                  closeOnConfirm: false,
                  html: true
                }, function(isConfirm) {
                  if (isConfirm) {
                    cordova.plugins.clipboard.copy(result.text);
                    swal("Copiado!",
                      "QRCode copiado!", "success");
                  }
                });

              }

            }
          }
        },
        function(error) {
          sweetAlert("Oops...", "Scanning failed: ");
          //alert("Scanning failed: " + error);
        }
      );

    }

  });

}
