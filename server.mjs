import http from "http"

const host = "::" //"0.0.0.0"
const port = process.env.PORT ?? 9001

function requestListener(req, res) {
    res.writeHead(200)
    
    res.end(render(req))
}

function render(req) {

    const ipServer = req.socket.localAddress
    const familyServer = req.socket.localFamily

    const ipClient = req.socket.remoteAddress
    const familyClient = req.socket.remoteFamily

    console.log(`Incoming request from IP ${ipClient}`)

    return `<p>ipServer: ${ipServer} (${familyServer})</p>
            <p>your ip ${ipClient} (${familyClient})</p>
            <p>port ${port}</p>`
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})
