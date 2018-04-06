import { getUsers, removeUser } from './api/userApi';
import './index.css';

// Populate table of users via API call
getUsers().then(result => {
    let usersBody = '';

    result.forEach(user => {
        usersBody += `<tr>
            <td><a href="#" data-id="${user.id}" class="remove-user">Remove</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        </tr>`;
    });

    global.document.getElementById('users').innerHTML = usersBody;

    const removeLinks = global.document.getElementsByClassName('remove-user');

    // Must use array.from to create a real array from a DOM collection
    // getElementsByClassName only returns an "array-like" object
    Array.from(removeLinks, link => {
        link.onclick = function(event) {
            // debugger
            const element = event.target;
            event.preventDefault();
            removeUser(element.attributes['data-id'].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});
