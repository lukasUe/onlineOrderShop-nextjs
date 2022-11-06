// import { useRouter } from "next/router";
// import jsondb from "../../jsonDb/products";
import Link from "next/link";
import Image from "next/image";
import mongodb from "../../utils/mongodb";
import Product from "../../models/Product";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";

export default function Productsite({product}) {
    //const router = useRouter();
    //const { url } = router.query;
    //const product = jsondb.products.find(a => a.url === url);

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
                            <h2 className="text-danger">{product.price} €</h2>
                        </ListGroupItem>
                        <ListGroupItem>
                            {product.description}
                        </ListGroupItem>
                        <ListGroupItem>
                            {product.extras.length ? "Extras:" : <p></p>}
                            {product.extras.map((extra) => (
                                <span key={extra.name}>
                                    {extra.text}<input className="form-check-input me-2" type="checkbox" />
                                </span>
                            ))}
                            {/* Extras:
                            doppelt <input className="form-check-input me-2" type="checkbox" />
                            extra Pommes <input className="form-check-input me-2" type="checkbox" /> */}
                        </ListGroupItem>
                        <ListGroupItem>
                            <input className="form-control w-50" type="number" placeholder="1" min="1"></input>
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
    const product = await Product.findOne({url}).lean();
    return {
      props: {
        product: JSON.parse(JSON.stringify(product))
      }
    }
  }
 