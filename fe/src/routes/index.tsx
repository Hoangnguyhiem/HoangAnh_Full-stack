import DashboardPage from "@/pages/(dashboard)/dashboard/page";
import LayoutAdmin from "@/pages/(dashboard)/layout";
import ProductManagementPage from "@/pages/(dashboard)/product/page";
import ErrorPage from "@/pages/(website)/404/page";
import Signin from "@/pages/(website)/auth/signin";
import Signup from "@/pages/(website)/auth/signup";
import CartPage from "@/pages/(website)/cart/page";
import DetailPage from "@/pages/(website)/detail/productsDetail";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import ListPage from "@/pages/(website)/list/page";
import PayPage from "@/pages/(website)/pay/page";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        // ĐĂNG NHẬP ĐỂ THÊM VÀO GIỎ HÀNG
        // tài khoản: lhoanganh814@gmail.com
        // mật khẩu : HoanganhDz2004
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite/>}>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route index element={<ListPage />}/>
                    <Route path="products/:productId" element={<DetailPage />}/>
                    <Route path="products/pay" element={<PayPage />}/>
                    <Route path="carts/:userId" element={<CartPage />}/>
                    <Route path="signin" element={<Signin />}/>
                    <Route path="signup" element={<Signup />}/>
                </Route>
               
                    {/* <Route path="error" element={<ErrorPage />}/> */}
                <Route path="admin" element={<LayoutAdmin/>}>
                    <Route index element={<DashboardPage/>}/>
                    <Route path="products" element={<ProductManagementPage/>}/>
                </Route>
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </>
    );
};

export default Router;
