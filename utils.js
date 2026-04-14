window.downloadPDF = function(questions) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // **Header**
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('Work Side', 105, 20, { align: 'center' });

    // Company Logo (replace with your logo path or a placeholder)
    // You can add a logo using doc.addImage(logo, 'PNG', 10, 10, 40, 20);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Manikchak, Malda, West Bengal, 732202', 105, 28, { align: 'center' });

    // QR Code with PDF details
    const qrCodeData = `PDF generated on: ${new Date().toLocaleString()}\nQuestions: ${questions.length}`;
    const qr = qrcode(0, 'L');
    qr.addData(qrCodeData);
    qr.make();
    const qrCodeImage = qr.createDataURL();
    doc.addImage(qrCodeImage, 'PNG', 160, 10, 30, 30);

    // **Deadline Notice**
    doc.setFontSize(12);
    doc.setFont('helvetica', 'italic');
    doc.text('You have 2 days to solve these questions and upload your answers.', 105, 45, { align: 'center' });

    // **Questions**
    let yPos = 60;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    questions.forEach((question, index) => {
        if (yPos > 270) {
            doc.addPage();
            yPos = 20;
        }

        doc.text(`${index + 1}. ${question.id}: ${question.text}`, 15, yPos);
        yPos += 12;
    });

    // **Footer**
    doc.setFontSize(8);
    doc.text(`Page ${doc.internal.getNumberOfPages()}`,
        doc.internal.pageSize.getWidth() / 2, 290, { align: 'center' });

    doc.save('workside_questions.pdf');
}