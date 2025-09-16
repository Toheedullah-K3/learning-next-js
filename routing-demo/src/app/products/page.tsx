"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProductList() {
    const router = useRouter()

    const productLinks = [
        { name: 'Product 1', slug: '/products/1' },
        { name: 'Product 2', slug: '/products/2' },
        { name: 'Product 3', slug: '/products/3' },
    ]

    const handleClicled = () => {
        router.push('/')
    }
    return (
        <div>
            {
                productLinks.map(product => (
                    <Link
                        style={{
                            fontSize: 22,
                            color: "black",
                            marginRight: 20
                        }}
                        href={product.slug}
                        key={product.slug}
                    >
                        {product.name}
                    </Link>
                ))
            }

            <button onClick={handleClicled}> Place Order </button>
        </div>
    )
}