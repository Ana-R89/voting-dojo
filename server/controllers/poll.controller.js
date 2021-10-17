const Poll =  require("../models/Poll");

module.exports.findAllPolls = (req, res) => {
    Poll.findAll()
        .then(allPolls => res.json({ polls: allPolls }))
        .catch(err => res.json({ message: "Something went wrong finding all", error: err }));
};

module.exports.findOnePoll = (req, res) => {
    Poll.findOne({ _id: req.params.id })
        .then(oneSinglePoll => res.json({ poll: oneSinglePoll }))
        .catch(err => res.json({ message: "Something went wrong finding one", error: err }));
};

module.exports.createNewPoll = (req, res) => {
    Poll.create(req.body)
        .then(newlyCreatedPoll => res.json(newlyCreatedPoll))
        .catch(err => res.status(400).json(err));
};

module.exports.updatePoll = (req, res) => {
    Poll.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPoll => res.json(updatedPoll))
        .catch(err => res.json({ message: "Something went wrong updating", error: err }));
};

module.exports.deletePoll = (req, res) => {
    Poll.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong deleting", error: err }));
};
