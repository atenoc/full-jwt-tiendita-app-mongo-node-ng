"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    nombre: String,
    email: String,
    password: String
}, {
    versionKey: false,
    timestamps: true,
});
exports.default = mongoose_1.model('User', schema);
