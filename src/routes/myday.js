

app.get("/myday", async (req, res) => {
  const responseOfMyday = await client
    .db("todo")
    .collection("myday")
    .find({})
    .sort({ id: 1 })
    .limit(10)
    .toArray();
  console.log(responseOfMyday);
  res.send(responseOfMyday);
});