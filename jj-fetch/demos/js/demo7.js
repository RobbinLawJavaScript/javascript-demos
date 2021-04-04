export function demo() {
    console.log('hey man demo7');
    const remoteDataURL = "https://api.jsonbin.io/b/6067aa2a9fc4de52061c936c"

        const getRemoteBones = async () => {
                const res = await fetch(remoteDataURL, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json. text/plain, */*',
                    "Content-Type": "application/json",
                },
            }
            )
            
            if (res.status >=200 && res.status <=200){
                const data = await res.json();
                return data;
            } 
            else {
                //Handle Errors and Provide Status code:
                console.log(res.status, res.statusText);
            }
        }

        let retrivedBones = getRemoteBones()
            .then(data => console.log('resolved', data))
            .catch((err) => console.log('rejected', err.message))
}