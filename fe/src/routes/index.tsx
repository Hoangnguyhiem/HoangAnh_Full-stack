import DashboardPage from "@/pages/(dashboard)/dashboard/page";
import LayoutAdmin from "@/pages/(dashboard)/layout";
import ProductManagementPage from "@/pages/(dashboard)/product/page";
import ErrorPage from "@/pages/(website)/404/page";
import Signin from "@/pages/(website)/auth/signin";
import Signup from "@/pages/(website)/auth/signup";
import Banner from "@/pages/(website)/home/_components/Banner";
import HomePage from "@/pages/(website)/home/page";
import LayoutWebsite from "@/pages/(website)/layout";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutWebsite/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="productslist" element={<Banner />}/>
                    <Route path="signin" element={<Signin />}/>
                    <Route path="signup" element={<Signup />}/>

                </Route>
                <Route path="admin" element={<LayoutAdmin/>}>
                    <Route index element={<DashboardPage/>}/>
                    <Route path="products" element={<ProductManagementPage/>}/>
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default Router;
