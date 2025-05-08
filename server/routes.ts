import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactHandler } from "./contactService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", contactHandler);

  const httpServer = createServer(app);

  return httpServer;
}
