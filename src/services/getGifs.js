const apiKey = "hqRbvWO8ehW5LCBXRYaxrwdYibH8dTFM";
export default function getGifs({ keyword = "morty" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((res) => {
      const { data } = res;
      const gifs = data.map((img) => {
        const { images, title, id } = img;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
