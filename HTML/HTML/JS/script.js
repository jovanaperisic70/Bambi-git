$(document).ready(function () {
    var currentDate = new Date();
    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var fullDate = day + "." + month + "." + year;
    var date = document.getElementById("datumjs");
    date.innerHTML = " " + fullDate;
  });

  $('#form').validate({
    rules: {
        ime: {
            required: true,
            minlength: 3
        },        
        email: {
                required: true,
                email:true
        },
        sifra: {
                required: true,
                minlength: 5 		
        }
    },
    messages: {
        ime: {
            required: "Unesite ime!",
            minlength: "Ime mora imati minimalno 3 karaktera!"
        },
        email: {
            required: "Unesite email!",
            email: "E-mail mora biti validan!"
        },
        sifra: {
            required: "Unesite lozinku!",
            minlength: "Lozinka mora da ima minimalno 5 karaktera!"
        }
    }
 });

function myFunction() {
    var myWindow = window.open("", "Iznenadjenje", "width=200,height=100");
    myWindow.document.write("<p>Danas imamo posebnu akciju za vas, ukoliko kupite 1kg plazme dobijate posudu gratis!</p>");
}