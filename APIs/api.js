//@flow

const App_name = 'PlatziMusic'
const API_key = 'f3b559eaad4f15f303aa361e0b6bf59e'
const Secret_key = '38deeab59aca0175caf92014930dfe39'
const Registered = 'Arthaclarius'
const URL = 'https://ws.audioscrobbler.com/2.0/'

function geoGetTopArtists(){
  const methodURL = URL + `?method=geo.gettopartists&country=spain&api_key=${API_key}&format=json`
  return fetch(methodURL)
    .then(res => res.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
      return {
        name: artist.name,
        image: artist.image[3]['#text'],
        likes: 10,
        comments: 8
      }
    }))
}

export { geoGetTopArtists }
