import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx';
import NoPage from './pages/nopage/NoPage.jsx';
import ProductInfo from './pages/productinfo/ProductInfo.jsx';
import ScrollTop from './components/scrollTop/ScrollTop.jsx';
import CartPage from './pages/cartpage/CartPage.jsx';
import AllProducts from './pages/allprodpage/AllProducts.jsx';
import Login from './pages/registeration/Login.jsx';
import Signup from './pages/registeration/Signup.jsx';
import UserDashboard from './pages/user/UserDashboard.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AddProductpage from './pages/admin/AddProductpage.jsx';
import UpdateProductpage from './pages/admin/UpdateProductpage.jsx';
import MyState from './context/MyState.jsx';
import { Toaster } from 'react-hot-toast';
import ProtectedRouteForUser from './protectedRoute/ProtectedRouteForUser.jsx';
import ProtectedRouteForAdmin from './protectedRoute/ProtectedRouteForAdmin.jsx';
import UpdateProductPage from './pages/admin/UpdateProductpage.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';



function App() {

  return (
      <MyState>
        <Router>
          <ScrollTop/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/*" element={<NoPage/>} />
            <Route path="/productinfo/:id" element={<ProductInfo/>}/>
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/allproducts" element={<AllProducts/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/category/:categoryname" element={<CategoryPage/>}/>
            <Route path="/user-dashboard" element={
              <ProtectedRouteForUser>
                <UserDashboard/>
              </ProtectedRouteForUser>
            }/>
            <Route path="/admin-dashboard" element={
              <ProtectedRouteForAdmin>
                <AdminDashboard/>
              </ProtectedRouteForAdmin>
            }/>
            <Route path="/add-product" element={
              <ProtectedRouteForAdmin>
                <AddProductpage/>
              </ProtectedRouteForAdmin>
            }/>
            <Route path="/update-product/:id" element={
              <ProtectedRouteForAdmin>
                <UpdateProductPage/>
              </ProtectedRouteForAdmin>
            }/>
          </Routes>
          <Toaster/>
        </Router> 
      </MyState>
  )
}

export default App
