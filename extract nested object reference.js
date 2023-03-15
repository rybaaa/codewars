var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};
Object.prototype.hash = function(string) {
    let arr = string.split('.')
    let that = this
    for(let i = 0; i < arr.length; i++){
        if(!that.hasOwnProperty(arr[i])) return undefined
        that = that[arr[i]]
    }
    return that
}


console.log(obj.hash('person.name'))
console.log(obj.hash('person.history.bio'))
console.log(obj.hash('person.history.homeStreet'))

//obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined