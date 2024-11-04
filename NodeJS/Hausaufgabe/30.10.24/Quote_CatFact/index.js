// Pakete importieren
import inspirationalQuotes from "inspirational-quotes";
import inquirer from "inquirer";
import boxen from "boxen";
import chalk from "chalk";
import catFacts from "cat-facts";

// Funktion zur Anzeige eines inspirierenden Zitats
function showInspirationalQuote() {
  const quote = inspirationalQuotes.getQuote(); // Fülle dies aus!
  const quoteBox = boxen(chalk.green(quote.text), {
    padding: 1,
    margin: 1,
    borderStyle: "double",
  });
  console.log(quoteBox); // Zitat in einer Box anzeigen
}

// Benutzername abfragen
async function askForUsername() {
  const answers = await inquirer.prompt({
    type: "input",
    name: "username",
    message: "Wie ist dein Name?",
  });
  return answers.username;
}

// Funktion für den Catfact
function showCatFact() {
  const fact = catFacts.random();
  const factBox = boxen(chalk.green(fact), {
    padding: 1,
    margin: 1,
    borderStyle: "double",
  });
  console.log(factBox); // Zitat in einer Box anzeigen
}

/*Wird nicht mehr benötigt da es in der main abgefragt wird
// Benutzerinteraktion für Katzenfakt
async function askForCatFact() {
  const response = await inquirer.prompt({
    type: "confirm",
    name: "showCatFact",
    message: "Möchtest du einen Katzenfakt sehen?",
    default: true,
  });
  if (response.showCatFact) {
    showCatFact();
  } else {
    console.log(chalk.yellow("Danke, dass du das Programm genutzt hast!"));
    process.exit(0); // Programm beenden
  }
}

*/

/*
Wird nicht mehr benötigt da es in der main abgefragt wird
// Funktion für die Benutzerinteraktion
async function askForNewQuote() {
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "getQuote",
      message: "Möchtest du ein inspirierendes Zitat sehen?",
      default: true,
    },
  ]);

  if (answers.getQuote) {
    showInspirationalQuote();
    askForNewQuote(); // Fragt erneut, ob ein weiteres Zitat angezeigt werden soll
  } else {
    console.log(chalk.yellow("Danke, dass du das Programm genutzt hast!"));
    process.exit(0); // Programm beenden
  }
}
*/
// Hauptfunktion
async function main() {
  const username = await askForUsername();
  console.log(chalk.blue(`Hallo, ${username}!`));
  console.log(
    chalk.blue(
      "Willkommen zu deinem inspirierenden Zitat- und Katzenfakt-Tool!"
    )
  );

  while (true) {
    const answers = await inquirer.prompt({
      type: "list",
      name: "choice",
      message:
        username +
        ", Möchtest du ein inspirierendes Zitat oder einen Katzenfakt sehen?",
      choices: ["Quote", "CatFact", "Beenden"],
    });

    if (answers.choice === "Quote") {
      showInspirationalQuote();
    } else if (answers.choice === "CatFact") {
      showCatFact();
    } else {
      console.log(
        chalk.yellow(`Danke , ${username} das du dieses Programm genutzt hast.`)
      );
      break;
    }
  }

  process.exit(0); // Programm beenden
}
main();
