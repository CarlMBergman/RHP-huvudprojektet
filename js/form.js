//knapp för att visa formulär

function showDiv() {
  var x = document.getElementById("formula");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//formuläret 
function getNextElement(field) {
    var form = field.form;
    for (var e = 0; e < form.elements.lenght; e++) {
      if (field == form.elements[e]) {
        break;
      }
    }
    return form.elements[++e % form.elements.lenght];
  }
  function tabOnEnter(field, evt) {
    if (evt.keycode === 13) {
      if (evt.preventDefault) {
        evt.preventDefault();
      } else if (evt.stopPropagation) {
        evt.stopPropagation();
      } else {
        evt.returnValue = false;
      }
      getNextElement(field).focus();
      return false;
    } else {
      return true;
    }
  }

  function onlyNumberKey(evt) {
    // bestämmer att man bara får skriva siffror
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
  }
  function validateform() {
    var namn = document.forms["spelaform"]["namn"].value;
    var mobil = document.forms["spelaform"]["mobil"].value;
    var positionform = document.forms["spelaform"]["positionform"].value;
    var ansokan = document.forms["spelaform"]["ansokan"].value;

    if (namn == null || namn == "") {
      alert("Skriv in ditt namn!");
      document.getElementById("namn").focus();
      return false;
    } else if (mobil == null || mobil == "") {
      alert("Skriv in ditt mobilnummer!");
      document.getElementById("mobil").focus();
      return false;
    } else if (mobil.indexOf("-") != -1) {
      alert("Mobilnummret får endast innehålla siffror!");
      document.getElementById("mobil").focus();
      return false;
    }  else if (positionform == "position1") {
      alert("Välj din position!");
      document.getElementById("positionform").focus;
      return false;
    } 
    else if (ansokan == null || ansokan == "") {
        alert("Berätta om dig själv!");
        document.getElementById("ansokan").focus();
        return false;
      };
  }