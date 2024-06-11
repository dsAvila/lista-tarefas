let counter = 0;
let input = document.getElementById("inputTask");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaList");

function addTarefa() {
    // Pegar o valor digitado no input
    let valueInput = input.value;

    // Se não for vazio, nulo ou indefinido
    if (valueInput !== "" && valueInput !== null && valueInput !== undefined) {
        ++counter;

        let newItem = `<div id="${counter}" class="item">
        <div onclick="markTask(${counter})" class="item-icon">
            <i id="icon_${counter}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="markTask(${counter})" class="item-name">
            ${valueInput}
        </div>
        <div class="item-btn">
            <button onclick="deletar(${counter})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
        </div>
    </div>`;

        // Adicionar novo item no main
        main.innerHTML += newItem;

        // Zerar os campos
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var task = document.getElementById(id);
    task.remove();
}

function markTask(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);

    if (classe == "item") {
        item.classList.add("clicked");

        var icon = document.getElementById("icon_" + id);
        icon.classList.remove("mdi-circle-outline");
        icon.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("clicked");

        var icon = document.getElementById("icon_" + id);
        icon.classList.remove("mdi-check-circle");
        icon.classList.add("mdi-circle-outline");
    }
}

input.addEventListener("keyup", function (event) {
    // Se teclou ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
