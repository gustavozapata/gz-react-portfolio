exports.sum = (a, b) => {
  return a + b;
};

exports.fetchData = async () => {
  const res = await fetch("http://192.168.1.29:4000/api/v1/assets");
  const json = await res.json();
  return json.data[0].name;
};
