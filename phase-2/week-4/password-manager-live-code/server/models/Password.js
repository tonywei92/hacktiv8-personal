module.exports = (mongoose, Schema) => {
    const schema = new Schema({
        url: {type: String, required: [true,"Url required"]},
        username: {type: String, required: [true, "Username required"]},
        password: {type: String, required: [true, "Password required"]},
        owner: {type: mongoose.Types.ObjectId, required:[true, "Owner must be specified"], ref: "User"}
    });

    return mongoose.model("Password", schema);
}