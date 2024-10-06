// src/configs/viewEngine.js
import path from "path"; // Nếu bạn đang sử dụng ES Module
import express from "express";

const configViewEngine = (app) => {
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  // Cấu hình static files
  app.use(express.static(path.join("../src", "public")));
};

export { configViewEngine }; 