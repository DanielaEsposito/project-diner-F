import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
//LAYOUTS
import DefaultLayout from "./layouts/DefaultLayout";
//PAGES
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
function App() {
  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={HomePage} />
              <Route path="/about" Component={About} />
              <Route path="*" Component={NotFound} />
              <Route path="/menu" Component={Menu} />
              <Route path="/events" Component={Events} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  );
}

export default App;
