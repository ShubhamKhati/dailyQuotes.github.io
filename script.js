function generate() {
    var quotes={
        "- mahatma gandhi": '"Honesty is the best policy"',
        "- subhas chandra bose": '"Tum mujhe khoon do mai tumhe ajadi dunga"',
        "- Zakir Khan": '"Mai shunya pe sawat kuch beadab sa khumar hu mai mushkilo se kya daru mai bekhueb hazar hu"',
        "- Bhagat Singh": '"Inqualab Zindabad"'
    }
    var authors=Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*quotes.length)];
    var quote=quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}