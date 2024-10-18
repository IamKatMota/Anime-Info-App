function getAnime() {
    const animeName = document.querySelector('#animeInput').value;

    fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&limit=1`)
    .then(res => res.json())
    .then(data => {
        if (data.data && data.data.length > 0) {
            const anime = data.data[0];
            document.querySelector('#animeTitle').innerText = anime.title;
            document.querySelector('#animeImage').src = anime.images.jpg.image_url;
            document.querySelector('#animeSynopsis').innerText = anime.synopsis;
            document.querySelector('#animeEpisodes').innerText = `Episodes: ${anime.episodes}`;
            document.querySelector('#animeScore').innerText = `Score: ${anime.score}`;
           
        } else {
            document.querySelector('#animeTitle').innerText = 'Anime not found';
            document.querySelector('#animeImage').src = '';
            document.querySelector('#animeSynopsis').innerText = '';
            document.querySelector('#animeEpisodes').innerText = '';
            document.querySelector('#animeScore').innerText = '';
            
        }
    })
    .catch(error => {
        console.error('Error fetching anime data:', error);
        alert('Failed to fetch anime data. Please try again.');
    });
}




   /* fetch(`https://api.jikan.moe/v4/anime?q=onepiece&limit=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data.data[0])})

        .catch(error => {
            console.error('Error fetching anime data:', error);
            alert('Failed to fetch anime data. Please try again.');
        });

*/