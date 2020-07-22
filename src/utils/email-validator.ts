import { EmailValidator } from '../presentation/protocols/emailValidator'

export class EmailValidatorAdapter implements EmailValidator {
    isValid(email: string): boolean {
        return false
    }
}