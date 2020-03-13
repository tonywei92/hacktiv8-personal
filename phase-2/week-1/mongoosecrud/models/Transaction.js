module.exports = function (mongoose, Schema, Types) {
    const schema = new Schema({
        member: {
            type: Types.ObjectId,
            ref: 'Member'
        },
        in_date: Date,
        out_date: Date,
        due_date: Date,
        fine: Number,
        booklist: [{ type: Types.ObjectId, ref: "Book" }]
    })

    schema.pre("updateOne", function () {
        return this.model.findOne(this.getQuery())
            .then(currentTransaction => {
                const diff = new Date(this.get("in_date")).getTime() - new Date(currentTransaction.due_date).getTime();
                const diffDays = diff / (1000 * 3600 * 24);
                if (diffDays > 0) {
                    this.set({ fine: diffDays * 1000 });
                }
            })
    });

    const Transaction = mongoose.model("Transaction", schema);

    return Transaction;
}