export function showMenu() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div class="menu">
            <h1 class="title">
                FREQUENCY
            </h1>
            <button>
                Continue Investigation
            </button>
            <button>
                New Investigation
            </button>
            <button>
                Settings
            </button>
            <button>
                Exit
            </button>
        </div>
    `;
}