import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
/* import New from "./pages/new/New"; */
/* import Shiftregister from "./pages/shiftregister/Shiftregister"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* Nested routes after main: */}
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {/* Users route */}
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>
            {/* Shiftregister route */}
            <Route path="shiftregister">
              {/*  <Route index element={<Shiftregister />} /> */}
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                /* element={
                  <New
                    inputs={userInputs}
                    title="Enter your code and press 'Send'"
                  />
                } */
              />
            </Route>
            {/* 'Products' (Projects) route */}
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
