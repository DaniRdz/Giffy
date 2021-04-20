const apiKey = "hqRbvWO8ehW5LCBXRYaxrwdYibH8dTFM";
export default function getTrendingGifs() {
  const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((res) => {
      const { data } = res;

      return data;
    });
}
