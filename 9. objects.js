const cricketPlayer = {
    name: "Arjun Kesharwani",
    country: "Germany",
    gender: "Male",
    skills: ["batsman", "keeper"],
    spouse: {
        firstNameFirstCharcter: "C",
        lastNameFirstCharcter: "S"
    },
    shot: () => {
        console.log("cover drive")
    }
}

// Accesing object keys
cricketPlayer.name //Arjun...
// cricketPlayer.spouse["last Name"]
cricketPlayer["name"] //Arjun....

const key = "country";
cricketPlayer[key] //Germany
cricketPlayer.key //undefined

Object.keys(cricketPlayer); //[keys array]
Object.values(cricketPlayer); // [values array]
Object.entries(cricketPlayer); // [[key, value], [key,value]]

for(const [key, value] of Object.entries(cricketPlayer)) {
    console.log(`${key} ${value}`);
}
cricketPlayer.hasOwnProperty("papa") //false
cricketPlayer.score = 90 //

// destructuring

const { gender, name: fullName, ...restProps } = cricketPlayer;

console.log(gender, fullName) //Male Arjun...

const person = cricketPlayer; //cloning

const person2 = {...cricketPlayer} //shallow clone

