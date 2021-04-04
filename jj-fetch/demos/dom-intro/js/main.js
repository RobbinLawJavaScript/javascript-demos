


const remoteDataURL = "your-unique-URL"
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
const data = await res.json();
return data;
}
let retrivedBones = getRemoteBones()
.then(data => console.log('resolved', data))
.catch((err) => console.log('rejected', err.message))