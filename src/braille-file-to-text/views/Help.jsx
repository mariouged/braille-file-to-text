import lang from "../lang"

export default function Help() {
  return (
    <article className="message is-dark">
      <div className="message-header">
        <p>{ lang('Help') }</p>
      </div>
      <div className="message-body">
        <p>{ lang('First select the braille files.') }</p>
        <p>{ lang('Then is show the files list.') }</p>
        <p>{ lang('Second click or press enter on Convert button.') }</p>
        <p>{ lang('Then show the converted files list.') }</p>
        <p>{ lang('Finally click or press enter on Download button.') }</p>
        <p>{ lang('Then the file zip with all converted files are downloaded.') }</p>
      </div>
    </article>
  )
}