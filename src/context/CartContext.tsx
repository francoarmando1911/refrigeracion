import { createContext, useContext, useCallback, useMemo, useState } from 'react';
import type { Product, CartItem, ProductID } from '../types/types';

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: ProductID) => void;
    increaseQuantity: (id: ProductID) => void;
    decreaseQuantity: (id: ProductID) => void;
    clearCart: () => void;
    isEmpty: boolean;
    cartTotal: number;
    cartItemsCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>(() => {
        try {
            return JSON.parse(localStorage.getItem('cart') || '[]');
        } catch (error) {
            console.error('Error loading cart:', error);
            return [];
        }
    });

    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;

    const updateCart = useCallback((updater: (prev: CartItem[]) => CartItem[]) => {
        setCart(prev => {
            const newCart = updater([...prev]); // Usa una copia del estado anterior
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        });
    }, []);

    const addToCart = useCallback((product: Product) => {
        updateCart(prev => {
            const existingIndex = prev.findIndex(item => item.id === product.id);
            if (existingIndex >= 0) {
                const updatedItem = {
                    ...prev[existingIndex],
                    quantity: Math.min(prev[existingIndex].quantity + 1, MAX_ITEMS)
                };
                const newCart = [...prev];
                newCart[existingIndex] = updatedItem;
                return newCart;
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }, [updateCart]);

    const removeFromCart = useCallback((id: ProductID) => {
        updateCart(prev => prev.filter(item => item.id !== id));
    }, [updateCart]);

    const increaseQuantity = useCallback((id: ProductID) => {
        updateCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.min(item.quantity + 1, MAX_ITEMS) }
                    : item
            )
        );
    }, [updateCart]);

    const decreaseQuantity = useCallback((id: ProductID) => {
        updateCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity - 1, MIN_ITEMS) }
                    : item
            )
        );
    }, [updateCart]);

    const clearCart = useCallback(() => updateCart(() => []), [updateCart]);

    // Valores calculados con useMemo para optimización
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() =>
        cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        [cart]
    );
    const cartItemsCount = useMemo(() =>
        cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
            isEmpty,
            cartTotal,
            cartItemsCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('Use CartProvider!');
    return context;
};