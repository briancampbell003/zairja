let searchBtn = $('#goBtn');
let responseVerse = $('#responseVerse');

let questionBtnHandler = (event) => {
    event.preventDefault();
    console.log("got clicked");
    let verseID = Math.floor(Math.random() * 6236);

    async function getVerse() {
        let verseUrl = 'http://api.alquran.cloud/v1/ayah/' + verseID + '/en.pickthall';
        const response = await fetch(verseUrl);

        if (!response.ok) {
            // error catch
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        const verse = data.data.text;
        responseVerse.text(verse);
        return verse;
    }
    
    getVerse();

    // fetch(verseUrl)
    //     .then(function (response) {
    //         if (response.ok) {
    //             console.log("req okay");
    //             response.json().then(function (data) {
    //                 let verse = data.data.text;
    //                 console.log(verse);
    //             });
    //         } else {
    //             console.log("req not okay");
    //         }
    //     })
}

searchBtn.on('click', questionBtnHandler);