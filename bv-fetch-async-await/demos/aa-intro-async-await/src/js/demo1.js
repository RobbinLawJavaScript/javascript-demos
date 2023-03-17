// https://www.sitepoint.com/delay-sleep-pause-wait/

export default function Demo1() {
	
	const localDataURLGood = './data/bones.json';
	const localDataURLBadEndPoint = './data/no-file.json';
	const localDataURLBadData = './data/bad-bones.json';


	const getData = async (URL) => {
		console.log(`getData begin with URL: ${URL}`)
		const res = await fetch(URL, {
			method: 'GET',
			headers: {
				'Accept': 'application/json. text/plain, */*',
				"Content-Type": "application/json",
				'X-Bin-Meta': 'false'
			},
		});
		console.log(`resolved response with URL: ${URL}`)
		console.log(res)
		if (!res.ok) {
			throw new Error('Bad URL or Server is Down');
	 	}
		const data = await res.json();
		console.log(`resolved data with URL:', ${URL}`);
		console.log(data);
		console.log(`getData end with URL: ${URL}`)
		return data;
	}

	const app = async (URL) => {
		try{
			console.log(`app try begin with URL ${URL}`)
			const data = await getData(URL)
			console.log(`app try end with URL ${URL}`)
		}
		catch(error){
			console.log(`app catch begin with URL ${URL}`)
			console.error(error)
			console.log(`app catch end with URL ${URL}`)
		}
	}

	let count = 0
	document.querySelector('#button-next').addEventListener("click", (e) => {
		count ++
		console.clear()
		if(count == 1){
			app(localDataURLGood)
		} else if (count == 2){
			app(localDataURLBadEndPoint)
		} else if (count == 3){
			app(localDataURLBadData)
		} else {
			console.log(`Press the CLEAR button to start over`)
		}
	})


	document.querySelector('#button-clear').addEventListener("click", (e) => {
		count = 0
		console.clear()
		console.log(`Demos are reset and ready to run again by pressing the NEXT button`)
	})

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	const runAppThreeTimesWithDelayBetween = async () => {
		console.clear()
		app(localDataURLGood)
		await sleep(5000);
		app(localDataURLBadEndPoint)
		await sleep(5000);
		app(localDataURLBadData)
	}
	
	//runAppThreeTimesWithDelayBetween()

}