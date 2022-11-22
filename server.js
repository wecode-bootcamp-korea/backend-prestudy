const express = require("express");
const morgan = require("morgan");
const MongoClient = require("mongodb").MongoClient;

const MONGO_DB = "mongodb+srv://sangwoong:sangwoong03@cluster0.s1sjkdz.mongodb.net/wecode-prestudy?retryWrites=true&w=majority";

const app = express();
const PORT = 8000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  MongoClient.connect(MONGO_DB, { useNewUrlParser: true }, (err, client) => {
    db = client.db("wecode-prestudy")

    if (err) {
      return err;
    }

    app.post("/signin", (req, res) => {
      res.send("로그인 완료");
    });
  
    app.post("/signup", (req, res) => {
      const { name, email, group, password } = req.body;
      const data = {
        name: name,
        email: email,
        group: group,
        password: password
      }

      db.collection('users').insertOne(data, (err, result) => {
        console.log(result)
      })
      res.send("회원가입 완료")
    })
  });

	app.get("/", (req, res) => {
		res.send("안녕하세요 위코드 홈페이지입니다.");
	});

	app.get("/signin", (req, res) => {
		res.sendFile(__dirname + "/signin.html");
	});

	app.get("/signup", (req, res) => {
		res.sendFile(__dirname + "/signup.html");
	});

	app.listen(PORT, () => {
		console.log(`Listening on Port ${PORT}`);
	});
};

startServer();