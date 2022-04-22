package com.example.demo7;

public class Film {
    String film;
    String dato;

    public Film(String film, String dato) {
        this.film = film;
        this.dato = dato;
    }
    public Film(){

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
}
