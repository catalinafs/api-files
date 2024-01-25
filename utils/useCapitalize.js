const useCapitalize = (str) => {
    let pieces = str.split(" ");

    for (let i = 0; i < pieces.length; i++) {
        let j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }

    return pieces.join(" ");
}

module.exports = useCapitalize;