import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./../pages/Index";
import { Works } from "./../pages/Works";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Index />} />
        <Route path={`/works`} element={<Works />} />
        <Route path={`/*`} element="" />
      </Routes>
    </BrowserRouter>
  )
}
