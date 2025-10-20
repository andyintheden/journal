document.getElementById('scrollDown').addEventListener('click',scrollToNext);

function scrollToNext() {
    document.getElementById('entries-section').scrollIntoView(
        {behavior: "smooth"}
    );
}

document.getElementById('scrollUp').addEventListener('click',scrollToForm)

function scrollToForm() {
    document.getElementById('entry-section').scrollIntoView({behavior:"smooth"});
}

