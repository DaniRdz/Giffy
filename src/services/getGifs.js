const apiKey = "hqRbvWO8ehW5LCBXRYaxrwdYibH8dTFM";
export default function getGifs({
  limit = 25,
  keyword = "morty",
  page = 0,
} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`;

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
