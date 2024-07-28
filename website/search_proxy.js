export default handler = async (req, res) => {
  const { query } = req;
  const { url } = query;

  if (!url) {
    res.status(400).json({ error: "URL parameter is required" });
    return;
  }

  try {
    const response = await fetch(url);
    const data = await response.text();

    res.status(response.status).send(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};
