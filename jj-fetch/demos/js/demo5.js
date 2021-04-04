export function demo() {
    console.log('hey man demo5');
    const getLocalBones = async () => {
        //fetch ill-formed JSON 
        const res = await fetch('./data/bad-bones.json')
        const data = await res.json();

        return data;
    }
    let retrivedBones = getLocalBones()
        .then(data => console.log('resolved', data))
        // Catch the error this Error detects if the JSON can be read
        // Note: No error will result if the resource you are fetching does
        // exist
        .catch((err) => console.log('rejected', err.message))
}