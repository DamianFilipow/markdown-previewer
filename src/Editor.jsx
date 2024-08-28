import { useState } from "react";
import Previewer from "./Previewer";

function Editor() {

    const [textValue, setTextValue] = useState(
`
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

const blabla = "blabla";
const bla = 15;
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`)

    const handleChange = (event) => {
        setTextValue(event.target.value);
    }

    return(
        <>
            <div className="editor-container">
                <header>Editor</header>
                <textarea type='text' id='editor' value={textValue} onChange={handleChange}></textarea>   
            </div>
            <Previewer text={textValue}/>
        </>
    )
}

export default Editor