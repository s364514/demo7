$(function(){  // kjøres når dokumentet er ferdig lastet
    hentalleFilmer();
    hentAlle();
});

function hentalleFilmer(){
    $.get("/hentFilmer",function (filmer){
        formaterFilmer(filmer)
    })
}
function formaterFilmer(filmer){
    let ut = "<select id='valgtFilm' onchange='finnDato()'>";
    let forrigeFilm = "";
    ut+="<option> Velg Film</option>";

    for(const f of filmer){
        if(f.film!=forrigeFilm){
            ut+="<option>"+ f.film + "</option>";
        }
        forrigeFilm = f.film;
    }
    ut+="</select>";
    $("#film").html(ut)
}
function finnDato(){
    const valgtFilm = $("#valgtFilm").val();
    $.get( "/hentFilmer", function( filmer ) {
        formaterDato(filmer,valgtFilm);
    });
}
function formaterDato(filmer,valgtFilm){
    let ut = "<select id='valgtDato'>";
    for(const f of filmer ){
        if(f.film === valgtFilm){
            ut+="<option>"+ f.dato + "</option>";
        }
    }
    ut+="</select>";
    $("#dato").html(ut);
}

function hentkunde(){
    const kunde = {
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        epost: $("#epost").val(),
        telefonnr: $("#telefonnr").val(),
        film: $("#valgtFilm").val(),
        dato: $("#valgtDato").val(),
        antall: $("#antall").val(),

    };


    $.post("/kunde", kunde, function (){
        hentAlle();
    });

    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#epost").val("");
    $("#telefonnr").val("");
    $("#valgtFilm").val("Velg film");
    $("#valgtDato").val("");
    $("#antall").val("");
}

function hentAlle(){
    $.get("/hentAlle", function(kunde) {
        formaterData(kunde)
    });
}

function formaterData(kunde){

    let ut = "<table class='table table-striped'><tr>" +
        "<th>FORNAVN</th>" +
        "<th>ETTERNAVN</th>"+
        "<th>EPOST</th>" +
        "<th>TELEFONNR</th>"+
        "<th>Film</th>" +
        "<th>Dato</th>"+
        "<th>Antall</th>"+
        "</tr>"

    for (const k of kunde) {
        ut += "<tr><td>" + k.fornavn +
            "</td>" + "<td>" + k.etternavn + "</td>" +
            "<td>" + k.epost + "</td>" +
            "<td>" + k.telefonnr + "</td>" +
            "<td>" + k.film + "</td>" +
            "<td>" + k.dato + "</td>" +
            "<td>" + k.antall + "</td></tr>";
    }
    ut+="</table>"
    $("#utvei").html(ut)
}
function slettEnKunde(telefonnr){
    const url = "/slettEnKunde?telefonnr="+ telefonnr;
    $.get(url,function (){
        window.location.href = "/"
    })
}
function slettAlle() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}


