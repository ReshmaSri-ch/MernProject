//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route,Routes,NavLink} from 'react-router-dom';
import AddOrder from './pages/AddOrder';
import SearchOrder from './pages/SearchOrder';
import UpdateOrder from './pages/UpdateOrder';
import DeleteOrder from './pages/DeleteOrder';

function App() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/add">Add order</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/search">Search order</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/delete">Delete order</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/update">Update order</NavLink></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/add" element={<AddOrder />} />
          <Route path="/search" element={<SearchOrder />} />
          <Route path="/delete" element={<DeleteOrder />} />
          <Route path="/update" element={<UpdateOrder />} />
        </Routes>
      </div>
  );
}

export default App;
