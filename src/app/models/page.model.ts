import Anime from "./anime.model";
import PageInfo from "./page-info.model";

export default interface Page {
    media: Anime[];
    pageInfo: PageInfo;
}