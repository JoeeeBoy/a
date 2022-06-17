const mongoose = require("mongoose")

const commSchema = mongoose.Schema( {
    nameUser: String,
    text: String,
    newsId: {
        type: mongoose.Schema.Types.ObjectId
    }
})



const Comments = mongoose.model('Comments', commSchema)

module.exports = Comments