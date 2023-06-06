let startTime;
let timerInterval;

function showMainView() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("mainView").style.display = "block";
}

function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(updateElapsedTime, 100);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateElapsedTime() {
    const elapsedTime = new Date() - startTime;
    // Zeigen Sie die verstrichene Zeit auf dem Bildschirm an
}

function saveTime() {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    // Senden Sie die verstrichene Zeit und das Datum an das Backend (Python)
    // Fügen Sie die gespeicherte Zeit zur Liste der Zeitübersicht hinzu
    const timeEntry = document.createElement("li");
    timeEntry.textContent = formattedDate + " - " + elapsedTime;
    document.getElementById("timeEntries").appendChild(timeEntry);
}
