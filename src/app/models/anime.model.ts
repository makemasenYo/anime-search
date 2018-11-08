export default interface Anime {
    id: number;
    title: {
        romaji: string,
        english: string
    };
    format: string,
    startDate: {
        year: number,
        month: number,
        day: number
    };
    endDate: {
        year: number,
        month: number,
        day: number
    };
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
    siteUrl: string;
}