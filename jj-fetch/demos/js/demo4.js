export function demo() {
    console.log('demo4');
    // async functions always returns a promise
    const getLocalBones = async () => {
        //the await keyword "stalls" the JS assignment
        // until the data is returned (promise resolves or is rejected) 
        const res = await fetch('./data/bones.json')
        const data = await res.json();

        return data;
    }
    // After the function resolves the .then is run 
    console.log(1);
    console.log(2);
    let retrivedBones = getLocalBones()
        .then(data => console.log('resolved', data));
    console.log(3);
    console.log(4);
}