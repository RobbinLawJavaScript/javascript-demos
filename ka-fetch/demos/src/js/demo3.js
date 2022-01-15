export function demo() {
    console.log('demo3');
    fetch('./data/bones.json')
        .then((res) => {
            return res.json()
        }).then(data => {
            console.log('data: ', data)
        }).catch((err) => {
            console.log('rejected', err)
        });
}