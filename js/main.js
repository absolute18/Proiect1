
obiect = {"kind":"youtube#searchListResponse","etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"","nextPageToken":"CAUQAA","regionCode":"KE","pageInfo":{"totalResults":4249,"resultsPerPage":5},"items":[{"kind":"youtube#searchResult","etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"","id":{"kind":"youtube#channel","channelId":"UCJowOS1R0FnhipXVqEnYU1A"}},{"kind":"youtube#searchResult","etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"","id":{"kind":"youtube#video","videoId":"Eqa2nAAhHN0"}},{"kind":"youtube#searchResult","etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"","id":{"kind":"youtube#video","videoId":"IirngItQuVs"}}]}

console.log(obiect.regionCode);
console.log(obiect.pageInfo.totalResults);
console.log(obiect.items[0].id.channelId);
console.log(obiect.items[0].etag);
console.log(obiect.items[1].etag);










/*

function salut(){
	console.log("Salut");
}
salut();

scadere = (x,y) =>{
	console.log(x-y);
}
scadere(4,6)


function adunare(x,y){
	console.log(x+y);
}
adunare(2,4);

for(i=0;i<5;i++){
	if(i%2==0){
		console.log("Par");
	}
}

nume = "Ion";
hobby = ["Desen","Muzica"];
ion = {varsta:20,
	oras:"Bucuresti",
	masini:["Opel","Fiat","Alfa Romeo"]
	  }


console.log(ion.masini[1]);
*/
