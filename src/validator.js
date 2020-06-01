export class Validator {
    constructor(name) {
        this.name = name
    }
    validateUserName() {
        return this.name.match(/^[^-_\d]\w*\d{0,3}[^-_\d]$/) !== null
        }
}