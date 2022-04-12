// export async function getPhotos(id) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
//   );
//   if (!response.ok) {
//     throw new Error(`${response.status} - ${response.statusText}`);
//   }
//   console.log(id);
//   console.log(response);
//   return await response.json();
// }

export function getPhotos(id) {
  return fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    console.log(id);

    console.log(response);

    return response.json();
  });
}
