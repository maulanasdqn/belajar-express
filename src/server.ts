import { app } from "@/main";
import { configEnv } from "./config"

const PORT = configEnv.port ?? 5050;
app.listen(PORT, (): void => console.log(`Running Well On http://localhost:${PORT}`));
