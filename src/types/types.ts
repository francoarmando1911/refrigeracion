export type ProductID = number;

export interface Product {
    id: ProductID;
    name: string;
    price: number;
    category: string;
    discount?: number;
    imageUrl: string;
    quantity: number;
}

export interface CartItem extends Product {
    id: ProductID;
    name: string;
    price: number;
    quantity: number;
}

export type CartProps = {
    cart: CartItem[];
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
    cartTotal: number;
    isEmpty: boolean;
    onClose: () => void;
};

export interface HeaderProps {
    cart: CartItem[];
    removeFromCart: (id: ProductID) => void;
    increaseQuantity: (id: ProductID) => void;
    decreaseQuantity: (id: ProductID) => void;
    clearCart: () => void;
    showCart: boolean;
    cartTotal: number;
    isEmpty: boolean;
    toggleCart: () => void;
    cartItemsCount: number;
}

