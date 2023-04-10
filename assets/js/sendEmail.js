function sendMail(contactForm){
    emailjs.send("service_mko1ebv", "ci_resume_8ournlz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
            document.getElementById("contact-form").innerHTML = "<h2 class=\"contact-form-response\">Thank you for your message! I will get back to you as soon as possible.</h2>";
        },
        function(error){
            console.log("FAILED", error);
            document.getElementById("contact-form").innerHTML += "<h2\"contact-form-response\">Oops! Something went wrong. Please try again.</h2>";
        },
    );
    return false;
}