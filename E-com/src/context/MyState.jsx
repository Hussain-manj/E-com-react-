import { useEffect, useState } from "react";
import myContext from "./MyContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query, 
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);
  const [getAllProducts, setGetAllProducts] = useState([]);

  // getAllProducts function
  const getAllProductsFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProducts(productsArray);
        setLoading(false);
      });
      return data;
    } catch (error) {
      console.log(error, "error in getAllProducts function");
      setLoading(false);
    }
  };


 
    const [getAllOrders, setGetAllOrders] = useState([]);

     /**========================================================================
      * Get All Orders
     *========================================================================**/

     const getAllOrdersFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "order"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let orderArray = [];
                QuerySnapshot.forEach((doc) => {
                    orderArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllOrders(orderArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    // Delete oder Function
    const deleteOrder = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'order', id))
            toast.success('Order Deleted successfully')
            getAllOrdersFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // get all users 
        const [getAllUsers, setGetAllUsers] = useState([]);


    // getAllUsersFunction 


        const getAllUsersFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "users"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach((doc) => {
                    userArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllUsers(userArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

  



    useEffect(() => {
        getAllOrdersFunction();
        getAllProductsFunction();
        getAllUsersFunction();
    }, [])
    
 

  return (
    <myContext.Provider 
      value={{ 
        loading, 
        setLoading, 
        getAllProducts,
        getAllProductsFunction,
        getAllOrdersFunction,
        getAllOrders,
        deleteOrder,
        getAllUsers,
        getAllUsersFunction,
      }}
    >
      {children}
    </myContext.Provider>
  );
}

export default MyState;