import { getConnection, getRepository } from 'typeorm';
import { Repository } from 'typeorm';
import * as dayjs from 'dayjs';
import { Voucher } from '../entity/Voucher';
import { isDate } from 'util';

export class GenerateVoucher {

  private _repository: Repository<Voucher>;
  
  async execute() {
    
    let newVoucher = {};
    let generateVoucher: Voucher = new Voucher();
    let _uid = '';
    let tbVoucher: Voucher = new Voucher();

    this._repository = getRepository("Voucher");

    tbVoucher = await this._repository.findOne({
      deleted: false, active: true
    });

    if(tbVoucher) {
      _uid = tbVoucher.uid;
      
      // Verify if code has expired.
      // const codeExpired = dayjs().isAfter(dayjs.unix(tbVoucher.voucVlExpiresin));
      const codeExpired = true;

      if (codeExpired) {
        
        // Delete register
        await getConnection()
          .createQueryBuilder()
          .delete()
          .where("uid = :id", { id: _uid })
          .from(Voucher)
          .execute();
        
        // Generate new Code and Save Voucher
        
        const _expiresIn = dayjs().add(30, "second").unix();
        const _voucher = await this.generateCode();

        newVoucher = {
          uid: _uid,
          voucCdCode: _voucher,
          voucVlExpiresin: _expiresIn,
        }
        generateVoucher = await this.save(newVoucher);
      } else {
        // Voucher still valid
        Object.assign(generateVoucher, tbVoucher);
      }
    } else {
      newVoucher = {
        voucVlExpiresin: dayjs().add(30, "second").unix(),
        voucCdCode: await this.generateCode()
      }
      generateVoucher = await this.save(newVoucher);
    }

    return generateVoucher;
  }

  async generateCode() {
    let voucherCode = await Math.floor(Math.random() * 1000000).toString();
    if(voucherCode.length < 6) {
      voucherCode = ('00000' + voucherCode).slice(-6);
    }
    console.log('Voucher Generated=', voucherCode);

    return voucherCode;
  }

  async save(model: any) {
    return await this._repository.save(model);
  }

}