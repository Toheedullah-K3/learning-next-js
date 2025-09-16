import Link from "next/link"

export default function ProductList(){

    const productLinks = [
        {name: 'Product 1', slug: '/products/1'}, 
        {name: 'Product 2', slug: '/products/2'}, 
        {name: 'Product 3', slug: '/products/3'}, 
    ]
    return (
        <div>
            {
                productLinks.map(product => (
                    <Link 
                        href={product.slug}
                        key={product.slug}
                    >
                        {product.name}
                    </Link>
                ))
            }
        </div>
    ) 
}