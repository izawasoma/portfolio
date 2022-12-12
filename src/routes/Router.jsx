import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./../pages/Index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Index />} />
        <Route path={`/*`} element="" />
      </Routes>
    </BrowserRouter>
  )
}
