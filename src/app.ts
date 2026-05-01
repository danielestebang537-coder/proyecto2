import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import v1Routes from "./api/v1/index";
import { errorMiddleware } from "./middlewares/error.middleware";
import narutoRoutes from "./modules/naruto-characters/narutoCharacter.routes";
import notificationsRoutes from './modules/notifications/notifications.routes';
import auditRoutes from "./modules/audit/audit.routes";
import swaggerUi from "swagger-ui-express"
import { openApiSpec } from './config/openapi';


export const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

app.use("/api/v1/docs", swaggerUi.serve,swaggerUi.setup(openApiSpec))

app.use('/api/v1', v1Routes);
app.use("/naruto-characters", narutoRoutes);
app.use("/notifications", notificationsRoutes)
app.use("/audit", auditRoutes)

app.use(errorMiddleware);

