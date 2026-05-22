import { prisma as client } from "db/client";
import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/users", async (req: Request, res: Response) => {
    const users = await client.user.findMany();
    res.json(users);
})

app.post("/signup", async (req: Request, res: Response) => {
    const { email, password } = req.body;
    await client.user.create({
        data: {
            email,
            password
        }
    })
    res.json({ message: "User created successfully" });
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})
