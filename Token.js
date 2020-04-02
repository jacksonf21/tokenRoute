import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const tokenSchema = new mongoose.Schema(
        {
          name: { type: String, required: true, unique: true },
          token: { type: String, required: true, unique: true },
          timestamp: { type: Date, required: true }
        }
);

tokenSchema.plugin(uniqueValidator, { message: "This tokenSchema already exists" });

export default mongoose.model("Token", tokenSchema);
