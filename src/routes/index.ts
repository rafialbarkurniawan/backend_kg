// routes/index.ts

import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

interface User {
  full_name: string;
  email: string;
}

const users: User[] = [];

router.get("/users", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Berhasil mendapatkan data user",
    data: {
      users,
    },
  });
});

router.post("/users", (req: Request, res: Response) => {
  const user: User = req.body;

  const index = users.findIndex((user) => user.email === user.email);

  if (index !== -1) {
    res.status(400).json({
      succcess: false,
      message: "Email sudah terdaftar",
      data: {},
    });
  }

  users.push({
    full_name: user.full_name,
    email: user.email.toLowerCase(),
  });

  res.status(201).json({
    success: true,
    message: "User berhasil ditambahkan",
    data: {
      user,
    },
  });
});

router.put("/users/:email", (req: Request, res: Response) => {
  const email = req.params.email.toLowerCase();
  const user: User = req.body;

  const index = users.findIndex((user) => user.email === email);

  if (index === -1) {
    res.status(404).json({
      success: false,
      message: "User tidak ditemukan",
      data: {},
    });
  }

  users[index] = {
    full_name: user.full_name,
    email: user.email.toLowerCase(),
  };

  res.status(200).json({
    success: true,
    message: "User berhasil diperhbarui",
    data: {
      user,
    },
  });
});

router.delete("/users/:email", (req: Request, res: Response) => {
  const email = req.params.email.toLowerCase();

  const index = users.findIndex((user) => user.email === email);

  if (index === -1) {
    res.status(404).json({
      success: false,
      message: "User tidak ditemukan",
      data: {},
    });
  }

  users.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "User berhasil dihapus",
    data: {},
  });
});
