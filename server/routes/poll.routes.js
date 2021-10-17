const PollController = require("../controllers/poll.controller")

module.exports = app => {
    app.get("/api/polls/", PollController.findAllPolls);
    app.get("/api/polls/:id", PollController.findOnePoll);
    app.post("/api/polls/new", PollController.createNewPoll);
    app.put("/api/polls/update/:id", PollController.updatePoll);
    app.delete("/api/polls/delete/:id", PollController.deletePoll);
}