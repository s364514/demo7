package com.example.demo7;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KundeRepository {
    @Autowired
    private JdbcTemplate db;
    private Logger logger = LoggerFactory.getLogger(KundeRepository.class);


    public void lagrekunde(Kunde innkunde){
        String sql = "Insert Into Kunde (fornavn,etternavn,epost,telefonnr,antall,film,dato) VALUES(?,?,?,?,?,?,?)";
        db.update(sql, innkunde.getFornavn(),innkunde.getEtternavn(), innkunde.getEpost(),innkunde.getTelefonnr()
        ,innkunde.getAntall(),innkunde.getFilm(),innkunde.getDato());
    }
    public List<Kunde> hentAlleKunder(){
        String sql = "SELECT* FROM Kunde";
        List<Kunde> alleKunder = db.query(sql, new BeanPropertyRowMapper(Kunde.class));
        return alleKunder;
    }
    public List<Film> hentAlleFilmer(){
        String sql = "SELECT * FROM Film";
        return db.query(sql,new BeanPropertyRowMapper(Film.class));
    }
    public void slettAllekunder(){
        String sql = "DELETE FROM Kunde";
        db.update(sql);

    }

}
