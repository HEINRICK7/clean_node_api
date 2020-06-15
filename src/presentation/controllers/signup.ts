import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing.param.error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredfields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredfields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
