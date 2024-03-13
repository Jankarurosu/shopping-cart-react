import React, { useContext } from "react";
import { ContextCart } from "../context/ContextCart";

export const Modal = ({ onClose }) => {
    const { cartShopping, removeProductCart } = useContext(ContextCart);

    const handleRemoveProduct = (productId) => {
        removeProductCart(productId);
    };

    const totalPrice = cartShopping.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const hasItemsInCart = cartShopping.length > 0;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="pt-10">
                                <h1 className="mb-10 text-center text-2xl font-bold">Carrito de productos</h1>
                                {hasItemsInCart && (
                                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                                        <div className="rounded-lg md:w-2/3">
                                            {cartShopping.map((item, index) => (
                                                <div key={index} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                                    <img src={item.image} alt={item.title} className="w-full rounded-lg sm:w-40 sm:h-[150px]" />
                                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                        <div className="mt-5 sm:mt-0">
                                                            <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                                                            <p className="mt-1 text-xs text-gray-700 font-medium">⭐ {item.rating.rate}</p>
                                                        </div>
                                                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                            <div className="flex items-center border-gray-100">
                                                                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.quantity} min="1" />
                                                                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                                            </div>
                                                            <div className="flex items-center space-x-4">
                                                                <p className="text-sm">S/.{item.price}</p>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" onClick={() => handleRemoveProduct(item.id)}>
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                                            <div className="mb-2 flex justify-between">
                                                <p className="text-gray-700">Subtotal</p>
                                                <p className="text-gray-700">S/.{totalPrice.toFixed(2)}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-gray-700">Envío</p>
                                                <p className="text-gray-700">S/.4.99</p>
                                            </div>
                                            <hr className="my-4" />
                                            <div className="flex justify-between">
                                                <p className="text-lg font-bold">Total</p>
                                                <div className="">
                                                    <p className="mb-1 text-lg font-bold">S/.{(totalPrice + 4.99).toFixed(2)} PEN</p>
                                                    <p className="text-sm text-gray-700">incluido IVA</p>
                                                </div>
                                            </div>
                                            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Verificar</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={onClose}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
