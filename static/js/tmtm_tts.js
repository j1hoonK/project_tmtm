// tts ON / OFF
const isUseTTS = document.getElementById("ttsUse");
isUseTTS.addEventListener("click", function () {
    const is_checked = isUseTTS.checked;
    if (is_checked) {
        alert("온");
    } else {
        alert("오프");
    }
});