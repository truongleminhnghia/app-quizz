import mongoose, { model, Schema } from "mongoose";

const questionSchema = new Schema({
    questionText: String,
    options: [
      {
        text: String,
        isCorrect: Boolean,
      },
    ],
    quizId: mongoose.Schema.Types.ObjectId,
  });

export const Question = mongoose.model.Question || new model("Question", questionSchema);