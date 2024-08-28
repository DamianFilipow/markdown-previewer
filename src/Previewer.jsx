import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

function Previewer(props) {

    return(
        <div className="previewer-container">
            <header>Previewer</header>
            <div id='preview'><ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeSanitize, remarkGfm]}>{props.text}</ReactMarkdown></div>
        </div>
    )
}

export default Previewer

//link, inline code, a code block, a list item, a blockquote, an image, and bolded text