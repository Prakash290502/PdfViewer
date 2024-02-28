import React from 'react'
import { useSelector } from 'react-redux'
import { Document, Page, pdfjs } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const PdfViewer = () => {
    const formData=useSelector((state)=>state.form.formData)
    console.log('123',formData)
  return (
    <div >
       
        
        <div style={{textAlign:'center',display:"flex"}}> 
            <Document  file={formData}>
                <Page pageNumber={1} />
            </Document>
        </div>
    </div>
  )
}

export default PdfViewer