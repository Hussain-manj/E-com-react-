/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/MyContext";
import { fireDB, auth } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const userLoginFunction = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (userLogin.email === "" || userLogin.password === "") {
      return toast.error("All fields are required");
    }

    setLoading(true);

    try {
      // Sign in with Firebase Authentication
      const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

      try {
        let user = null;

        // Method 1: Try direct document access using UID as document ID
        try {
          const userDocRef = doc(fireDB, "users", users.user.uid); // Try "users" (plural)
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            user = userDocSnap.data();
          }
        } catch (docError) {
          console.log("Direct document access failed, trying query method...");
        }

        // Method 2: Fallback to query method if direct access fails
        if (!user) {
          // Try both "user" and "users" collection names
          const collectionNames = ["user", "users"];
          
          for (const collectionName of collectionNames) {
            try {
              const q = query(
                collection(fireDB, collectionName),
                where("uid", "==", users.user.uid)
              );
              const querySnapshot = await getDocs(q);

              querySnapshot.forEach((doc) => {
                user = doc.data();
              });

              if (user) break; // Found user, exit loop
            } catch (queryError) {
              console.log(`Query failed for collection: ${collectionName}`);
            }
          }
        }

        // Method 3: Try querying by email if UID doesn't work
        if (!user) {
          const collectionNames = ["user", "users"];
          
          for (const collectionName of collectionNames) {
            try {
              const q = query(
                collection(fireDB, collectionName),
                where("email", "==", users.user.email)
              );
              const querySnapshot = await getDocs(q);

              querySnapshot.forEach((doc) => {
                user = doc.data();
              });

              if (user) break; // Found user, exit loop
            } catch (queryError) {
              console.log(`Email query failed for collection: ${collectionName}`);
            }
          }
        }

        if (!user) {
          console.error("User data not found in any collection");
          toast.error("User profile not found. Please contact support.");
          setLoading(false);
          return;
        }

        // Store user data in localStorage
        localStorage.setItem("users", JSON.stringify(user));
        setUserLogin({ email: "", password: "" });
        toast.success("Login Successful");
        setLoading(false);

        // Navigate based on role
        if (user.role === "user") {
          navigate("/user-dashboard");
        } else if (user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/"); // Fallback
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data");
        setLoading(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      
      // Provide more specific error messages
      if (error.code === 'auth/user-not-found') {
        toast.error("No account found with this email");
      } else if (error.code === 'auth/wrong-password') {
        toast.error("Incorrect password");
      } else if (error.code === 'auth/invalid-email') {
        toast.error("Invalid email address");
      } else if (error.code === 'auth/too-many-requests') {
        toast.error("Too many failed attempts. Please try again later");
      } else {
        toast.error("Login failed. Please try again");
      }
      
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      {/* Login Form */}
      <form
        onSubmit={userLoginFunction}
        className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md"
      >
        {/* Top Heading */}
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-pink-500">Login</h2>
        </div>

        {/* Input: Email */}
        <div className="mb-3">
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            value={userLogin.email}
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Input: Password */}
        <div className="mb-5">
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Login Button */}
        <div className="mb-5">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md"
          >
            Login
          </button>
        </div>

        {/* Signup Link */}
        <div>
          <h2 className="text-black">
            Don't have an account?{" "}
            <Link className="text-pink-500 font-bold" to="/signup">
              Signup
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default Login;