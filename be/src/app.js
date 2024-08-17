import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { connectDB } from "./config/db";
import authRouter from "./routers/auth";
import productRouter from "./routers/product";
import categoryRouter from "./routers/category";
import cartRouter from "./routers/cart";
import orderRouter from "./routers/order";
import attribute from "./routers/attribute";
import { ValueAttributeModel } from "./models/attribute";
import AttributeSchema from "./models/attribute"
import Product from "./models/product"
const app = express();
dotenv.config();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect db

const dbURL = process.env.DB_URI
connectDB(dbURL);
// mongodb+srv://vinsomatem97:vinsomatem97@mlb.jo6kt.mongodb.net/?retryWrites=true&w=majority&appName=MLB
// routers
app.use("/api", authRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", cartRouter);
app.use("/api", orderRouter);
app.use("/api", attribute);
// app.use('/products/:productId/:valueAttributeId', async (req, res) => {
//     const { productId, valueAttributeId } = req.params;

//     if (!productId || !valueAttributeId) {
//         return res.status(400).json({ message: 'Product ID and ValueAttribute ID are required' });
//     }

//     try {
//         // Tìm sản phẩm theo productId và populate các thuộc tính
//         const product = await Product.findById(productId)
//             .populate({
//                 path: 'attributes',
//                 populate: {
//                     path: 'values',
//                     match: { _id: valueAttributeId } // Tìm `ValueAttribute` theo `_id`
//                 }
//             })
//             .exec();

//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         // Lọc các thuộc tính của sản phẩm để giữ lại những giá trị cần tìm
//         const filteredAttributes = product.attributes.filter(attribute =>
//             attribute.values.some(value => value._id.toString() === valueAttributeId)
//         );

//         // Cập nhật sản phẩm để chỉ chứa các thuộc tính đã lọc
//         product.attributes = filteredAttributes;

//         if (product.attributes.length === 0) {
//             return res.status(404).json({ message: 'No matching attributes found for this product' });
//         }

//         res.json(product);
//     } catch (error) {
//         console.error('Error finding product:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });
// app.use('/products/:id/search', async (req, res) => {
//     const { color, size } = req.query;

//     console.log(color, size)

//     try {
//         // Tìm các giá trị của color và size
//         const products = await Product.findById({_id:req.params.id})
//             .populate({
//                 path: 'attributes',
//                 populate: {
//                     path: 'values',
//                     match: {
//                         color: color,
//                         size: size
//                     }
//                 }
//             })
//             .exec();

//         // // Lọc các sản phẩm chứa giá trị phù hợp
//         // const filteredProducts = products.filter(product =>
//         //     product.attributes.some(attribute =>
//         //         attribute.values.some(value =>
//         //             value.color === color && value.size === size
//         //         )
//         //     )
//         // );

//         // if (filteredProducts.length === 0) {
//         //     return res.status(404).json({ message: 'No products found' });
//         // }

//         res.json(products);

//     } catch (error) {
//         console.error('Error finding products:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });


export const viteNodeApp = app;
