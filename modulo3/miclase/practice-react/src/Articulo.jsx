import CardArticle from "./CardArticle";
import { getStorageArray } from "./utils";


export default function Articulos() {
    const articles = getStorageArray('articles');
    const cardArticles = articles.map((art, i) => <CardArticle article={art} key={i} />)

    return (
        <div>
            {cardArticles}
        </div>
    );
}
