const result =
    document.getElementById("result");

async function calculate(operation) {

    const num1 =
        parseFloat(
            document
                .getElementById("num1")
                .value
        );

    const num2 =
        parseFloat(
            document
                .getElementById("num2")
                .value
        );

    if (isNaN(num1) || isNaN(num2)) {

        result.innerText =
            "Please enter valid numbers";

        result.style.color =
            "red";
        return;
    }

    try {

        const response =
            await fetch(
                "http://localhost:5000/calculate",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        num1,
                        num2,
                        operation
                    })
                }
            );

        const data =
            await response.json();

        if (data.error) {

            result.innerText =
                data.error;

            result.style.color =
                "red";
            return;
        }

        result.innerText =
            data.result;

        result.style.color =
            "green";
    }

    catch (error) {

        result.innerText =
            "Server error";

        result.style.color =
            "red";
    }

}

document
    .getElementById("addBtn")
    .addEventListener(
        "click",
        () => {
            calculate("add");
        }
    );

document
    .getElementById("subtractBtn")
    .addEventListener(
        "click",
        () => {
            calculate("subtract");
        }
    );

document
    .getElementById("multiplyBtn")
    .addEventListener(
        "click",
        () => {
            calculate("multiply");
        }
    );

document
    .getElementById("divideBtn")
    .addEventListener(
        "click",
        () => {
            calculate("divide");
        }
    );
    document
.getElementById("clearBtn")
.addEventListener(
"click",
()=>{

    document
    .getElementById("num1")
    .value = "";

    document
    .getElementById("num2")
    .value = "";

    result.innerText =
    "Waiting for inputs...";

    result.style.color =
    "black";

}
);
document
.addEventListener(
"keydown",
(event)=>{

    if(event.key === "Enter"){

        calculate("add");
    }

}
);