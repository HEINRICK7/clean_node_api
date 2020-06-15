import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing.param.error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredfields = ['name', 'email', 'password']
    for (const field of requiredfields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
