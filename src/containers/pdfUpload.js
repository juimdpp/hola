import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import { pdfjs } from 'react-pdf';
import Hola from './HOLA.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Doc = () => (
  <Document
      file={Hola}
      onLoadError={console.error}
    >
      {/* <Page pageNumber={pageNumber} /> */}
    </Document>
)

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }



  return (
    <div>
      {/* <Document
        file={Hola}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <button onClick={() => pageNumber < numPages ? setPageNumber(pageNumber-1): null}> Prev </button>
      <button onClick={() => pageNumber > 0 ? setPageNumber(pageNumber+1): null}> Next </button>
      <p>Page {pageNumber} of {numPages}</p> */}
      <PDFDownloadLink document={<Doc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
}

export default MyApp;