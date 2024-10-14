/* Die for-Schleife wird am häufigsten dann verwendet, wenn die Anzahl der
Wiederholungen im Voraus bekannt ist. Sie besteht aus drei Hauptbestandteilen:
Initialisierung, Bedingung und das Aktualisieren der Schleifenvariablen.

 for (let i = 0 (wo fang ich an?); i <= x ( wie lange laufe ich ?); i++ (inkrement) )
 {Code} */

for (let index = 1; index <= 5; index++) {
  console.log(index);
}

/* Die while-Schleife wird verwendet, wenn die Anzahl der Wiederholungen nicht im
Voraus bekannt ist. Die Schleife wird solange ausgeführt, wie die Bedingung true ist.

while (Ich laufe solange wie ich stimme dannach spring ich raus) {Code}

*/

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

/* Die do...while-Schleife ist ähnlich wie die while-Schleife, jedoch wird der Codeblock
mindestens einmal ausgeführt, bevor die Bedingung geprüft wird.

do {
 Code der mindestens einmal ausgeführt wird
} while (___________); */

let ii = 1;
do {
  console.log(ii);
  ii++;
} while (ii <= 5);
