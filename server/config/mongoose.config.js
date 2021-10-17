const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/polls", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("mongoose is connected"))
    .catch(err => console.log("error connecting mongoose", err));