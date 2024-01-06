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
            required: "plz enter your company name",
            noSpace: "space  not allow",
        },
        email: {
            required: "plz enter your email id",

        },
        phone: {
            required: "plz enter your phone number",
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
            required: "Plz Enter Your company name",

        },
        mobile: {
            required: "Plz Enter Your phone number",
            minlength: "10 digit phone number allowed in this box",
            maxlength: "10 digit phone number allowed in this box"
        },
        gmail: {
            required: "Plz Enter Your Email Id",

        },
        qid: {
            required: "Plz Enter Your Qid No",
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
            required: "Plz Enter Your Password",
        },
    },
});

