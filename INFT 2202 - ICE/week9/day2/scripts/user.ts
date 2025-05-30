"use strict";


export class User {

    private _displayName: string;
    private _emailAddress: string;
    private _password: string;
    private _username: string;

    constructor(displayName:string = "", emailAddress:string = "", username:string = "", password:string = "") {
        this._displayName = displayName;
        this._emailAddress = emailAddress;
        this._password = password;
        this._username = username;
    }

    get displayName():string {
        return this._displayName;
    }

    get emailAddress():string {
        return this._emailAddress;
    }

    get username():string {
        return this._username
    }

    set displayName(displayName:string) {
        this._displayName = displayName;
    }

    set emailAddress(emailAddress:string) {
        this._emailAddress = emailAddress;
    }

    set username(username:string) {
        this._username = username;
    }

    toString():string {
        return `DisplayName: ${this._displayName}\nEmail Address ${this._emailAddress}\nUsername: ${this._username}`;
    }

    serialize():string|null {
        if (this._displayName !== "" && this._emailAddress !== "" && this._username !== "") {
            return `${this._displayName},${this._emailAddress},${this._username}`;
        }
        console.error("[ERROR] Failed to serialize user, properties missing");
        return null;
    }

    deserialize(data:string) {

        let propertyArray = data.split(",");
        this._displayName = propertyArray[0];
        this._emailAddress = propertyArray[1];
        this._username = propertyArray[2];
    }

    toJSON(): Record<string, string> {
        return {
            DisplayName: this._displayName,
            EmailAddress: this._emailAddress,
            Username: this._username,
            Password: this._password
        }
    }

    fromJSON(data:{DisplayName:string, EmailAddress:string, Username:string, Password:string}):void {
        this._displayName = data.DisplayName;
        this._emailAddress = data.EmailAddress;
        this._username = data.Username;
        this._password = data.Password;
    }

}

