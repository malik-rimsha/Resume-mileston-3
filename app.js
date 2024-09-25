var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get form elements and assert their types
    var profilePictureInput = document.getElementById('profilePic');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        // Extract values from inputs
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Handle profile picture safely
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0]; // Optional chaining
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : null;
        // Generate resume HTML string
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span></p>\n            <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n            \n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n            \n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n            \n            <h3>Skills</h3>\n            <p id=\"edit-skilss\" class=\"editable\">").concat(skills, "</p>\n        ");
        // Display the generated resume
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("Error: required elements not found");
    }
});
function makeEditable() {
    var editableElements = document.getElementsByClassName('editable');
    var _loop_1 = function (i) {
        var element = editableElements[i];
        var span = element.querySelector('span');
        if (span) {
            span.addEventListener('click', function (event) {
                var _a, _b;
                var input = document.createElement('input');
                input.type = 'text';
                input.value = (_a = span.textContent) !== null && _a !== void 0 ? _a : '';
                (_b = span.parentNode) === null || _b === void 0 ? void 0 : _b.replaceChild(input, span);
                input.addEventListener('blur', function (event) {
                    span.textContent = input.value;
                });
            });
        }
    };
    for (var i = 0; i < editableElements.length; i++) {
        _loop_1(i);
    }
}
