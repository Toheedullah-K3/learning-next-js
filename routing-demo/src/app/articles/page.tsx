import Link from "next/link"

export default function Articles() {
    return (
        <>
            <h1> Articles </h1>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "aliceblue",
                gap: 40
            }}>
                
                <Link 
                    style={{
                        fontSize: 22,
                        color: "black",
                        marginRight: 20
                    }} 
                    href={`/articles/2025-News?lang="en"`}
                > English Articles </Link>

                <Link 
                    style={{
                        fontSize: 22,
                        color: "black",
                        marginRight: 20
                    }}
                    href={`/articles/2025-News?lang="ur"`}
                > Urdu Articles </Link>

                <Link 
                    style={{
                        fontSize: 22,
                        color: "black",
                        marginRight: 20
                    }} 
                    href={`/articles/2025-News?lang="ps"`}
                > Pashto Articles </Link>
            </div>
        </>


    )
}