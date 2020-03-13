const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(function() {
  db.run(`CREATE TABLE IF NOT EXISTS Players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    gender VARCHAR(50),
    age INTEGER
  )`,data => {
    if(!data){
      console.log("TABLE Players TELAH DIBUAT");
    }else{
      console.log(data);
    }
  })
  db.run(`CREATE TABLE IF NOT EXISTS Cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    rank VARCHAR(50),
    type VARCHAR(50),
    skill VARCHAR(50),
    playerId INTEGER,
    FOREIGN KEY(playerId) REFERENCES players(id)
  )`,data => {
    if(!data){
      console.log("TABLE Cards TELAH DIBUAT");
    }else{
      console.log(data);
    }
  })
  db.run(`CREATE TABLE IF NOT EXISTS Status (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100),
    point INTEGER,
    level INTEGER,
    playerId INTEGER,
    FOREIGN KEY(playerId) REFERENCES players(id)
  )`,data => {
    if(!data){
      console.log("TABLE Status TELAH DIBUAT");
    }else{
      console.log(data);
    }
  })

  db.run(`INSERT INTO Players
    VALUES
    (NULL, "Fayola", "Male", 20),
    (NULL, "Jerax", "Male", 24),
    (NULL, "Hamabe", "Female", 18),
    (NULL, "Matumbaman", "Male", 21),
    (NULL, "Fiverna", "Male", 31),
    (NULL, "Jeyone", "Female", 25),
    (NULL, "Saitama" , "Male", 24),
    (NULL, "Rogoue", "Female", 22),
    (NULL, "Dendimon","Male", 27),
    (NULL, "Minami",  "Female", 18)
  `,data => {
    console.log("Data Players telah di input");
  })

  db.run(`INSERT INTO Cards
    VALUES(NULL, "Artoria Pendragon", "SSR", "Saber", "Excalibur", 1),
    (NULL, "Nero Claudius", "SR", "Saber", "Excalibur", 2),
    (NULL, "Fergus Mac Roich", "Common", "Saber", "Caladbolg", 3),
    (NULL, "Ryougi Shiki", "SSR", "Saber", "Boundary Of Emptiness", 4),
    (NULL, "Emiya", "SR", "Archer", "Unlimited Blade Words", 5),
    (NULL, "Arash", "Uncommon", "Archer", "Stella", 6),
    (NULL, "Orion", "SSR", "Archer", "Tri-star Amore Mio", 7),
    (NULL, "Arjuna", "SSR", "Archer", "Phasupata", 8),
    (NULL, "Chu Chulainn", "Common", "Lancer", "Gae Bolg", 9),
    (NULL, "Leonidas", "Uncommon", "Lancer", "Thermopylae Enomotia", 10),
    (NULL, "Brynhildr", "SSR", "Lancer", "Brynhildr Romantia", 2),
    (NULL, "Scatchach", "SSR", "Lancer", "Gae Bolg", 6),
    (NULL, "Saint Martha", "SR", "Rider", "Tarasque", 4),
    (NULL, "Francis Drake", "SSR", "Rider", "Golden Wild Hunt", 10),
    (NULL, "Medusa", "Common", "Rider", "Bellerophon", 1),
    (NULL, "Medea", "Common", "Caster", "Rule Breaker", 1),
    (NULL, "Zhuge Liang", "SSR", "Caster", "Unreturning Army", 2),
    (NULL, "Gilles de Rais", "Common", "Caster", "Prelati Spellbook", 1),
    (NULL, "Sasaki Kojiro", "Uncommon", "Assasin", "Swallow Reversal", 3),
    (NULL, "Cursed Arm Hassan", "Uncommon", "Assasin", "Zabaniya", 2),
    (NULL, "Heracles", "SR", "Berserk", "Nine Lives", 2),
    (NULL, "Lancelot", "SR", "Berserk", "Knight of Owner", 1),
    (NULL, "Artoria Pendragon", "SSR", "Saber", "Excalibur", 4),
    (NULL, "Nero Claudius", "SR", "Saber", "Excalibur", 3),
    (NULL, "Fergus Mac Roich", "Common", "Saber", "Caladbolg", 8),
    (NULL, "Ryougi Shiki", "SSR", "Saber", "Boundary Of Emptiness", 3),
    (NULL, "Emiya", "SR", "Archer", "Unlimited Blade Words", 8),
    (NULL, "Arash", "Uncommon", "Archer", "Stella", 9),
    (NULL, "Orion", "SSR", "Archer", "Tri-star Amore Mio", 10),
    (NULL, "Arjuna", "SSR", "Archer", "Phasupata", 7),
    (NULL, "Chu Chulainn", "Common", "Lancer", "Gae Bolg", 4),
    (NULL, "Leonidas", "Uncommon", "Lancer", "Thermopylae Enomotia", 1),
    (NULL, "Brynhildr", "SSR", "Lancer", "Brynhildr Romantia", 2),
    (NULL, "Scatchach", "SSR", "Lancer", "Gae Bolg", 5),
    (NULL, "Saint Martha", "SR", "Rider", "Tarasque", 3),
    (NULL, "Francis Drake", "SSR", "Rider", "Golden Wild Hunt", 3),
    (NULL, "Medusa", "Common", "Rider", "Bellerophon", 2),
    (NULL, "Medea", "Common", "Caster", "Rule Breaker", 1),
    (NULL, "Zhuge Liang", "SSR", "Caster", "Unreturning Army", 5),
    (NULL, "Gilles de Rais", "Common", "Caster", "Prelati Spellbook", 2),
    (NULL, "Sasaki Kojiro", "Uncommon", "Assasin", "Swallow Reversal", 3),
    (NULL, "Cursed Arm Hassan", "Uncommon", "Assasin", "Zabaniya", 7),
    (NULL, "Heracles", "SR", "Berserk", "Nine Lives", 5),
    (NULL, "Lancelot", "SR", "Berserk", "Knight of Owner", 7)

  `,data => {
    console.log("Data Cards telah di input");
  })
  // title point level playerId
  db.run(`INSERT INTO Status
    VALUES(NULL, "Beggar", 0, 10, 1),
    (NULL, "Vandal", 1220, 50, 2),
    (NULL, "Henchman", 8806, 76, 3),
    (NULL, "Greenhorn", 51595, 126, 4),
    (NULL, "Berserker", 462192, 241, 5),
    (NULL, "Hero", 16338232, 300, 6),
    (NULL, "Grunt", 230522, 210, 7),
    (NULL, "Novice", 87232, 160, 8),
    (NULL, "Apprentice", 113322, 182, 9),
    (NULL, "Rookie", 67292, 137, 10)
  `,data => {
    console.log("Data Bands telah di input");
  })
});

db.close();
