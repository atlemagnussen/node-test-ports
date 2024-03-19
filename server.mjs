import http from "http"

const host = "::" //"0.0.0.0"
const port = process.env.PORT ?? 9001

function requestListener(req, res) {
    res.writeHead(200)
    const ipServer = req.socket.localAddress
    const ipClient = req.socket.remoteAddress
    res.end(render(ipClient, ipServer))
}

function render(ipClient, ipServer) {

    return `<p>ipServer: ${ipServer}</p><p>your ip ${ipClient}</p><p>port ${port}}</p>`
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})
