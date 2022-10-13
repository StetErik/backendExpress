import * as uuid from 'uuid'
import path from 'path'

class FileService{
  saveFile(file){
    console.log(file)
    const fileName = uuid.v4() + '.jpg'
    const filePath = path.resolve('static', fileName)
    file.mv(filePath)
    return fileName
  }
}

export default new FileService()