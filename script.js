function sendMail() {
    var params = {
      name: document.getElementById("from_name").value,
      email: document.getElementById("email_id").value,
      
    };
  
    const serviceID = "service_kqhcm3m";
    const templateID = "template_u9qpn3p";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("from_name").value = "";
          document.getElementById("email_id").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

  