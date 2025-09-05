export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productId: string }>
}){

    const id = (await params).productId
    return (
        <h2>
            Detail about Product {id}
        </h2>
    ) 
}