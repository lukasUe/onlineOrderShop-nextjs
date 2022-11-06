import { Card, Button } from "react-bootstrap"
import Link from "next/link"

export default function ProductList({products}) {
    return (
        <div >
            <div className="row row-cols-3">
                {products?.map((product) => (
                    <div key={product.designation} className="mt-3 col">
                        <Card>
                            <Link href={`/products/${product.url}`} passHref>
                                <a>
                                    <Card.Img variant="top" src={product.image} />
                                </a>
                            </Link>
                            <Card.Body>
                                <Card.Title>
                                    {product.designation} {product.price}€
                                </Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button variant="danger">zum Warenkorb</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <br></br>
        </div>
    )
}