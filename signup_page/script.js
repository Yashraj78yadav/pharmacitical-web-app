document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Capture form data
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        dob: document.getElementById('dob').value,
        email: document.getElementById('email').value || null,
        phone: document.getElementById('phone').value,
        fullName: document.getElementById('fullName').value || null,
        address: {
            street: document.getElementById('street').value,
            landmark: document.getElementById('landmark').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipCode: document.getElementById('zipCode').value,
            country: document.getElementById('country').value
        },
        role: document.getElementById('role').value,
        gst_number: document.getElementById('gst_number').value || null
    };

    // Display captured data in console (replace this with API call)
    console.log('Form Data:', formData);

    // Add any form submission logic here (e.g., sending the data to a server)
});
