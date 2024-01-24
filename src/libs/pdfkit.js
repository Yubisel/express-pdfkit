// import PDFDocument from 'pdfkit';
import PDFDocument from 'pdfkit-table';

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument();

  doc.on('data', dataCallback);

  doc.on('end', endCallback);
  
  doc.fontSize(25).text('Here is some vector graphics...', 100, 80);

  // -----------------------------------------------------------------------------------------------------
  // Simple Table with Array
  // -----------------------------------------------------------------------------------------------------
  const tableArray = {
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
      ["Switzerland", "12%", "+1.12%"],
      ["France", "67%", "-0.98%"],
      ["England", "33%", "+4.44%"],
    ],
  };
  doc.table( tableArray, { width: 300 }); // A4 595.28 x 841.89 (portrait) (about width sizes)

  doc.end('end', endCallback);
}

export default buildPDF;