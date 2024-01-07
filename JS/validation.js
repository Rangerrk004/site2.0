// regisier form validation 
$("#registerForm").validate({
    rules: {

        companyname: {
            required: true,
            noSpace: true,
            digits: false,
            minlength: 15,
        },

        email: {
            required: true,
            email: true,
        },
        phone: {
            required: true,
            number: true,
            digits: true,
            minlength: 10,
            maxlength: 11,
        },
        crno: {
            required: true,
        },
        licencsno: {
            required: true,
        },
        myfile: {
            required: true,

        },
        licencs: {
            required: true,

        },
        catogery: {
            required: true,
        }

    },

    messages: {
        companyname: {
            required: "Please enter your company name",
            noSpace: "space  not allow",
        },
        email: {
            required: "Please Enter Your Email id",

        },
        phone: {
            required: "Please enter your phone number",
            minlength: "10 digit phone number allowed in this box",
            maxlength: "10 digit phone number allowed in this box",
        }

    }
});


$("#register").validate({
    rules: {
        cname: {
            required: true,
            min: 5
        },
        mobile: {
            required: true,
            number: true,
            digits: true,
            minlength: 10,
            maxlength: 11,
        },
        gmail: {
            required: true,
            email: true,
        },
        qid: {
            required: true,
            minlength: 3,
        }
    },

    messages: {
        cname: {
            required: "Please Enter Your company name",

        },
        mobile: {
            required: "Please Enter Your phone number",
            minlength: "10 digit phone number allowed in this box",
            maxlength: "10 digit phone number allowed in this box"
        },
        gmail: {
            required: "Please Enter Your Email Id",

        },
        qid: {
            required: "Please  Enter Your Qid No",
        },
    },
});

// login validation 
$("#login").validate({
    rules: {
        testaahel: {
            required: true,
        },
        password: {
            required: true,
            minlength: 8,
        },

    },

    messages: {
        password: {
            required: "Please Enter Your Password",
        },
    },
});

// 
$("#registerform").validate({

    rules: {

        username: {
            required: true,
            minlength: 3,
        },
        mail: {
            required: true,
            email: true,
        },
        number: {
            required: true,
            digits: true,
            minlength: 10,
        }

    },
    messages: {

        username: {
            required: "Please  Enter Your User Name",

        },

        mail: {
            required: "Please Enter Your Email Id",
            email: "",
        },
        number: {
            required: "Please Enter Your Phone Number"
        }

    }

})