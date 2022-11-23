function jsontoMap() {
  const map = new Map(Object.entries(JSON.parse(miJSON)));

  console.log(map);
}
