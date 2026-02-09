const express = require("express");
const app = express();

app.get("/ping", async (req, res) => {
    // wait for 10 ms
    await new Promise(resolve => setTimeout(resolve, 10));
    res.json({ status: "ok", waitedMs: 10 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
