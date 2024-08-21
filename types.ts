export type CardsApiResponse = CardFromApi[]

interface CardFromApi {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}
