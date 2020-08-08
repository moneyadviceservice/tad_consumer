export const config = {
  api: {
    bodyParser: false,
  },
};

const Process = (req, res) => {
  if (req.method === "POST") {
    console.log(req.body);
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.body));
};
export default Process;
