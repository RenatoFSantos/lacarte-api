import { AddressControler } from "./controller/AddressController";
import { CategoryController } from "./controller/CategoryController";
import { CompanyController } from "./controller/CompanyController";
import { FidelityController } from "./controller/FidelityController";
import { MenuController } from "./controller/MenuController";
import { ProductController } from "./controller/ProductController";
import { PromotionController } from "./controller/PromotionController";
import { SegmentController } from "./controller/SegmentController";
import { StorageController } from "./controller/StorageController";
import { UserAddressController } from "./controller/UserAddressController";
import {UserController} from "./controller/UserController";
import { RefreshTokenUserController } from "./refreshTokenUser/RefreshTokenUserController";
import { VoucherController } from "./voucher/VoucherController";

export const Routes = [
    { method: "get",    route: "/users",                    controller: UserController,             action: "all"},
    { method: "get",    route: "/users/email/:email",       controller: UserController,             action: "getUserByEmail"},
    { method: "get",    route: "/users/:id",                controller: UserController,             action: "one"},
    { method: "post",   route: "/users/sendEmail",          controller: UserController,             action: "sendEmail"},
    { method: "post",   route: "/users/create",             controller: UserController,             action: "createUser"},
    { method: "post",   route: "/users/auth",               controller: UserController,             action: "auth" },
    { method: "post",   route: "/users/refreshtoken",       controller: RefreshTokenUserController, action: "handle" },    
    { method: "post",   route: "/users",                    controller: UserController,             action: "save"},
    { method: "delete", route: "/users/:id",                controller: UserController,             action: "remove"},

    { method: "get",    route: "/segments",                 controller: SegmentController,          action: "all"},
    { method: "get",    route: "/segments/:id",             controller: SegmentController,          action: "one"},
    { method: "post",   route: "/segments",                 controller: SegmentController,          action: "save"},
    { method: "delete", route: "/segments/:id",             controller: SegmentController,          action: "remove"},

    { method: "get",    route: "/companies",                controller: CompanyController,          action: "all"},
    { method: "get",    route: "/companies/:id",            controller: CompanyController,          action: "one"},
    { method: "post",   route: "/companies",                controller: CompanyController,          action: "save"},
    { method: "delete", route: "/companies/:id",            controller: CompanyController,          action: "remove"},

    { method: "get",    route: "/address",                  controller: AddressControler,           action: "all"},
    { method: "get",    route: "/address/:id",              controller: AddressControler,           action: "one"},
    { method: "post",   route: "/address",                  controller: AddressControler,           action: "save"},
    { method: "delete", route: "/address/:id",              controller: AddressControler,           action: "remove"},

    { method: "get",    route: "/usersaddress",             controller: UserAddressController,      action: "all" },
    { method: "get",    route: "/usersaddress/users/:id",   controller: UserAddressController,      action: "getAddressByUser" },
    { method: "get",    route: "/usersaddress/:id",         controller: UserAddressController,      action: "one" },
    { method: "post",   route: "/usersaddress",             controller: UserAddressController,      action: "save" },
    { method: "delete", route: "/usersaddress/:id",         controller: UserAddressController,      action: "remove" },    

    { method: "get",    route: "/fidelities",               controller: FidelityController,         action: "all"},
    { method: "get",    route: "/fidelities/:id",           controller: FidelityController,         action: "one"},
    { method: "get",    route: "/fidelities/:id/promotion", controller: FidelityController,         action: "getFidelityByPromotion"},
    { method: "get",    route: "/fidelities/:id/user",      controller: FidelityController,         action: "getFidelityByUser"},
    { method: "get",    route: "/fidelities/:iduser/user/:idpromotion/promotion", controller: FidelityController,         action: "getFidelityByUserPromotion"},
    { method: "post",   route: "/fidelities",               controller: FidelityController,         action: "save"},
    { method: "delete", route: "/fidelities/:id",           controller: FidelityController,         action: "remove"},
    
    { method: "get",    route: "/categories",               controller: CategoryController,         action: "all"},
    { method: "get",    route: "/categories/:id",           controller: CategoryController,         action: "one"},
    { method: "post",   route: "/categories",               controller: CategoryController,         action: "save"},
    { method: "delete", route: "/categories/:id",           controller: CategoryController,         action: "remove"},
    
    { method: "get",    route: "/products",                 controller: ProductController,          action: "all"},
    { method: "get",    route: "/products/:id",             controller: ProductController,          action: "one"},
    { method: "get",    route: "/products/name/:search",    controller: ProductController,          action: "getProductByName"},
    { method: "post",   route: "/products",                 controller: ProductController,          action: "save"},
    { method: "delete", route: "/products/:id",             controller: ProductController,          action: "remove"},
    
    { method: "get",    route: "/menus",                    controller: MenuController,             action: "all"},
    { method: "get",    route: "/menus/company/:id",        controller: MenuController,             action: "getMenuByCompany"},
    { method: "get",    route: "/menus/:id",                controller: MenuController,             action: "one"},
    { method: "post",   route: "/menus",                    controller: MenuController,             action: "save"},
    { method: "delete", route: "/menus/:id",                controller: MenuController,             action: "remove"},
    
    { method: "get",    route: "/promotions",               controller: PromotionController,        action: "all"},
    { method: "get",    route: "/promotions/company/:id",   controller: PromotionController,        action: "getPromotionByCompany"},
    { method: "get",    route: "/promotions/:id",           controller: PromotionController,        action: "one"},
    { method: "post",   route: "/promotions",               controller: PromotionController,        action: "save"},
    { method: "delete", route: "/promotions/:id",           controller: PromotionController,        action: "remove"},
    
    { method: "get",    route: "/storage/:filename",        controller: StorageController,          action: "getFile" },

    { method: "post",   route: "/voucher",                  controller: VoucherController,          action: "handle"},
];