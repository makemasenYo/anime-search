import AnimeDate from "./anime-date.model";

export default interface Anime {
    id: number;
    title: {
        romaji: string,
        english: string
    };
    format: string,
    startDate: AnimeDate;
    endDate: AnimeDate;
    nextAiringEpisode?: {
        episode: number
    };
    episodes: number;
    duration: number;
    coverImage: {
        large: string,
        medium: string
    };
    genres: string[];
    trailer: {
        id: string,
        site: string
    };
    siteUrl: string;
}