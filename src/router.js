import express from "express";

import {
   listarEstudiantes,
 } from "./estudianteController.js";

const router = express.Router();

router.get("/Crud-Completo-con-NodeJS-Express-y-MySQL", async (req, res) => {
  try {
    const estudiantes = await listarEstudiantes();
    res.render("pages/estudiantes", { estudiantes });
  } catch (error) {
    const { status, message } = error;
    res.status(status || 500).json({ error: message });
  }
});

router.get("/Proyecto-Integrador-Passt", async (req, res) => {
    res.render("pages/view2");
})

router.get("/Passt-On-Web", (req, res) => {
    try {
        res.render("pages/view3");
    } catch (error) {
        const { status, message } = error;
        res.status(status || 500).json({ error: message });
    }
});




 

export default router;
