const array = [1,2,3,4,[4,2,5,0],[4,2,19,[2,7,3]]];
const spread = array.flat(Infinity);
// console.log(spread);

const one  = 245
const two  = 4542
const theee  = 3254
// console.log(Array.of(one,two,theee));


// console.log(Array.from("Naitik"));



const obj = {
    name: "Nocik",
    age: "19",
    "gameLiked" : "COC",
    email: "noick@gmail.com",
    isLoggedIn: true,
    day: ["Monday","Today"]
}

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj["gameLiked"]);



const user = {
    username: {
        userFullName: {
            firstname : "Noick",
            lastName : "nOICK"
        }
    }
}

// console.log(user.username.userFullName);


const combineTwoObj = Object.assign({}, obj,user);
// console.log(combineTwoObj);

const obj2 = {...user, ...obj};
// console.log(obj2)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// console.log(obj.hasOwnProperty("name"));



(function chai(){
    console.log("Heloo wooo");
})();


((name) => {
    console.log(`name :  defender ${name}`);
})("Thor");
