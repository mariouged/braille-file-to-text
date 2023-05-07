import lang from '../lang'

export default function FilesBraList({ brailleFiles }) {
  if (!brailleFiles || brailleFiles.length === 0) {
    return (
      <div className="content">
        <p>{ lang('No files selecteds.') }</p>
      </div>
    )
  }

  const listFilesInfo = []
  for (const braFile of brailleFiles) {
    listFilesInfo.push({ name: braFile.name, type: braFile.type })
  }

  return (
    <div className="content">
      <ul>
        {listFilesInfo.map((fileInfo, index) => (
          <li key={index}>{fileInfo.name} {fileInfo.type}</li>
        ))}
      </ul>
    </div>
  )
}
