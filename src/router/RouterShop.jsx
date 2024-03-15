import { Route, Routes } from "react-router-dom"
import { HomePage, Page404, ProductPage } from "../pages"


export const RouterShop = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>

            <Route path="/product/:id" element={<ProductPage />}></Route>

            <Route path="/*" element={<Page404 />}></Route>
        </Routes>
    )
}