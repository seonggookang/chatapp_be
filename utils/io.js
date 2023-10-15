// 통신관련된 함수를 여기에 싹 다 넣을거임.
module.exports = function (io) {
  //io~~~~
  // 말하는 함수 emit
  // 듣는 함수 on
  // emit과 on의 조합

  io.on("connection", async (socket) => {
    // 연결된 사람의 정보를 socket에 담아줌
    console.log("client is connected", socket.id);

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};
// 소켓 io에서는 크게 2가지 함수를 제공해줌
