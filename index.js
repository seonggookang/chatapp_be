const { createServer } = require("http"); // 서버 하나 만듬
const app = require("./app"); //아까 만든 앱 들고 오기.
const httpServer = createServer(app); // 이걸 통해 서버를 만들거얌, 그리고 아까만든
// dabtbase연결부분을 올릴거야
// 궁극의목표 : 웹소켓을 만들어 올려야지.
const { Server } = require("socket.io");
require("dotenv").config();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  }, // 웹소켓에서도 cors 세팅을 해줘야함. 아무도 들락 거리면 안되니까.
});

require("./utils/io")(io); // 해당파일로 io가 전달됨.

// 위의 서버를 틀어놔야함.
httpServer.listen(process.env.PORT, () => {
  // process.env를 쓰려면 위에 dotenv 써줘야함.
  // 5001번에 띄워놓을거임.
  console.log("server listening on port", process.env.PORT);
});
