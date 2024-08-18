import { Router } from "express";
import {
    updateProductQuantity,
    addItemToCart,
    getCartByUserId,
    removeFromCart,
} from "../controllers/cart.js";

const router = Router();

// lấy danh sách sản phẩm trong giỏ hàng dựa vào ID
router.get("/:userId", getCartByUserId);
// Thêm sản phẩm vào giỏ hàng
// Cập nhật số lượng của sản phẩm trong giỏ hàng từ input
router.post("/add-to-cart", addItemToCart);
// Cập nhật số lượng của sản phẩm trong giỏ hàng từ button
router.put("/update", updateProductQuantity);
// Xóa item trong giỏ hàng
router.post("/remove", removeFromCart);

export default router;
