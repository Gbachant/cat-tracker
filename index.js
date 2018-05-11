function check(form) {
  if (form.userid.value == "aub" && form.pswrd.value == "123") {
    window.open('aub.html');
  } else {
    alert("Username and password don't match.");
  }
}

class Animal {
  constructor(name, sex, breed, age, weight);
  }
  this.name = name;
  this.sex = sex;
  this.breed = breed;
  this.age = age;
  this.weight = weight;
}

class Cat extends Animal {

}

class Dog extends Animal {

}

function printInfo () {
  const fullInfo = new Animal (
    document.getElementById('petname'),
    document.getElementById('sex'),
    document.getElementById('breed'),
    123,
    143
  );
  alert(fullInfo);
  console.log(fullInfo);
}
