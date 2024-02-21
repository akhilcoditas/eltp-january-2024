const resolveAfterTwoSeconds = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved after 2 seconds");
        }, 2000);
    });
}

const asyncCall = async() => {
    console.log("Calling resolveAfter2Seconds");
    const result = await resolveAfterTwoSeconds();
    console.log(result);
    console.log("Async function execution continues after await");
}

console.log("Before Calling async function");
asyncCall();
console.log("After Calling async function");