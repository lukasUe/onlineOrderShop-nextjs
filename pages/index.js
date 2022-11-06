import Slider from "../components/Slider"
import ProductList from "../components/ProductList"
import mongodb from "../utils/mongodb"
import Product from "../models/Product"

export default function Home({products}) {
  return (
    <div >
      <Slider />
      <ProductList products={products}/>
    </div>
  )
}

export async function getServerSideProps() {
  await mongodb.dbConnect();
  const products = await Product.find({}).lean();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    }
  }
}
