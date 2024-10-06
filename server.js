import express from  "express"
import dotenv from "dotenv"
import connectToDB from "./database/db.js";
import { Question } from "./src/models/questionSchema.js"
import { configViewEngine } from "./src/configs/viewEngine.js";
import homeRoutes from "./src/routes/web.js";

dotenv.config();
const app = express()

const port = process.env.port || 4001;


//middleware
app.use(express.json());
connectToDB();

//API


app.get("/get", async (req, res) => {
    try {
        const result = await Question.find();
        res.render('questions', { questions: result });
    } catch(error) {
        res.send({
            success: false,
            message: "Failed Server is active",
            data: result,
        });
    }
});

// app.post("/questions", async (req, res) => {
//     const { questionText, options, quizId } = req.body;

//     // Kiểm tra quizId có hợp lệ không
//     if (!mongoose.Types.ObjectId.isValid(quizId)) {
//         return res.status(400).send({
//             success: false,
//             message: "Invalid quizId",
//         });
//     }

//     const newQuestion = new Question({
//         questionText,
//         options,
//         quizId: quizId, // Đảm bảo quizId là ObjectId hợp lệ
//     });

//     try {
//         const result = await newQuestion.save();
//         res.send({
//             success: true,
//             message: "Question created successfully",
//             data: result,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({
//             success: false,
//             message: "Failed to create question",
//             data: null, // Thay đổi thành null nếu xảy ra lỗi
//         });
//     }
// });

// app.get("/:id", async (req, res) => {
//     const questionId = req.params.id;
//     try {
//         const result = await Question.findById(questionId); // Sửa lỗi chính tả ở đây
//         if (!result) {
//             return res.status(404).send({
//                 success: false,
//                 message: "Question not found",
//             });
//         }
//         res.send({
//             success: true,
//             message: "oke",
//             data: result,
//         });
//     } catch (error) {
//         console.log(error);
//         res.send({
//             success: false,
//             message: "failed",
//             data: null, // Thay đổi thành null nếu xảy ra lỗi
//         });
//     }
// });

// app.patch("/:id", async (req, res) => {
//     const questionId = req.params.id;
//     const updatedQuestion = req.body 
//     try {
//         const result = await Question.findByIdAndDelete(questionId, updatedQuestion, {
//             new: true,
//         });
//         res.send({
//             success: true,
//             message: "true",
//             data: result,
//         })
//     } catch(error) {
//         console.log(error);
//         res.send({
//             success: false,
//             message: "failed",
//             data: null, // Thay đổi thành null nếu xảy ra lỗi
//         });
//     }
// })

configViewEngine(app);

// khai báo routes
app.use("/", homeRoutes); 

app.listen(4001, () => {
    console.log(`SERVER IS RUNING ON PROT ${port}`);
})