function validate() {
	let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let MobileNumber = document.getElementById('mobilenumber').value
	let gender = document.getElementsByName('gender-input')
    let country = document.getElementById('country').value
	let error = false

	if(firstName.length >= 3) {
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
		error = true
	}
    
    if(lastName.length >= 3) {
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
		error = true
	}
        
    if (
        email.includes("@") &&
        email.includes(".") &&
        email.indexOf("@") != 0 &&
        (email.length - email.lastIndexOf(".")-1 === 3 || email.length - email.lastIndexOf(".")-1 === 2) 
    ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
        error = true
    }

    if(MobileNumber.length ===10) {
		document.getElementById('mobilenumber-valid').style.display = 'block'
		document.getElementById('mobilenumber-invalid').style.display = 'none'
	} else {
		document.getElementById('mobilenumber-invalid').style.display = 'block'
		document.getElementById('mobilenumber-valid').style.display = 'none'
		error = true
	}
 
	var values =[]
	for(var i=0; i<gender.length; i++){
		if(gender[i].checked === true){
		   values.push(gender[i].value)
		}
	}

    if(values.length>0) {
		document.getElementById('gender-valid').style.display = 'block'
		document.getElementById('gender-invalid').style.display = 'none'
	} else {
		document.getElementById('gender-invalid').style.display = 'block'
		document.getElementById('gender-valid').style.display = 'none'
		error = true
	}
        
    if(country != 'None') {
        document.getElementById('country-valid').style.display = 'block'
        document.getElementById('country-invalid').style.display = 'none'
    } else {
        document.getElementById('country-invalid').style.display = 'block'
        document.getElementById('country-valid').style.display = 'none'
        error = true
    }


        if(!error) {
            alert('Your details have been saved successfully!')
    
            document.getElementById('registration-form').reset()
    
            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for(let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for(let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }







