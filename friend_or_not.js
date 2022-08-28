function friend(friends){
    let myFriends = []
    for (let i = 0; i < friends.length; i++) {
        if ((friends[i]).length == 4) {
            myFriends.push(friends[i]);
        }
    }
    return myFriends;
  }
console.log(friend(["Ryan", "Kieran", "Mark"]));   //[ 'Ryan', 'Mark' ]
