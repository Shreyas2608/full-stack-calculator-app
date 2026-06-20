const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    if (
        typeof num1 !== "number" ||
        typeof num2 !== "number" ||
        isNaN(num1) ||
        isNaN(num2)
    ) {
        return res.status(400).json({
            error:
                "Please provide valid numbers"
        });
    }
    let result;
    if (operation === 'add') {
        result = num1 + num2;
    }
    else if (operation === "sqrt") {
        if (num1 < 0) {
            return res.status(400).json({
                error:
                    "Cannot calculate square root of negative number"
            });
        }
        result = Math.sqrt(num1);
    }
    else if (operation === "percentage") {
        result = (num1 / 100) * num2;
    }
    else if (operation === "power") {
        result =
            Math.pow(num1, num2);
    }
    else if (operation === "modulus") {
        result =
            num1 % num2;
    }
    else if (operation === 'subtract') {
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
