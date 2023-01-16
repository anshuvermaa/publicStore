// react bootstrap, material ui, bootswatch
import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom'
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/home_screen';
import ProductScreen from './screens/productscreen';
import Header from './components/header';
import Footer from './components/footer';
import CartScreen from './screens/cartScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import ProfileScreen from './screens/profileScreen';
import ShippingScreen from './screens/shippingScreen';
import PaymentScreen from './screens/paymentScreen';
import PlaceOrderScreen from './screens/placeOrderScreen';
import OrderScreen from './screens/orderScreen';
import UserListScreen from './screens/userListScreen';
import UserEditScreen from './screens/userEditScreen';
import ProductListScreen from './screens/productListScreen';
import ProductEditScreen from './screens/productEditScreen';
import OrderListScreen from './screens/orderListScreen';


const App=() =>{
  return (
    <Router>
    <Header/>
    <main className="py-3">
    <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
    </main>
  <Footer/>
    </Router>
  );
}

export default App;
