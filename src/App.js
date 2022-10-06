import { PrismicRichText, useFirstPrismicDocument ,useAllPrismicDocumentsByType} from '@prismicio/react'

const App = () => {
  const [document] = useFirstPrismicDocument()
  const [documents] = useAllPrismicDocumentsByType('post')
  console.log(documents)
  return(
    <div>
      {document && (<div>
        <PrismicRichText field={document.data.title} />,
        <PrismicRichText field={document.data.content} />
        </div>
      )}

 </div> 
  )
}

export default App