import { bytesBra2bytesAscii } from '@comoelagua.org/bra2text'
import JSZip from 'jszip'

const mimeType = 'text/plain'

export default async function convertFilesBra2Text(brailleFiles) {
  const zip = new JSZip()
  const txtFiles = []
  for (const braFile of brailleFiles) {
    const arrayBuffer = await braFile.arrayBuffer()
    const dataView = new DataView(arrayBuffer)
    let contentUtf8 = ''
    let bytesInLine = []
    for(let i = 0; i < arrayBuffer.byteLength; i++) {
      const byte = dataView.getUint8(i)
      bytesInLine.push(byte)
      if (10 === byte) {
        const bytesUtf8 = bytesBra2bytesAscii(bytesInLine)
        for (const byte8 of bytesUtf8) {
          contentUtf8 += String.fromCharCode(byte8)
        }
        bytesInLine = []
      }
    }
    
    const parts = braFile.name.split('.')
    const destName = parts[0] + '.txt'
    //const convertedFile = new File([contentUtf8], destName, { type: mimeType })
    //txtFiles.push(convertedFile)
    txtFiles.push(destName)

    zip.file(destName, contentUtf8)
  }

  return { zip, txtFiles }
}
