function Demo4() {

    // async functions always returns a promise
    const getLocalBones = async () => {
        console.log(5);
        //the await keyword "stalls" the JS assignment
        // until the data is returned (promise resolves or is rejected) 
        const res = await fetch('./data/bones.json');
        //const res = await fetch('./data/bad-bones.json');
        console.log('response', res);
        const data = await res.json();
        console.log('data', data);

        return data;
    }
    // After the function resolves the .then is run 
    console.log(1);
    console.log(2);
    let retrivedBones = getLocalBones()
        .then((data) => console.log('resolved', data))
        .catch((err) => console.log('rejected', err));
    console.log(3);
    console.log(4);
}

export default Demo4;