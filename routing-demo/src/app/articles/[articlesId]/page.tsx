export default async function ArticleId({ params, searchParams } : {
    params: Promise<{articlesId: string}>
    searchParams: Promise<{lang?: "en" | "ur" | "ps"}>
}) {

    const { articlesId } = await params
    const { lang = "en" } = await searchParams

    

    return (
        <>
            <h1>Article: {articlesId}</h1>
            <h2>Language: {lang} </h2>
        </>
    )
}