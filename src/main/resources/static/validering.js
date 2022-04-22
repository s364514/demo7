function validerFornavn(fornavn){
    const regexp = /^[a-zæøåA-ZÆØÅ.]{2,25}$/;
    altOk = regexp.test(fornavn)
    if(!altOk){
        $("#feilfornavn").html("fornavn må bestå av 2-25 bokstaver")
        return false
    }
    else{
        $("#feilfornavn").html("")
        return true
    }

}
function validerEtternavn(etternavn){
    const regexp = /^[a-zæøåA-ZÆØÅ.]{2,25}$/;
    altOK = regexp.test(etternavn)
    if(!altOK){
        $("#feiletternavn").html("Etternavn må bestå av 2-25 boskatver")
        return false
    }
    else {
        $("#feiletternavn").html("")
        return true
    }
}

function validerEpost(epost){
    const regexp = /^[0-9 a-zæøåA-ZÆØÅ.@]{0,30}$/;
    altOK = regexp.test(epost)
    if(!altOK){
        $("#feilepost").html("Feil! du har skrevet inn uriktig tegn/bokstaver")
        return false
    }
    else{
        $("#feilepost").html("")
        return true
    }


}
function validertelefonnr(telefonnr){
    const regexp = /^[0-9]{8,}$/;
    altOK = regexp.test(telefonnr)
    if(!altOK){
        $("#feiltelefonnr").html("telefonnr kan bare bestå av 8 tall")
        return false
    }
    else{
        $("#feiltelefonnr").html("")
    }



}
