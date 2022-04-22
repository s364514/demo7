package com.example.demo7;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController

public class kundeController {

    @Autowired
    KundeRepository rep;

    @GetMapping("/hentFilmer")
    public List<Film> hentfilmer(){
        return rep.hentAlleFilmer();
    }

    @PostMapping("/kunde")
    public void lagrekunde(Kunde innkunde){
        rep.lagrekunde(innkunde);
    }

    @GetMapping("/hentAlle")
    public List<Kunde> hentAlle(){
        return rep.hentAlleKunder();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAllekunder();

    }
}







