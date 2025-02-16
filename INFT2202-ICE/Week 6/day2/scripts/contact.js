"use strict";

(function (core) {
    class Contact {
        constructor(fullName = "", contactNumber = "", emailAddress = "") {
            this.fullName = fullName;
            this.contactNumber = contactNumber;
            this.emailAddress = emailAddress;
        }

        get fullName() {
            return this._fullName;
        }
        set fullName(fullName) {
            if (typeof fullName !== "string" || fullName.trim() === "") {
                throw new Error("Invalid fullName: must be a non-empty string");
            }
            this._fullName = fullName;
        }

        get contactNumber() {
            return this._contactNumber;
        }
        set contactNumber(contactNumber) {
            const phoneRegex = /^(\d{3}-\d{3}-\d{4}|\d{10})$/;
            if (!phoneRegex.test(contactNumber)) {
                throw new Error("Invalid contactNumber: must be in format 123-456-7890 or 1234567890");
            }
            this._contactNumber = contactNumber;
        }

        get emailAddress() {
            return this._emailAddress;
        }
        set emailAddress(emailAddress) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailAddress)) {
                throw new Error("Invalid emailAddress: must be a valid email format");
            }
            this._emailAddress = emailAddress;
        }

        toString() {
            return `Full Name: ${this._fullName}\nContact Number: ${this._contactNumber}\nEmail Address: ${this._emailAddress}`;
        }

        serialize() {
            return `${this._fullName},${this._contactNumber},${this._emailAddress}`;
        }

        deserialize(data) {
            let propArray = data.split(",");
            this._fullName = propArray[0];
            this._contactNumber = propArray[1];
            this._emailAddress = propArray[2];
        }
    }

    core.Contact = Contact;
})(core || (core = {}));
