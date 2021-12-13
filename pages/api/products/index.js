import nc from 'next-connect';
import db from '../../../utils/db'
import Product from '../../../models/Product'

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    // let r = await mongoose.connection.db.dropCollection('Product');
    const products = await Product.find({})
    await db.disconnect();
    res.send(products)
});

export default handler;