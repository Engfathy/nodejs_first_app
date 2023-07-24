const Http = require("http");


    const server = Http.createServer((req, res) => {
        if (req.url == "/") {
            res.writeHead(200, {
                "content-Type": "text",
                fromMe: "fuck you",
            });
            res.end("fast page");
        } else if (req.url == "/about") {
            res.writeHead(200, {
                "content-Type": "text/plain",
                fromMe: "fuck you",
            });
            res.end("about");
        }
    });

    const PORT =8000 || process.env.PORT ;

    server.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
