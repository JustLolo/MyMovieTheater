// To parse this data:
//
//   import { Convert, MovieDBNowPlaying } from "./file";
//
//   const movieDBNowPlaying = Convert.toMovieDBNowPlaying(json);
export enum Endpoints {
    now_playing = "/now_playing",
    popular = "/popular",
    top_rated = "/top_rated",
    upcoming = "/upcoming",
};

typeof Endpoints;

export interface MovieDBMoviesResponse {
    dates?:         Dates;
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Movie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    // TODO: check this
    En = "en",
    Fi = "fi",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toMovieDB(json: string): MovieDBMoviesResponse {
        return JSON.parse(json);
    }

    public static movieDBToJson(value: MovieDBMoviesResponse): string {
        return JSON.stringify(value);
    }

    public static toMovie(json: string): Movie {
        return JSON.parse(json);
    }

    public static movieToJson(value: Movie): string {
        return JSON.stringify(value);
    }
}