import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
//LAYOUTS
import DefaultLayout from "./layouts/DefaultLayout";
//PAGES
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <GlobalContextProvider>
        <BrowserRouter>
          <DefaultLayout>
            <Routes>
              <Route index Component={HomePage} />
              <Route path="/about" Component={About} />
              <Route path="*" Component={NotFound} />
            </Routes>
          </DefaultLayout>
        </BrowserRouter>
      </GlobalContextProvider>
    </>
  );
}

export default App;
