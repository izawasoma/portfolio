import React from "react";
import { Route, Routes } from "react-router-dom";
import { Index } from "./../pages/Index";
import { Test } from "../pages/Test";

export const Router = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Index />} />
      <Route path={`/test`} element={<Test />} />
      <Route path={`/*`} element="" />
    </Routes>
  )
}
