let tarefa = document.querySelector("#tarefa");
let data = document.querySelector("#data");
let btnCadastrar = document.querySelector("#btnSalvarTarefa");
let indice = 0;

btnCadastrar.addEventListener("click", (e)=>{
    e.preventDefault();

    let lista = document.querySelector("#lista");

    let linha = document.createElement("tr");

    let celId = document.createElement("td");
    celId.innerText = ++indice;

    let celTarefa = document.createElement("td");
    celTarefa.innerText = tarefa.value;

    let celData = document.createElement("td");
    let dtNew = new Date(data.value).toLocaleDateString("pt-BR", {timeZone:"utc"});
    celData.innerText = dtNew;

    let celAcao = document.createElement("td");
    let btnEditar = document.createElement("input");
    let btnExcluir = document.createElement("input");
    btnEditar.type = "submit";
    btnExcluir.type = "submit";
    btnEditar.id = "btnEditar";
    btnExcluir.id = "btnExcluir";
    btnEditar.value = "Editar";
    btnExcluir.value = "Excluir";
    celAcao.appendChild(btnEditar);
    celAcao.appendChild(btnExcluir);

    linha.appendChild(celId);
    linha.appendChild(celTarefa);
    linha.appendChild(celData);
    linha.appendChild(celAcao);

    lista.appendChild(linha);

    btnExcluir.addEventListener("click", ()=>{
        let pergunta = confirm("Deseja realmente excluir essa tarefa?");
        if(pergunta) {
            linha.remove();
        }
    });

    btnEditar.addEventListener("click", ()=>{
        document.querySelector(".novoFormulario").style.display = "block";

    });

});