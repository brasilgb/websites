const statusOrdemByValue = (value: any) => {
    switch (value) {
        case 1:
            return "Ordem Aberta";
        case 2:
            return "Ordem Fechada";
        case 3:
            return "Orçamento Gerado";
        case 4:
            return "Orçamento Aprovado";
        case 5:
            return "Executando reparo";
        case 6:
            return "(CA)Serviço concluído";
        case 7:
            return "(CN)Serviço concluído";
        case 8:
            return "Entregue ao cliente";
    }
};

const statusUserByValue = (value: any) => {
    switch (value) {
        case 1:
            return "Ativo";
        case 2:
            return "Inativo";
    }
};

const roleUserByValue = (value: any) => {
    switch (value) {
        case 1:
            return "Administrador";
        case 2:
            return "Usuário";
        case 3:
            return "Técnico";
    }
};

const statusAgendaByValue = (value: any) => {
    switch (value) {
        case 1:
            return "Aberta";
        case 2:
            return "Atendimento";
        case 3:
            return "Fechada";
    }
};

const statusMessageByValue = (value: any) => {
    switch (value) {
        case 0:
            return "Não lida";
        case 1:
            return "lida";
    }
};

const activePostByValue = (value: any) => {
    switch (value) {
        case 0:
            return "Não";
        case 1:
            return "Sim";
    }
};

const productDestaqueByValue = (value: any) => {
    switch (value) {
        case 0:
            return "Não";
        case 1:
            return "Sim";
    }
};

export {
    statusOrdemByValue,
    statusUserByValue,
    roleUserByValue,
    statusAgendaByValue,
    statusMessageByValue,
    activePostByValue,
    productDestaqueByValue
};
