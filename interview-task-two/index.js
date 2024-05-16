const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let count = 0;

app.get("/", (req, res) => {
  res.send(`
        <html>
            <body>
                <h1>Count: ${count}</h1>
                <button onclick="incrementCount()">Increment</button>
                <script>
                    function incrementCount() {
                        fetch('/increment', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ value: 1 })
                        })
                        .then(response => response.json())
                        .then(data => {
                            document.querySelector('h1').textContent = 'Count: ' + data.count;
                        });
                    }
                </script>
            </body>
        </html>
    `);
});

app.post("/increment", (req, res) => {
  const { value } = req.body;
  if (typeof value !== "number") {
    return res.status(400).json({ error: "Invalid value" });
  }
  count += value;
  res.json({ count });
});

app.get("/count", (req, res) => {
  res.json({ count });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
