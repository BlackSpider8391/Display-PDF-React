import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "./components/pdf/all-pages";
import { sampleBase64pdf } from "./sampleBase64pdf";

import "./styles.css";
import samplePDF from "./sample.pdf";

function App() {
  return (
    <div className="App">
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={samplePDF} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>

      <hr />

      <h4>Base 64 Single Page</h4>
      <SinglePagePDFViewer pdf={sampleBase64pdf} />

      <hr />
    </div>
  );
}

export default App;
