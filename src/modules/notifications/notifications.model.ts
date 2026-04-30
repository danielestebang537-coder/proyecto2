import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  mensaje: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ["info", "success", "error"],
    default: "info",
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  leido: {
    type: Boolean,
    default: false,
  },
  usuarioId: {
    type: String,
    required: true,
  },
});

export const NotificationModel = mongoose.model(
  "Notification",
  NotificationSchema
);