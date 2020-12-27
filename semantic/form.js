/** Event Handler*/
const bookForm = document.querySelector('#book-form');
bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //get user info
    const data = {
        name : bookForm['full-name'].value,
        phone : bookForm['phone-no'].value,
        address : bookForm['address'].value,
        date : bookForm['date'].value,
        time : bookForm['time'].value,
        service : bookForm['service'].value,
        notes : bookForm['notes'].value,
    };

    send2Whatsapp(data);
    //console.log(query);
    bookingReceipt(data);

    bookForm.reset();
});

//send the info from form to whatsapp
function send2Whatsapp(data) {
    const url = 'https://api.whatsapp.com/send?';
    const bizPhone = 'phone=' + '60193134634';
    const text = 'text=' + 'Name:' + data.name + "%0a" + "Date:"
        + data.date + ", " + data.time + "%0a" + "Service:" + data.service;

    const query = url + bizPhone + "&" + text;
    return window.open (query, '_blank');
};

//create new pages that contain booking information 
function bookingReceipt(data) {
    var content = "<p><ul>"
    for (var key of Object.keys(data)) {
        if (data[key] != "") {
            content += "<li>" + key + ":" + data[key] + "</li>";
        } 
    }
    content += "</ul></p>";

    document.getElementById('form-container').innerHTML = content;
};