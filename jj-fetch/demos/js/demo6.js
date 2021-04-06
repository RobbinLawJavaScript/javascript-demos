export function demo() {
    console.log('demo6');
    //Define the URL
    const remoteDataURL = "https://api.jsonbin.io/b/6067aa2a9fc4de52061c936c"

    //Define the fetch function using the remoteURL
    //with optional arguements
    const getRemoteBones = async () => {
        //Change the URL, Add Optional Arguments:
        const res = await fetch(remoteDataURL, {
            //Optional arguments
            method: 'GET',
            headers: {
                'Accept': 'application/json. text/plain, */*',
                "Content-Type": "application/json",
            },
        }
        )
        console.log(res.status)
        const data = await res.json();
        return data;
    }

    let retrivedBones = getRemoteBones()
        .then(data => console.log('resolved', data))
        .catch((err) => console.log('rejected', err.message));
}