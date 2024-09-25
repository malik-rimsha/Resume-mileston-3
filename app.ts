document.getElementById('resumeForm')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    // Get form elements and assert their types
    const profilePictureInput = document.getElementById('profilePic') as HTMLInputElement | null;
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;


    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        
        // Extract values from inputs
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Handle profile picture safely
        const profilePictureFile = profilePictureInput.files?.[0]; // Optional chaining
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : null;

        // Generate resume HTML string
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
            <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span></p>
            <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span></p>
            
            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>
            
            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>
            
            <h3>Skills</h3>
            <p id="edit-skilss" class="editable">${skills}</p>
        `;

        // Display the generated resume
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
        } 
    } else {
        console.error("Error: required elements not found");
    }
});

function makeEditable() {
    const editableElements = document.getElementsByClassName('editable');
    for (let i = 0; i < editableElements.length; i++) {
        const element = editableElements[i];
        const span = element.querySelector('span');
        if (span) {
            span.addEventListener('click', function(event: Event) {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent ?? '';
                span.parentNode?.replaceChild(input, span);
                input.addEventListener('blur', function(event: Event) {
                    span.textContent = input.value;
                });
            });
        }
    }
    
}

