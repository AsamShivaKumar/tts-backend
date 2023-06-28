const { translate } = require('free-translate');
const exp = require('express');
const cors = require('cors');
const app = exp();

app.use(exp.json());
app.use(cors());
app.use(exp.urlencoded({extended: true}));

app.get("/translate", (req,res) => {
    const text = req.query.text;
    console.log(text);
    translate(text, { from: 'en', to: 'hi' }).then(result => {
        res.send({output: result})
    });
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.listen(port, () => {
    console.log("Server started on port", port)
});