document.addEventListener("DOMContentLoaded", function() {
    const cpuSelect = document.getElementById("cpu");
    const gpuSelect = document.getElementById("gpu");
    const ramSelect = document.getElementById("ram");
    const storageSelect = document.getElementById("storage");
    const totalDisplay = document.getElementById("total");

    const components = [cpuSelect, gpuSelect, ramSelect, storageSelect];

    function updateTotal() {
        let total = 0;
        components.forEach(component => {
            total += parseInt(component.value);
        });
        totalDisplay.textContent = total;
    }

    components.forEach(component => {
        component.addEventListener("change", () => {
            updateTotal();
            animateComponent(component.id);
        });
    });

    function animateComponent(component) {
        const preview = document.querySelector(`.${component}-preview`);
        preview.style.transform = "scale(1.1)";
        preview.style.backgroundColor = "#007bff";
        setTimeout(() => {
            preview.style.transform = "scale(1)";
            preview.style.backgroundColor = "#555";
        }, 300);
    }

    updateTotal();

    document.getElementById("buy-btn").addEventListener("click", () => {
        alert(`Achat confirmé ! Total : ${totalDisplay.textContent}€`);
    });
});
