import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {
    public peliculas: Pelicula[];

    constructor(){
        this.peliculas=[
            new Pelicula("The figth Club", 1994, "https://updatemexico.com/wp-content/uploads/2019/10/fight-club-banner.jpg"),
            new Pelicula("Se7en", 1993, "https://p4.wallpaperbetter.com/wallpaper/154/682/338/movies-se7en-wallpaper-preview.jpg"),
            new Pelicula("Zodiac", 1998, "https://pelisplus.me/cover/movie/zodiac.png")
        ];
    }
    
    holaMundo() {
        return 'hola mundo';
    }

    getPeliculas() {
        return this.peliculas;
    }
}