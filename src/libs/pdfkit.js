import PDFDocument from 'pdfkit';

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument();

  doc.on('data', dataCallback);

  doc.on('end', endCallback);
  
  doc.fontSize(25).text('Here is some vector graphics...', 100, 80);
  doc.end('end', endCallback);
}

export default buildPDF;