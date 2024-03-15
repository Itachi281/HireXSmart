import mongoose, {Schema} from "mongoose";

const jobSchema = mongoose.Schema(
    {
        title: String,
        required: true,
        
    }
)

export const job = mongoose.model("Job", jobSchema)