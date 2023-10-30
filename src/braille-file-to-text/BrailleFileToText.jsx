import { useState } from 'react'
import TitleSection from './views/TitleSection'
import Footer from './views/Footer'
import Help from './views/Help'
import FilesBraList from './components/FilesBraList'
import FilesConvertedList from './components/FilesConvertedList'
import convertFilesBra2Text from './service/convertFilesBra2Text'
import saveAs from 'jszip/vendor/FileSaver'
import lang from './lang'

export default function BrailleFileToText() {

  const [brailleFiles, setBrailleFiles] = useState(null)
  const [convertNotification, setConvertNotification] = useState(null)
  const [txtFiles, setTxtFiles] = useState(null)
  const [zip, setZip] = useState(null)
  const [downloadNotification, setDownloadNotification] = useState(null)
  const [downloadSuccess, setDownloadSuccess] = useState(null)
  
  function init() {
    setBrailleFiles(null)
    setConvertNotification(null)
    setTxtFiles(null)
    setZip(null)
    setDownloadNotification(null)
    setDownloadSuccess(null)
  }

  function onChangeBrailleFiles(files) {
    init()
    setBrailleFiles(files)
  }

  function onConvert() {
    convert()
  }

  async function convert() {
    setConvertNotification(null)
    if (!brailleFiles || brailleFiles.length === 0) {
      return setConvertNotification(lang('you have to select files'))
    }

    const { zip, txtFiles } = await convertFilesBra2Text(brailleFiles)

    setZip(zip)
    setTxtFiles(txtFiles)
    download(zip)
  }

  function onDownload() {
    setDownloadNotification(null)
    if (!zip) {
      setDownloadNotification(lang('No zip file generated.'))
      return
    }

    download(zip)
  }

  function download(zip) {
    zip.generateAsync({ type: 'blob' }).then(function(content) {
      saveAs(content, lang('FilesConverted')+'.zip')
    })

    setDownloadSuccess(lang('Your files converted to text are in file zip downloaded.'))
  }

  return (
    <div className="container is-widescreen">
      <section className="section">

        <TitleSection/>

        <form className="box" action="#">

          <div className="field">
            <label className="label" htmlFor="brailleFiles">{ lang('Select braille files') }</label>
            <div className="file">
              <label className="file-label">
                <input onChange={(e) => onChangeBrailleFiles(e.target.files)} className="input is-link" type="file" name="brailleFiles" multiple />
                {/*
                <span className="file-cta">
                  <span className="file-label">
                    { lang('Choose braille files to convert') }
                  </span>
                </span>
                */}
              </label>
            </div>
          </div>

          <FilesBraList brailleFiles={brailleFiles}/>

          <div className="field is-grouped">
            <div className="control">
              <button onClick={e => onConvert(e)} className="button is-link is-outlined" type="button">{ lang('Convert') }</button>
            </div>
          </div>
          {convertNotification !== null && (
            <div className="notification is-danger">
              {convertNotification}
            </div>
          )}

          <FilesConvertedList txtFiles={txtFiles}/>

          <div className="field is-grouped">
            <div className="control">
              <button onClick={e => onDownload(e)} className="button is-link is-outlined" type="button">{ lang('Download') }</button>
            </div>
          </div>
          {downloadNotification !== null && (
            <div className="notification is-danger">
              {downloadNotification}
            </div>
          )}
          {downloadSuccess !== null && (
            <div className="notification is-success">
              {downloadSuccess}
            </div>
          )}
        </form>

        <Help/>

        <Footer/>

      </section>
    </div>
  )
}
