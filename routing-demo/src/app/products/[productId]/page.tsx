import { Metadata } from "next"

type Props = {
    params: Promise<{productId: string}>
}

export const generateMetadata = async ({ params } : Props) : Promise<Metadata> => {
    const id = (await params).productId
    return {
        title: `Product ${id}`
    }
}


export default async function ProductDetails({
    params,
}: Props){

    const id = (await params).productId
    return (
        <h2>
            Detail about Product {id}
        </h2>
    )                                     
}