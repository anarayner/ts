import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom'
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";

function App() {

  return (
      <BrowserRouter>
        <div className="App">
            <div>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/todos'}>todos</NavLink>


            </div>
            <Routes>
                <Route path={'/users'} element={<UserPage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/users/:id'} element={<UserItemPage/>}/>

            </Routes>

        </div>
      </BrowserRouter>

  );
}

export default App;
