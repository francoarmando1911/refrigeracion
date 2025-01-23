import { useState, useEffect, useMemo } from 'react';
import type { Product, CartItem, ProductID } from '../types/types';

const initialCart = (): CartItem[] => {
    if (typeof window === 'undefined') return [];
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>(() => initialCart());
    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(product => product.id === item.id);

            if (existingItem) {
                if (existingItem.quantity >= MAX_ITEMS) return prevCart;
                return prevCart.map(product =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            }

            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id: ProductID) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const increaseQuantity = (id: ProductID) => {
        setCart(prev => prev.map(item =>
            item.id === id && item.quantity < MAX_ITEMS
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decreaseQuantity = (id: ProductID) => {
        setCart(prev => prev.map(item =>
            item.id === id && item.quantity > MIN_ITEMS
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    const clearCart = () => setCart([]);

    const cartItemsCount = useMemo(() =>
        cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() =>
        cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        [cart]
    );

    return {
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal,
        cartItemsCount
    };
};