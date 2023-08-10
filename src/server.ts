import { app } from "@/main";

const PORT: Number = 5050;
app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
