import express from "express";
const router = express.Router({ mergeParams: true });

router.post("/register", (req, res) => {
    res.send("User Register Endpoint")
});

export default router;
