import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const CartPage = () => {
  const { cart, clearCart, calculateTotal, countTotalItems } = useCart();

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <h2 style={styles.emptyTitle}>Your Cart is Empty</h2>
        <p style={styles.emptyText}>
          Add some products to get started!
        </p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Cart Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>
          Shopping Cart ({countTotalItems()} items)
        </h2>
        
        <button
          style={styles.clearButton}
          onClick={clearCart}
        >
          Clear All
        </button>
      </div>
      
      {/* Cart Items List */}
      <div style={styles.itemsList}>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      {/* Cart Summary */}
      <div style={styles.summary}>
        <div style={styles.totals}>
          <div style={styles.totalRow}>
            <span>Subtotal:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          
          <div style={styles.totalRow}>
            <span>Shipping:</span>
            <span>$0.00</span>
          </div>
          
          <div style={styles.totalRow}>
            <span>Tax:</span>
            <span>$0.00</span>
          </div>
          
          <div style={styles.grandTotal}>
            <span>Total Amount:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
        
        {/* Checkout Button */}
        <button
          style={styles.checkoutButton}
          onClick={() => {
            alert(`Order placed successfully!\nTotal: $${calculateTotal().toFixed(2)}`);
            clearCart();
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  emptyCart: {
    textAlign: 'center',
    padding: '60px 20px',
    background: '#1a1a1a',
    borderRadius: '12px',
    border: '2px dashed #333',
    marginTop: '40px',
  },
  emptyTitle: {
    color: '#646cff',
    marginBottom: '10px',
    fontSize: '1.8rem',
  },
  emptyText: {
    color: '#888',
    fontSize: '1.1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '2px solid #333',
  },
  title: {
    color: '#646cff',
    margin: '0',
    fontSize: '1.8rem',
  },
  clearButton: {
    background: '#ff9800',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
  itemsList: {
    marginBottom: '30px',
  },
  summary: {
    background: '#1a1a1a',
    borderRadius: '12px',
    padding: '25px',
    border: '1px solid #333',
  },
  totals: {
    marginBottom: '25px',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #333',
    fontSize: '1rem',
  },
  grandTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 0',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#4caf50',
    borderTop: '2px solid #333',
    marginTop: '10px',
  },
  checkoutButton: {
    background: '#4caf50',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    transition: 'background 0.3s',
  },
};

export default CartPage;
