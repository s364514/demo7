CREATE TABLE Kunde
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    fornavn  VARCHAR (255) NOT NULL,
    etternavn VARCHAR (255) NOT NULL,
    epost VARCHAR (255) NOT NULL,
    telefonnr int,
    antall int,
    film VARCHAR NOT NULL,
    DATO VARCHAR NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE Film
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    film VARCHAR (255) NOT NULL,
    dato VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
)
