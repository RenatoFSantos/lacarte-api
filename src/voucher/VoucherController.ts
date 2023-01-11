import { GenerateVoucher } from './../provider/GenerateVoucher';
import { Request, Response } from 'express';

export class VoucherController {

    async handle(request: Request, response: Response) {

        const generateVoucher = new GenerateVoucher();
    
        const voucher = await generateVoucher.execute();
    
        return voucher;
    
    }
}