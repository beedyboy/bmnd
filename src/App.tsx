import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from 'layouts/MainLayout';
import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoreProvider from 'store';
import theme from 'theme';

const Landing = lazy(() => import("pages/Landing"));

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="" element={<Landing />} caseSensitive></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </ChakraProvider>
  );
}

export default App;
