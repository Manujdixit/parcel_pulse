import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    isOnboarded: { type: Boolean, default: false },
    preferences: [{ type: Schema.Types.ObjectId, ref: "Preferences" }],
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
