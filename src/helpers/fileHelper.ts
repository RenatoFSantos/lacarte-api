import { UtilsHelper } from './utilsHelper';
import * as fs from 'fs';
import variables from '../configuration/config';
import * as jimp from 'jimp';

export class FileHelper {
  static async writePicture(base64Data: string): Promise<string> {
    try {
      if (base64Data.indexOf('base64') == -1) {
        return base64Data;
      }
      let positionEndStringIdentityBase64: number = (base64Data.indexOf('base64') + 7);
      let _base64Data = base64Data.substring(positionEndStringIdentityBase64)

      let _directory = variables.folderStorage
      let dirExists = await fs.existsSync(_directory)
      if (!dirExists) {
        await fs.mkdirSync(_directory)
      }

      let fileName = `${UtilsHelper.GenerateUniqueHash}.jpg`;
      let fileNamePath = `${_directory}/${fileName}`;

      await fs.writeFileSync(fileNamePath, _base64Data, 'base64');

      let jimpResult = await jimp.read(fileNamePath)
      jimpResult.quality(parseInt(variables.pictureQuality.toString())).write(fileNamePath);
      return fileName;
    } catch (error) {
      return '';
    }
  }
}