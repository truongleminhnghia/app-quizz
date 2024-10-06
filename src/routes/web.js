// src/routes/web.js
import express from 'express';
import { getHomepage } from '../controllers/homeController.js'; // Chú ý .js
import { getQuizPage } from '../controllers/quizController.js'; // Chú ý .js
import { getQuestionPage } from '../controllers/questionController.js'; // Chú ý .js

const router = express.Router();

router.get("/", getHomepage);
router.get("/quiz", getQuizPage);
router.get("/question", getQuestionPage);

export default router; // Xuất khẩu mặc định
