export function demo() {
    console.log('demo3');
    fetch('./data/bones.json')
        .then((res) => {
            return res.json()
        }).then(data => {
            console.log('data: ', data)
        //Error handling in a fetch only occurs if a network connection
        // can not be established or maintained
        }).catch((err) => {
            console.log('rejected', err)
        });
}