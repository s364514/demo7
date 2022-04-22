
package com.example.demo7;

public class Kunde {
    private String fornavn;
    private String etternavn;
    private String epost;
    private int telefonnr;
    private String film;
    private String dato;
    private int antall;

    public Kunde(String fornavn, String etternavn, String epost, int telefonnr, String film, String dato, int antall) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost=epost;
        this.telefonnr = telefonnr;
        this.film = film;
        this.dato = dato;
        this.antall = antall;
    }

    public Kunde() { }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn; }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn; }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public int getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(int telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getDato() {
        return dato;
    }

    public void setDato(String dato) {
        this.dato = dato;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }
}