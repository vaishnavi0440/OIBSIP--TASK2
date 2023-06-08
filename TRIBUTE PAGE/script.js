window.addEventListener('DOMContentLoaded', function() {
    var nameElement = document.getElementById('name');
    var descriptionElement = document.getElementById('description');

    // Replace these values with the person's actual name and description
    var personName = 'Person\'s Name';
    var personDescription = 'Description of the person.';

    nameElement.textContent = personName;
    descriptionElement.textContent = personDescription;
});