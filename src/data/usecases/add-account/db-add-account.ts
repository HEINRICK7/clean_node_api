import {AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import { AccountModel } from '../../../domain/models/account'
import { Encrypter } from '../../protocols/encrypter'
import { promises } from 'fs'
import { resolve } from 'dns'
export class DbAddAccount implements AddAccount {
    private readonly encrypter: Encrypter
    constructor (encrypter: Encrypter) {
        this.encrypter = encrypter
    }
    async add(account: AddAccountModel): Promise<AccountModel> {
        await this.encrypter.encrypt(account.password)
        return new Promise(resolve => resolve(null))
    }   
}