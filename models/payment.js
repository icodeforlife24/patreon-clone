import mongoose from "mongoose";
const payments = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    to_userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    message: { type: String, required: false },
    payedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
});
const Payment = mongoose.models.Payment || mongoose.model("Payment", payments);
export default Payment;
    
