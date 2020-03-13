// Code here


// Release 1
const isroPhone = new Phone('isro');
const semmiPhone = new Phone('semmi');

isroPhone.createNewClan('druid');
semmiPhone.createNewClan('warrior');

// Release 2
isroPhone.clan.budget = -100;
console.log(isroPhone.clan.budget); // (isro-druid) current budget are 0$
isroPhone.clan.budget = 1000;
console.log(isroPhone.clan.budget); // (isro-druid) current budget are 1,000$

semmiPhone.clan.budget = 1000; 
console.log(semmiPhone.clan.budget); // (semmi-warrior) current budget are 1,000$

// Release 3
GameCenter.clanWars(semmiPhone, isroPhone); // It's a draw
isroPhone.clan.powerUp(100); // Successfully added 100 power to druid, current power are 1100.
GameCenter.clanWars(isroPhone, semmiPhone); // Congratulations isro won the game!

semmiPhone.createNewClan('druid');
semmiPhone.clan.powerUp(200); // Successfully added 200 power to druid, current power are 1200.
GameCenter.clanWars(isroPhone, semmiPhone); // Congratulations semmi won the game!