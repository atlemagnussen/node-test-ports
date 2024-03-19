import http from "http"

const host = "::" //"0.0.0.0"
const port = process.env.PORT ?? 9001 as number

function requestListener(req: http.IncomingMessage, res: http.ServerResponse) {
    res.writeHead(200)
    const ipServer = req.socket.localAddress as string
    const ipClient = req.socket.remoteAddress as string
    res.end(render(ipClient, ipServer))
}

function render(ipClient: string, ipServer: string) {

    return `<p>ipServer: ${ipServer}</p><p>your ip ${ipClient}</p><p>port ${port}}</p>`
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
