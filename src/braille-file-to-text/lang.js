export default function lang(text) {
  if ('es' == navigator.language.substring(0, 2)) {
    return spanish[text] || text
  }
  
  return text
}

const spanish = {
  'Braille files to plain text': 'Archivo braille a texto plano',
  'A simple way to convert your braille files to text.': 'Una forma sencilla de convertir tus archivos braille a texto',
  'you have to select files': 'Tienes que seleccionar archivos',
  'No zip file generated.': 'No se ha generado el archivo zip',
  'Your files converted to text are in file zip downloaded.': 'Tus archivos convertidos a texto están en el archivo zip',
  'Select braille files': 'Selecciona archivos braille',
  'Choose braille files to convert': 'Selecciona los archivos braille a convertir',
  'Convert': 'Convertir',
  'Download': 'Descargar',
  'All files and conversions are processed on your computer.': 'Todos los archivos y conversiones son procesados en tu ordenador.',
  'No information is sent to the internet.': 'Ninguna información es enviada a internet',
  'No files selecteds.': 'No hay archivos seleccionados.',
  'No files converted.': 'No hay archivos convertidos.',
  'First select the braille files.': 'Primero selecciona los archivos braille.',
  'Then is show the files list.': 'Entonces se mostrará una lista con los archivos seleccionados.',
  'Second click or press enter on Convert button.': 'Segundo pulsa el botón convertir.',
  'Then show the converted files list.': 'Entonces se mostrará la lista de archivos convertidos',
  'Finally click or press enter on Download button.': 'Por último pulsa el botón descargar.',
  'Then the file zip with all converted files are downloaded.': 'Entonces el archivo zip con todos los ficheros convertidos será descargado.',
  'Help': 'Ayuda',
  'FilesConverted': 'FicherosConvertidos',
}
