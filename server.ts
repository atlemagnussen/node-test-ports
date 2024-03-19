import http from "http"

const host = "::" //"0.0.0.0"
const port = process.env.PORT ?? 9001 as number

function requestListener(req: http.IncomingMessage, res: http.ServerResponse) {
    res.writeHead(200)
    res.end(render(req))
}

function render(req: http.IncomingMessage) {
    const ipServer = req.socket.localAddress
    const familyServer = req.socket.localFamily

    const ipClient = req.socket.remoteAddress
    const familyClient = req.socket.remoteFamily

    return `<p>ipServer: ${ipServer} (${familyServer})</p>
            <p>your ip ${ipClient} (${familyClient})</p>
            <p>port ${port}</p>`
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
