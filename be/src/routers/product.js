import { Router } from "express";
import {
    create,
    deleteProductById,
    getAllProducts,
    getProductById,
    related,
    updateProductById,
} from "../controllers/product.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Router();
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/:categoryId/related/:productId", related);
router.delete("/:id", deleteProductById);
router.put("/:id", updateProductById);
router.post("", create);
export default router;
