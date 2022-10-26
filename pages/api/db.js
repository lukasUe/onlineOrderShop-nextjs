// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongodb from "../../utils/mongodb"
import jsondb from "../../jsonDb/products";
import Product from "../../models/Product";

export default async function handler(req, res) {
  await mongodb.dbConnect();

  await Product.deleteMany();
  await Product.insertMany(jsondb.products);

  await mongodb.dbDisconnect();
  res.send(200)({ text: 'Daten gespeichert' })
}


