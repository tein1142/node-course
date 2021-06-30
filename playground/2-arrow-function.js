// const square = function (x) {
//     return x * x
// }

// const square = (x) => x*x

// console.log(square(1.2))

const party = {
    name: 'Birthday party',
    myFriend: ['leng','Guy','JJ'],
    listGuest(){
        const that = this
     console.log('Guest list for ' + this.name)

    this.myFriend.forEach( function(guest) {
        console.log(guest + ' is attending ' + this.name)
    })
    }
}

party.listGuest()