import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact component={ProductList} />
                    <Route
                        path='/product/:productId'
                        exact
                        component={ProductDetails}
                    />
                    <Route>Page Not Found</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
