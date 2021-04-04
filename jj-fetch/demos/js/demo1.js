export function demo() {
    console.log('hey man demo1');
    fetch('./data/bones.json')
        .then((res)=>{
            console.log('resolved: ', res)
        });
}
