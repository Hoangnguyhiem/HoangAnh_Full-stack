import { Router } from "express";
import {
    create,
    deleteCategoryById,
    getAll,
    getCategoryById,
    updateCategoryById,
} from "../controllers/category.js";

const router = Router();
router.get("/", getAll);
router.get("/:id", getCategoryById);
router.delete("/:id", deleteCategoryById);
router.put("/:id", updateCategoryById);
router.post("/add", create);
export default router;
