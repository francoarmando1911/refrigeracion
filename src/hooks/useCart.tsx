import { useState, useEffect, useMemo } from 'react';
import { products } from '../data/discounts';
import type { Product, CartItem, ProductID } from '../types/types';

const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const useCart = (type: string) => {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        const filteredProducts = products.filter(product => product.category === type);
        setData(filteredProducts);
        console.log("Filtered products for type", type, filteredProducts);
    }, [type]);

    const [cart, setCart] = useState<CartItem[]>(initialCart);

    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(item: Product) {
        const itemExist = cart.findIndex((product) => product.id === item.id);

        if (itemExist >= 0) {
            if (cart[itemExist].quantity >= MAX_ITEMS) return;
            const updatedCart = cart.map((product, index) =>
                index === itemExist
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );
            setCart(updatedCart);
        } else {
            const newItem: CartItem = { ...item, quantity: 1 };
            setCart([...cart, newItem]);
        }
    }

    function removeFromCart(id: ProductID) {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    }

    function increaseQuantity(id: ProductID) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
        setCart(updatedCart);
    }

    function decreaseQuantity(id: ProductID) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });
        setCart(updatedCart);
    }

    function clearCart() {
        setCart([]);
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.quantity * item.price, 0), [cart]);

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    };
};