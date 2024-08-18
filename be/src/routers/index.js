// import authRouter from "./auth.js";
import { Router } from "express";
import productRouter from "./product.js";
import categoryRouter from "./category.js";
import cartRouter from "./cart.js";
// import orderRouter from "./order.js";
import attribute from "./attribute.js";
import auth from "./auth.js";


const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});

// router.use("/", authRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/carts", cartRouter);
// router.use("/", orderRouter);
router.use("/attributes", attribute);
router.use("/auth", auth);

export default router;