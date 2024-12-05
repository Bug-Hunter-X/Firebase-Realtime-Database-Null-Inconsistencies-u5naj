function handleNullValues(data) {
  //Check for null values and assign default values
  const processedData = {};
  for (const key in data) {
    if (data[key] === null) {
      processedData[key] = ""; // Or assign a more appropriate default based on data type
    } else {
      processedData[key] = data[key];
    }
  }
  return processedData;
}

// ... rest of the Firebase retrieval logic ...

//Example usage
firebase.database().ref('/myData').once('value').then((snapshot) => {
  const data = snapshot.val();
  const safeData = handleNullValues(data); // Process potential null values
  console.log(safeData);
});