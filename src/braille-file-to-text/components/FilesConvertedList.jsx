import lang from '../lang'

export default function FilesConvertedList({ txtFiles }) {
  if (!txtFiles || txtFiles.length === 0) {
    return (
      <div className="content">
        <p>{ lang('No files converted.') }</p>
      </div>
    )
  }

  return (
    <div className="content">
      <ul>
        {txtFiles.map((fileName, index) => (
          <li key={index}>{fileName}</li>
        ))}
      </ul>
    </div>
  )
}
