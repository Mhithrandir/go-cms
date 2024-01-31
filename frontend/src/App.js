import './App.scss';
import Home from './pages/home';
import Layout from './pages/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/no-page';
import Login from './pages/login';
import Register from './pages/register';
import Users from './pages/users';
import UserTypes from './pages/usertypes';
import Forum from './pages/forum';
import Menus from './pages/menus';
import LogoutPage from './pages/logout';
import Database from './pages/database';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/usertypes" element={<UserTypes />} />
          <Route exact path="/menus" element={<Menus />} />
          <Route exact path="/logout" element={<LogoutPage />} />
          <Route exact path="/db-api" element={<Database />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
