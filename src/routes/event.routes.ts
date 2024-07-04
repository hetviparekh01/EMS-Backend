import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { EventController } from "../controllers/event.controller";
import roleMiddleware from "../middlewares/role.middleware";

const eventRoute = Router();
const eventController = new EventController();
eventRoute.post(
  "/addevent",
//   roleMiddleware(["admin"]),
  eventController.createEvent
);
eventRoute.put(
  "/updateevent/:id",
//   roleMiddleware(["admin"]),
  eventController.updateEvent
);
eventRoute.delete(
  "/deleteevent/:id",
//   roleMiddleware(["admin"]),
  eventController.deleteEvent
);
eventRoute.get("/getevents", eventController.getEvents);
eventRoute.get("/geteventbyid/:id", eventController.geteventById);

export default eventRoute;
