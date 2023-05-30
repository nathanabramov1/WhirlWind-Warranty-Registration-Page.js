function createWarrantyPage(){   

    let element
    let label

    element = document.createElement('h3')
    element.innerHTML = '<h3>WhirlWind Warranty Registration<h3>'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'First Name'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'First Name'
    label.style.display = 'block'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = "Last Name"
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute("type", "text")
    element.innerHTML = 'Last Name'
    label.style.display = 'block'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Company Name'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Company Name'
    label.style.display = 'block'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Email'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Email'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Phone Number'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'phone Number'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Fax Number'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Fax Number'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Address'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Address'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'City'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'City'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'State'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'State'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Zip'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Zip'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Country'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Country'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Unit Information'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Unit Information'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Date of Purchase'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Date of Purchase'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Model'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Model'
    document.body.appendChild(element)

    label = document.createElement('label')
    label.innerHTML = 'Warranty Serial Number'
    label.style.display = 'block'
    document.body.appendChild(label)
    element = document.createElement('input')
    element.setAttribute('type','text')
    element.innerHTML = 'Warranty Serial Number'
    document.body.appendChild(element)

    element = document.createElement('input')
    element.setAttribute('type','button')
    element.setAttribute('value','save')
    element.style.display = 'block'
    document.body.appendChild(element)

    element = document.createElement('input')
    element.setAttribute('type','button')
    element.setAttribute('value','close')
    element.style.display = 'block'
    document.body.appendChild(element)

// create new link tag
var link = document.createElement('link');

// set properties of link tag
link.href = 'css-file.css';
link.rel = 'stylesheet';
link.type = 'text/css';

// Loaded successfully
link.onload = function() {
	console.log('success');
};

// Loading failed
link.onerror = function() {
	console.log('error');
};

// append link element to html
document.body.appendChild(link);











}