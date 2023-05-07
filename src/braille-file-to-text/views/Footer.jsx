import lang from "../lang"

export default function Footer() {
  return (
    <article className="message">
      <div className="message-body">
        { lang('All files and conversions are processed on your computer.') } <strong>{ lang('No information is sent to the internet.') }</strong>
      </div>
    </article>
  )
}
