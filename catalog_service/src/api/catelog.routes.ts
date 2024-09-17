import express, { NextFunction, Request, Response } from "express"

const router = express.Router()

//endpoints
router.post("/product", async (params: Request, res: Response, next: NextFunction) => {
    return res.status(201).json({})
})

export default router