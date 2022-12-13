import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;
  // Access our data and
  // extract our Data (allservices).
  // res 404 if there are no allservices.
  // allservices - loop through them and identify the serviceID,
  // and add the email into emails_registered,
  // only if that email doesn't already exist.
  // check the format of the email to make sure it is valid.

  const filePath = buildPath();
  const { service_categories, allservices } = extractData(filePath);

  if (!allservices) {
    return res.status(404).json({
      status: 404,
      message: "Services data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    if (!email | !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const newAllServices = allservices.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: "This email has already been registered" });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });
    fs.writeFileSync(
      filePath,
      JSON.stringify({
        service_categories,
        allservices: newAllServices,
      })
    );
    // add our code here
    res.status(201).json({
      message: `You have been registered successfully with the following email address: ${email} for the event: ${eventId}`,
    });
  }
}
