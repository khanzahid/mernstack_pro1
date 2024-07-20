import express from 'express';
const app = express();

app.listen(5000, () => {
    console.log("Server is running on port 5000");
    console.log("http://localhost:5000");
});

app.get("/", (req, res) => {
    console.log("Server is running!");
    res.send("Server is running!");
});

app.get('/api/about', (req, res) => {
    res.send({
        "name": "Muhammad Zahid",
        "age": 22,
        "country": "Pakistan",
        'Page_Title': 'About Me',
        "github": "https://github.com/khanzahid",
    })
});

app.get("/api/user", (req, res) => {
    const data = [
    {
        "login": "khanzahid",
        "avatar_url": "https://avatars.githubusercontent.com/u/22369116?v=4",
        "name": "Muhammad Zahid",
        "location": "Islamabad pakistan",
    },
    {
        "login": "fawadkhan781",
        "avatar_url": "https://avatars.githubusercontent.com/u/69587011?v=4",
        "name": "Fawad khan",
        "location": "Kpk buner pakistan",
    }
];
    res.send(data);
})
