const PDF = require ('pdfkit');
const fs = require ('fs');

module.exports = {
    print : function(theater,Jake,Paul,Mary) {
        const doc = new PDF;
        doc.pipe(fs.createWriteStream('output.pdf'));
        
        doc.font('Times-Roman')
        .fontSize(22)
        .fillColor('red')
        .text(`Lets see what happened today at ${theater.name}`, 100, 50,{align: 'center'})

        doc.image('movie-theater.jpg', {
            fit: [450, 500],
            align: 'center',
            lineGap : 30

         });

         doc.fontSize(18).lineGap(30).fillColor('black');

         doc.text(`${Jake.name} has watched ${Jake.watching.name} and shopped ${Jake.shopped[0].name}`,{align: 'center'});
         doc.text(`${Paul.name} has watched ${Paul.watching.name} and shopped ${Paul.shopped[0].name}`,{align: 'center'});
         doc.text(`${Mary.name} has watched ${Mary.watching.name} and shopped ${Mary.shopped[0].name}`,{align: 'center'});
         doc.text(`The total sales of ${theater.name} were ${theater.totalSales}`,{align: 'center'});

        doc.end();
    }
}
