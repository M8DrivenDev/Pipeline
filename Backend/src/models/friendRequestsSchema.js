import mongoose from "mongoose";
import mongoClient from "../configs/mongoClient.js";

const friendRequestSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

friendRequestSchema.index({ status: 1 });
const FriendRequest = mongoClient.model("FriendRequest", friendRequestSchema);

export default FriendRequest;
