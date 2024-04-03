import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Bookstore from "../pages/Books/BooksListPage";
import BookDetailsPage from "../pages/Books/BookDetailsPage";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";


const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/bookstore" element={<Private Item={Bookstore} />} /> 
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
