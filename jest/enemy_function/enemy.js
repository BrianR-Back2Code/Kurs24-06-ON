import fs from "fs/promises";
import path from "path";

const enemyDataPath = path.resolve("./enemy.json"); // Pfad zur Gegner-JSON-Datei

export async function loadEnemyData() {
  try {
    const data = await fs.readFile(enemyDataPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Fehler beim Laden der Gegnerdaten:", error);
    throw new Error("Gegnerdaten konnten nicht geladen werden.");
  }
}
