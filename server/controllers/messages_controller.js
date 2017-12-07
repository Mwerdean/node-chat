const messages = [];
let id = 0;

module.exports = {
    create(req, res){
        messages.push({
            id: id,
            text: req.body.text,
            time: req.body.time
        })
        id++
        res.json(messages)
    },

    read(req,res){
        res.json(messages)
    },

    update(req,res){
        const updateId = req.params.id
        let index = messages.findIndex(messages => messages.id ===parseInt(messages.id, 10))
        
        messages[index].text = req.body.text,
        messages[index].time = req.body.time
        res.json(messages)
    },

    delete(req,res){
        const updateId = req.params.id
        let index = messages.findIndex(messages => messages.id ===parseInt(messages.id, 10))
        
        messages.splice(index, 1)
        res.json(messages)
    }
}