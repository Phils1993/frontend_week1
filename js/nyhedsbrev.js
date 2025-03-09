// Nyhedsbreve data (eksempel)
const nyhedsbreve = [
    {title: "Nyhedsbrev - September", date: "01-09-2024", link: "../nyhedsbreve/01_Nyhedsbrev_SepOkt_2024.pdf"},
    {title: "Nyhedsbrev - Oktober", date: "01-10-2024", link: "../nyhedsbreve/02_Nyhedsbrev_OktNov_2024.pdf"},
    {title: "Nyhedsbrev - November", date: "01-11-2024", link: "../nyhedsbreve/03_Nyhedsbrev_NovDec_2024.pdf"},
    {title: "Nyhedsbrev - December", date: "01-12-2024", link: "../nyhedsbreve/04_Nyhedsbrev_DecJan_2025.pdf"},
    {title: "Nyhedsbrev - Januar", date: "01-01-2025", link: "../nyhedsbreve/05_Nyhedsbrev_JanFeb_2025.pdf"},
    {title: "Nyhedsbrev - Februar", date: "01-02-2025", link: "../nyhedsbreve/06_Nyhedsbrev_FebMar_2025.pdf"}
    // Tilføj flere...
];

// Dynamisk oprettelse af nyhedsbrevsliste
function populateNyhedsbreve() {
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Sorter nyhedsbreve efter dato (nyeste først)
    nyhedsbreve.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Tilføj nyhedsbreve til dropdown-menu
    nyhedsbreve.slice(0, 5).forEach(nyhedsbrev => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${nyhedsbrev.link}" target="_blank">${nyhedsbrev.title}</a>`;
        dropdownMenu.appendChild(listItem);
    });

    // "Vis mere"-knap, hvis der er flere end 5 nyhedsbreve
    if (nyhedsbreve.length > 5) {
        const visMere = document.createElement('li');
        visMere.innerHTML = `<a href="../modtagerside/arkiv_nyhedsbreve.html">Vis mere</a>`;
        dropdownMenu.appendChild(visMere);
    }
}

// Kald funktionen, når siden indlæses
document.addEventListener('DOMContentLoaded', populateNyhedsbreve);
