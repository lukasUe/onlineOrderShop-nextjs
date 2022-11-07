// import { useRouter } from "next/router";
// import jsondb from "../../jsonDb/products";
import Link from "next/link";
import Image from "next/image";
import mongodb from "../../utils/mongodb";
import Product from "../../models/Product";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";
import { useState } from "react";

export default function Productsite({ product }) {
    //const router = useRouter();
    //const { url } = router.query;
    //const product = jsondb.products.find(a => a.url === url);

    const [price, setPrice] = useState(product.price);
    const [extras, setExtras] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const addExtra = (e, extra) => {
        const checked = e.target.checked;
        if (checked) {
            setPrice(price + extra.price);
            setExtras([...extras, extra])
        } else {
            setPrice(price - extra.price);
            setExtras(extras.filter((allExtras) => allExtras._id !== extra._id))
        }
    }

    if (!product) {
        return (
            <div>
                <h2>Product nicht vorhanden</h2>
                <Link href="/">
                    <a className="text-dark">
                        &#129044; zurück zur Übersicht
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <div>
            <div>
                <Link href="/">
                    <a className="text-dark">
                        &#129044; zurück zur Übersicht
                    </a>
                </Link>
            </div>
            <div className="row row-cols-2 mt-2">
                <div>
                    <Image className="rounded-3" src={product.image} alt={product.designation} width={600} height={600} layout="responsive" />

                </div>
                <div>
                    <h1>{product.designation}</h1>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h2 className="text-danger">{price.toFixed(2)} €</h2>
                        </ListGroupItem>
                        <ListGroupItem>
                            {product.description}
                        </ListGroupItem>
                        <ListGroupItem>
                            {product.extras.length ? "Extras:" : <p></p>}
                            {product.extras.map((extra) => (
                                <span key={extra._id}>
                                    {extra.text}<input className="form-check-input me-2"
                                        type="checkbox"
                                        id={extra.text}
                                        onChange={(e) => addExtra(e, extra)}
                                    />
                                </span>
                            ))}
                            {/* Extras:
                            doppelt <input className="form-check-input me-2" type="checkbox" />
                            extra Pommes <input className="form-check-input me-2" type="checkbox" /> */}
                        </ListGroupItem>
                        <ListGroupItem>
                            <input className="form-control w-50" type="number" value={quantity} min="1" max="100"
                            onChange={(e) => setQuantity(e.target.value)}
                            ></input>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="row shadow">
                                <Button variant="danger">zum Warenkorb</Button>
                            </div>
                        </ListGroupItem>

                    </ListGroup>
                </div>

            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const url = context.params.url;
    await mongodb.dbConnect();
    const product = await Product.findOne({ url }).lean();
    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}
