import express from "express";

const router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages});
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];

  if (!message) {
    return res.status(404).send("Mesaj bulunamadı.");
  }

  res.render("message", { message });
})

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect("/");
});



export default router;