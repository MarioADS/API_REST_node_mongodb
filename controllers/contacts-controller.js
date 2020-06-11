const Contact = require('../models/contacts-model');

function add_contacts (req,res){
    let contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        cellphone: req.body.cellphone,
        email: req.body.email
    });

    contact.save( (error,result) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if ( !result ){
            return res.status(400).json({
                error: true,
                message: `Client error: ${error}`,
                code: 20
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });

    });
}

function read_contacts (req,res){
    Contact.find().exec( (error,contacts) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: contacts,
            code: 10
        });
    });
}

function delete_contacts (req,res){
    const contact_id = req.params.id;
    Contact.deleteOne({_id: contact_id}, (error, result) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if (result === null){
            return res.status(400).json({
                error: true,
                message: `Not Found`,
                code: 30
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });

    });
}

function update_contacts (req,res){
    const contact_id = req.params.id;
    const data = req.body;
    Contact.findByIdAndUpdate(contact_id,data,{ new: true}, (error,result) => {
        if (error){
            return res.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if ( !result ){
            return res.status(400).json({
                error: true,
                message: 'Not found',
                code: 30
            });
        }

        return res.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });
    });
}

module.exports = {
    read_contacts,
    add_contacts,
    delete_contacts,
    update_contacts
};