import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { collection, onSnapshot } from 'firebase/firestore';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../utilites/firebase';
import { useAuth } from '../hooks/auth';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Cart() {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [subTotal, setSubTotal] = useState();
  const [updatedQty, setUpdatedQty] = useState('');
  const [error, setError] = useState(false);
  const cartPrices = cartItems?.map(
    (x) =>
      (x._document.data.value.mapValue.fields.price.doubleValue ||
        x._document.data.value.mapValue.fields.price.integerValue) *
      x._document.data.value.mapValue.fields.qty.stringValue,
  );
  const cartQty = cartItems?.map((x) =>
    Number(x._document.data.value.mapValue.fields.qty.stringValue),
  );

  useEffect(() => {
    if (cartItems) {
      const totalPrice = cartPrices
        ?.reduce((a, b) => Number(a) + Number(b), 0)
        .toLocaleString();
      setTotalPrice(totalPrice);
    }
    if (cartQty) {
      const subTotal = cartQty?.reduce((a, b) => a + b, 0);
      setSubTotal(subTotal);
    }
  }, [cartPrices, cartItems, cartQty]);

  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, 'customers', user.uid, 'cartItems'),
        (snapshot) => {
          setCartItems(snapshot.docs);
        },
      );
    }
  }, [db, user]);

  return (
    <div>
      <div className="wrapper">
        <Navbar />
        {cartItems.length >= 1 ? (
          <div className="mx-auto bg-[#181A1B] rounded-sm mt-12 max-w-7xl flex-col flex space-y-4">
            <span className="flex justify-between px-5 py-3">
              <p className="text-3xl text-[#DEDBD7]">Shopping Cart</p>
              <p className="relative translate-y-9 text-gray-400">Price</p>
            </span>
            {error ? (
              <p className="text-red-500">
                If you want to set a new qty an item please enter a number
                between 1-30 otherwise you won't set a new qty
              </p>
            ) : (
              ''
            )}
            {cartItems.map((item, idx) => (
              <div
                className="border-t border-[#2a2f34] flex justify-between space-x-2 py-2 px-3"
                key={item._document.data.value.mapValue.fields.id.integerValue}
              >
                <div className="flex space-x-2">
                  <img
                    src={
                      item._document.data.value.mapValue.fields.image
                        .stringValue
                    }
                    alt=""
                    className="w-[100px] h-[150px] rounded-lg md:w-[180px]"
                  />

                  <div className="space-y-2">
                    <p className="text-[#DEDBD7] font-medium text-lg max-w-[150px] md:max-w-sm">
                      {
                        item._document.data.value.mapValue.fields.title
                          .stringValue
                      }
                    </p>
                    <p className="space-x-2">
                      <span className="text-[#DEDBD7] font-medium">
                        Qty:{' '}
                        {
                          item._document.data.value.mapValue.fields.qty
                            .stringValue
                        }
                      </span>
                    </p>
                    <div className="space-x-2 flex">
                      <input
                        type="number"
                        placeholder="New qty"
                        onChange={(e) => setUpdatedQty(e.target.value)}
                        className="w-16 outline-none bg-[#202324] pl-2 rounded-lg text-white text-sm"
                      />
                      <button
                        className="text-[#6FE9FF] hover:underline-offset-1 hover:underline"
                        onClick={() => {
                          if (updatedQty <= 30 && updatedQty >= 1) {
                            updateDoc(
                              doc(
                                db,
                                'customers',
                                user.uid,
                                'cartItems',
                                String(
                                  item._document.data.value.mapValue.fields.id
                                    .integerValue,
                                ),
                              ),
                              {
                                qty: updatedQty,
                              },
                            );
                            setError(false);
                          } else {
                            setError(true);
                          }
                        }}
                      >
                        Update qty
                      </button>
                      <span className="text-white/20">l</span>
                      <button
                        className="text-[#6FE9FF] hover:underline-offset-1 hover:underline"
                        onClick={() => {
                          deleteDoc(
                            doc(
                              db,
                              'customers',
                              user.uid,
                              'cartItems',
                              String(
                                item._document.data.value.mapValue.fields.id
                                  .integerValue,
                              ),
                            ),
                          );
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pr-2 text-[#DEDBD7] font-bold text-lg">
                  <span>
                    $
                    {item._document.data.value.mapValue.fields.price
                      .doubleValue ||
                      item._document.data.value.mapValue.fields.price
                        .integerValue}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-t self-end pr-2 flex space-x-2 h-[20vh] md:h-[45vh] lg:h-[5vh]">
              <div className="flex space-x-2">
                {cartItems && (
                  <p className="text-[#DEDBD7] font-bold text-base translate-y-0.5">
                    Subtotal({subTotal} items):{' '}
                  </p>
                )}
                {totalPrice && (
                  <p className="text-[#DEDBD7] font-bold text-xl">
                    ${totalPrice}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto text-white rounded-sm mt-12 max-w-5xl flex-col flex">
            <p className="text-3xl">
              There are no items in your cart, if you want to add something,
              click home{' '}
              <Link
                to="/home"
                className="text-blue-500"
              >
                Home
              </Link>
            </p>
          </div>
        )}
        <div className="lg:bottom-0 w-full mt-10 lg:absolute">
          <Footer />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Cart;
