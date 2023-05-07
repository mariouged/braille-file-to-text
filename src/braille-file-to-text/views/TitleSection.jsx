import lang from "../lang"

export default function TitleSection() {
  return (
    <>
      <h1 className="title">{ lang('Braille files to plain text') }</h1>
      <h2 className="subtitle">{ lang('A simple way to convert your braille files to text.') }</h2>
    </>
  )
}
