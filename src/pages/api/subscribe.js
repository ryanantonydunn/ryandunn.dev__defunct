import mailchimp from "@mailchimp/mailchimp_marketing";

const apiKey = process.env.MAILCHIMP_API_KEY;
const server = apiKey.split("-")[1];
mailchimp.setConfig({ apiKey, server });

const listId = process.env.MAILCHIMP_LIST_ID;

export default async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  return new Promise((reject, resolve) => {
    mailchimp.lists
      .addListMember(listId, {
        email_address: email,
        status: "subscribed",
      })
      .then(() => {
        res.status(201).json({ error: "" });
        resolve();
      })
      .catch((err) => {
        const { status, detail } = err.response.body;
        res.status(status).json({ error: detail });
        resolve();
      });
  });
};
