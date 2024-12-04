import fs from "fs/promises";
import { loadEnemyData } from "./enemy.js";

jest.mock("fs/promises");

describe("loadEnemyData", () => {
  test("findet den Gegner mit ID 6019 und dem Namen 'Patrickos, Wächter der Arena'", async () => {
    // Mock-Daten der JSON-Datei
    const mockEnemyData = JSON.stringify([
      { id: 6019, name: "Patrickos, Wächter der Arena" },
      { id: 6020, name: "Drakon, Bewahrer der Flamme" },
    ]);

    // Simuliert das Lesen der Datei
    fs.readFile.mockResolvedValue(mockEnemyData);

    // Überwacht die Funktion loadEnemyData
    const spy = jest.spyOn(fs, "readFile");

    // Lädt die Daten
    const enemies = await loadEnemyData();

    // Sicherstellen, dass readFile aufgerufen wurde
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);

    // Sucht nach dem Gegner mit ID 6019
    const enemy = enemies.find((e) => e.id === 6019);

    // Erwartet den richtigen Gegner
    expect(enemy).toEqual({
      id: 6019,
      name: "Patrickos, Wächter der Arena",
    });

    // Spy zurücksetzen
    spy.mockRestore();
  });
});
