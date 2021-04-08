export function demo() {
    console.log('demo2');
    fetch('./data/bones.json')
        .then((res)=>{
           console.log('resolved: ', res) 
           //res.json returns a promise which will
           //be the data object in JSON format
            return res.json()
        })
        .then((data) => {
            console.log('data: ', data)
        });
}
