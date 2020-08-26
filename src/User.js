export default class User {

    constructor(firstname, lastname, jobRole, id) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.jobRole = jobRole;
        this.id = id;
    }

    logUser() {
        alert(`Hello ${this.firstname}. Thank you for joining!`);
        return this;
    }

}