function generateDua() {
    const duas = [
        "اللهم اجعلها من أهل الجنة (O Allah, make her among the people of Jannah)",
        "اللهم اغفر لي ولأهلي (O Allah, forgive me and my family)",
        "اللهم إني أسألك الجنة وما قرب إليها من قول أو عمل (O Allah, I ask you for Paradise and everything that leads to it)"
    ];
    const randomDua = duas[Math.floor(Math.random() * duas.length)];
    document.getElementById('duaText').innerText = randomDua;
}
