export function carrinhoReducer(state, action) {
  let itens = [];

  if (action.type === "adicionar")
    itens = inserirOuAlterarItem(state, action.payload);
  else if (action.type === "remover")
    itens = state.itens.filter((i) => i.id !== action.payload.id);

  const valorTotal = calcularValorTotal(itens);
  return { itens, valorTotal };
}

function inserirOuAlterarItem(state, payload) {
  if (payload.quantidade === 0) return state.itens;

  const itemIndex = state.itens.findIndex((i) => i.id === payload.id);

  let itens = [];

  if (itemIndex >= 0) {
    itens = [...state.itens];
    itens[itemIndex] = { ...payload };
  } else {
    itens = [...state.itens, { ...payload }];
  }

  return itens;
}

function calcularValorTotal(itens) {
  let valorTotal = 0;

  for (const item of itens) {
    valorTotal += item.preco * item.quantidade;
  }

  return valorTotal;
}
