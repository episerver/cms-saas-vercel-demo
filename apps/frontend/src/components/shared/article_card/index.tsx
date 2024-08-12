import { type FunctionComponent } from "react"

export type ArticleCardData = {}

export type ArticleCardProps = {
    article: ArticleCardData
}

export const ArticleCard : FunctionComponent<ArticleCardProps> = ({ article }) =>
{
    return <div>Article here</div>
}