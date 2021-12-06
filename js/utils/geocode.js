export async function getCoordinates(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { locations } = data;
    return locations[0].referencePosition;
  } catch (error) {
    console.log(error);
  }
}
