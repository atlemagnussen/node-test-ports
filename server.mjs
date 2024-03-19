import http from "http"

const host = "::" //"0.0.0.0"
const port = process.env.PORT ?? 9001

function requestListener(req, res) {
    res.writeHead(200)
    const ipClient = req.socket.localAddress
    res.end(`Your ip is ${ipClient}`)
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
