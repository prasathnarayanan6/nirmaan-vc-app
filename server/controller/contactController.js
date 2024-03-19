const addcontactController = (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Request body is missing' });
    }
    const {contact_name, contact_designation, contact_organization, contact_connect_for, contact_number, contact_email} = req.body;
    console.log(req.body);
    if (!contact_name || !contact_designation || !contact_organization || !contact_connect_for || !contact_number || !contact_email) {
        return res.status(400).json({ error: 'One or more required properties are missing in the request body' });
    }
    res.status(200).json({ message: 'Data received successfully' });
}

const readContactController = () => {
    console.log("hello")
}
module.exports = {
    addcontactController,
    readContactController
}
