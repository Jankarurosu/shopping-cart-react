import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const ContextCart = createContext()


export const ProviderContext = ({ children }) => {

    const [cartShopping, setCartShopping] = useState([])

    const addProductCart = (product) => {

        const existProduct = cartShopping.find((item) => item.id === product.id)

        Swal.fire({
            title: "¡Bien Hecho!",
            text: "Producto Agregado Correctamente",
            icon: "success"
        });


        if (existProduct) {

            const newProduct = {
                ...product,
                quantity: existProduct.quantity + 1
            }

            const updateCarrito = cartShopping.map((item) => (
                item.id === existProduct.id ? newProduct : item
            ))
            setCartShopping(updateCarrito)
        } else {

            const newProduct = {
                ...product,
                quantity: 1
            }
            setCartShopping([...cartShopping, newProduct])
        }
    }

    const removeProductCart = (productId) => {
        const updatedCart = cartShopping.filter((item) => item.id !== productId)
        setCartShopping(updatedCart);
    }


    return (
        <ContextCart.Provider value={{ addProductCart, removeProductCart, cartShopping }}>
            {children}
        </ContextCart.Provider>
    )
}