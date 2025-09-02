document.getElementById('scrollBtn').addEventListener('click',scrollToNext);

function scrollToNext() {
    document.getElementById('entries-section').scrollIntoView(
        {behavior: "smooth"}
    );
}