const apiKey = "hqRbvWO8ehW5LCBXRYaxrwdYibH8dTFM";

export default function getSingleGif({ id }) {
  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((res) => {
      const { data } = res;
      const { images, title, id } = data;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
}
