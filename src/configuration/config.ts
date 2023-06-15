export default {
  port: process.env.PORT || 3000,
  folderStorage: process.env.URL_STORAGE || "./storage",
  pictureQuality: process.env.PICTURE_QUALITY || 80,
  secretKey: process.env.SECRETKEY || "96c02216-286a-4312-a37b-38b6f2594024",
  publicRoutes: process.env.PUBLICROUTES || [
    "users/create",
    "users/auth",
    "users/email",
    "users/sendEmail",
    "/users/refreshtoken",
    "storage",
    "companies",
    "menus/company",
    "voucher",
  ],
};
