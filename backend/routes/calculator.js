const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    let result;
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            return res.status(400).json({
                error: "Cannot divide by zero"
            });
        }
        result = num1 / num2;
    }
    else {
        return res.status(400).json({ error: "Invalid operation" });
    }
    res.json({
        result
    });
});

module.exports = router;
