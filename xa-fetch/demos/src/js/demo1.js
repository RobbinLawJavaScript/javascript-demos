export function demo() {
    console.log('demo1');
    fetch('./data/bones.json')
        .then((res)=>{
            console.log('resolved: ', res)
        });
}
