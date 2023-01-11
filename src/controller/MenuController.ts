import { Menu } from "../entity/Menu";
import { BaseController } from "./BaseController";
import { Request } from "express";
import { FileHelper } from "../helpers/fileHelper";
import { Equal } from "typeorm";

export class MenuController extends BaseController<Menu> {
  constructor() {
    super(Menu, false);
  }

  private validationResource(request: Request) {
    let _model = <Menu>request.body;
    // -- Data validation
    super.isRequired(_model.menuCdMenu, "Código do produto é obrigatório!");
    super.isRequired(_model.menuVlPrice, "Preço é obrigatório!");
    super.isRequired(_model.company, "Estabelecimento é obrigatório!");
    super.isRequired(_model.product, "Produto é obrigatório!");
  }

  async save(request: Request) {
    let _model = <Menu>request.body;

    // --- Data validation
    this.validationResource(request);

    // --- Image Processing
    if (_model.menuTxImage && _model.menuTxImage !== "---") {
      let pictureCreatedResult = await FileHelper.writePicture(
        _model.menuTxImage
      );
      if (pictureCreatedResult) {
        _model.menuTxImage = pictureCreatedResult;
      }
    }

    // -- Save Data
    return super.save(_model, request, false);
  }

  async getMenuByCompany(request: Request) {
    let id = request.params.id ? request.params.id : null;
    let menuList: Array<Menu> = new Array<Menu>();
    if (id) {
      menuList = await this.repository.find({
        relations: ["product"],
        where: {
          company: Equal(`${id}`),
          deleted: false,
        },
      });
    }

    if (menuList.length > 0) {
      return {
        status: 200,
        message: {
          menuList,
        },
      };
    } else {
      return {
        status: 404,
        message: "Não existem registros.",
      };
    }
  }
}
