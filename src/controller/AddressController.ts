import { Request } from 'express';
import { Address } from "../entity/Address";
import { UserAddress } from '../entity/UserAddress';
import { BaseController } from "./BaseController";

export class AddressControler extends BaseController<Address> {

    constructor() {
        super(Address, false);
    }

    private validationResource(request: Request) {
        let _model = <Address>request.body;
        // -- Validação de dados
        super.isRequired(_model.addrNmAddress, 'Referência é obrigatória!');
    }

    async save(request: Request): Promise<void> {
        let _model = <Address>request.body;
        // -- Validando dados
        this.validationResource(request);
        // -- Gravando os dados
        try {
            if(!_model.uid || _model.uid === undefined) {
                delete _model.uid;
            }
            return await super.save(_model, request, false);
        } catch (error) {
            throw new Error(error);
        }
    }
}