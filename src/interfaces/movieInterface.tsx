// To parse this data:
//
//   import { Convert, MovieDBNowPlaying } from "./file";
//
//   const movieDBNowPlaying = Convert.toMovieDBNowPlaying(json);

export interface MovieDBNowPlaying {
    dates:         Dates;
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
    En = "en",
    Fi = "fi",
}

// Converts JSON strings to/from your types
export class Convert {
    public static toMovieDBNowPlaying(json: string): MovieDBNowPlaying {
        return JSON.parse(json);
    }

    public static movieDBNowPlayingToJson(value: MovieDBNowPlaying): string {
        return JSON.stringify(value);
    }
}
