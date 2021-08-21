class Person {
  constructor(personName, personAge, personGender) {
    this.personName = personName;
    this.personAge = personAge;
    this.personGender = personGender;
    this.fn = () => {
      console.log("This is a function inside a constructor");
    };
  }

  publicMethod() {
    return Person.getPersonData();
  }

  // Private method
  // It can only be access by members of same class
  static getPersonData() {
    return `Name is ${this.personName}. Age is ${this.personAge}. Gender is ${this.personGender}`;
  }

  // Public Method
  // It can be accessed by members of same class as well by one who are inherting the class
  getPersonDataPublic() {
    return `Name is ${this.personName}. Age is ${this.personAge}. Gender is ${this.personGender}`;
  }
}

class Player extends Person {
  constructor(personName, personAge, personGender, sportsName) {
    super(personName, personAge, personGender);
    this.sportsName = sportsName;
  }

  getPlayerData() {
    return `${super.getPersonDataPublic()}. Favorite sport is ${
      this.sportsName
    }`;
    // return this.fn()
  }
}

class Team extends Player {
  constructor(personName, personAge, personGender, sportsName, teamName) {
    super(personName, personAge, personGender, sportsName);
    this.teamName = teamName;
  }
  getPlayersTeamDetails() {
      return `${super.getPlayerData()}. Plays for ${this.teamName}`
  }
}

let person = new Person("John", "23", "Male");
// let person1 = new Person("Jane", "24", "Female");
// console.log(person.publicMethod())
// console.log(person.getPersonDataPublic())
// let player = new Player("John", "23", "Male", "Football");
// console.log(player.getPlayerData());
let team = new Team("John", "23", "Male", "Football", "Real Madrid");
console.log(team.getPlayersTeamDetails());
