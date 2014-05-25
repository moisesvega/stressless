  function showDialog() {
    return $(function() {
      $( "#dialog-confirm" ).dialog({
        resizable: false,
        height:140,
        modal: true,
        buttons: {
          "Ok": function() {
          	window.view = true;
            $( this ).dialog( "close" );
            setIntervalAndExecute();
          }
        }
      });
    });
  }
  function setIntervalAndExecute() {
    return(setTimeout(function() { 
      $(function() {
        $( "#dialog-confirm" ).dialog({
          resizable: false,
          height:140,
          modal: true,
          buttons: {
            "Si": function() {
              $( this ).dialog( "close" );
            },

            "No": function() {
              $( this ).dialog( "close" );
              $('#globo').click();
              var res = document.URL.split("#");
              window.location.href = res[0] + "#/globo";
            }
          }
        });
      });
    }, 7000));
  }