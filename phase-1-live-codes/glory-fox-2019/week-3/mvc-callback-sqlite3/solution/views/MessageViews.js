class MessageView {
    static showError(message) {
        console.log("ERROR")
        console.log("=====")
        console.log(message)
        console.log("");
    }

    static showSuccess(message) {
        console.log("SUCCESS")
        console.log("=====")
        console.log(message)
        console.log("");
    }
}

module.exports = MessageView;