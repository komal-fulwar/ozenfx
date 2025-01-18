function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById ("email_id").value
    }
    emailjs.send("service_2lgq3u8","template_u9qpn3p",params).then(function (res) {
        alert("Success!"+res.status);



    })
}