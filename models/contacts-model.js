const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: { type: String, required: [true, 'El nombre de la persona es requerido']},
    phone: { type: String, required: false },
    cellphone: { type: String, required: [true, 'El número de celular es requerido']},
    email: {type: String, required: false}
});

module.exports = mongoose.model('Contact', contactSchema);