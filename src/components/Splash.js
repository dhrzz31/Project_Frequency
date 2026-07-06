export function showSplash(nextScene) {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div class="splash">
            <h1 class="title">
                FREQUENCY
            </h1>
            <p class="subtitle">
                A Narrative Mystery Thriller
            </p>
            <button id="startBtn" class="start-btn">
                Begin Investigation
            </button>
        </div>
    `;
    document
        .getElementById("startBtn")
        .addEventListener("click", () => {
            nextScene();
        });
}