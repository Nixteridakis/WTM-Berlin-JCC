# Cinema Theater
================

A data model were a person is watching a movie in a theater that are both attached to a specific price.
There is a shop were you can buy different items at different prices.

Two external modules have been used for this:

* Chalk [Chalk](https://www.npmjs.com/package/chalk)	

* PDFKit [PDFKit](https://www.npmjs.com/package/pdfkit)	

Notes:
A person can buy Ticket for a particular movie on a particular Theater therefore the items
a person can buy can only be related to that theater.

The application can be scalable in terms of a person going to multiple theaters in a single day 
or/and on multiple days.

For simplicity, the arguemnts of the PDF have been sent individually and not stored in an array.
