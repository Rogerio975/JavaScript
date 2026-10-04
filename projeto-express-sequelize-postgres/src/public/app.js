const form = document.querySelector('#form-usuario');
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const usersList = document.querySelector('#lista-usuarios');
const totalUsers = document.querySelector('#total-usuarios');
const saveButton = document.querySelector('#salvar-usuario');
const cancelButton = document.querySelector('#cancelar-edicao');
const notice = document.querySelector('#mensagem');

let editingId = null;
let users = [];

function showNotice(message, isError = false) {
  notice.textContent = message;
  notice.classList.toggle('error', isError);
  notice.hidden = false;
}

function clearNotice() {
  notice.textContent = '';
  notice.classList.remove('error');
  notice.hidden = true;
}

async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers
    }
  });

  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(result.erro || 'Não foi possível concluir a operação.');
  }

  return response.status === 204 ? null : response.json();
}

function renderUsers() {
  usersList.replaceChildren();
  totalUsers.textContent = `${users.length} ${users.length === 1 ? 'usuário' : 'usuários'}`;

  if (users.length === 0) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 3;
    cell.className = 'empty-state';
    cell.textContent = 'Nenhum usuário cadastrado ainda.';
    row.append(cell);
    usersList.append(row);
    return;
  }

  for (const user of users) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const emailCell = document.createElement('td');
    const actionsCell = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    nameCell.textContent = user.nome;
    emailCell.textContent = user.email;
    actionsCell.className = 'actions-cell';

    editButton.type = 'button';
    editButton.className = 'icon-button';
    editButton.textContent = '✎';
    editButton.setAttribute('aria-label', `Editar ${user.nome}`);
    editButton.title = 'Editar usuário';
    editButton.addEventListener('click', () => editUser(user));

    deleteButton.type = 'button';
    deleteButton.className = 'icon-button delete';
    deleteButton.textContent = '×';
    deleteButton.setAttribute('aria-label', `Excluir ${user.nome}`);
    deleteButton.title = 'Excluir usuário';
    deleteButton.addEventListener('click', () => deleteUser(user));

    actionsCell.append(editButton, deleteButton);
    row.append(nameCell, emailCell, actionsCell);
    usersList.append(row);
  }
}

async function loadUsers() {
  try {
    users = await request('/usuarios');
    renderUsers();
  } catch (error) {
    usersList.replaceChildren();
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 3;
    cell.className = 'empty-state';
    cell.textContent = 'Não foi possível carregar os usuários.';
    row.append(cell);
    usersList.append(row);
    showNotice(error.message, true);
  }
}

function resetForm() {
  editingId = null;
  form.reset();
  document.querySelector('#form-title').textContent = 'Adicionar usuário';
  saveButton.textContent = 'Cadastrar usuário';
  cancelButton.hidden = true;
}

function editUser(user) {
  clearNotice();
  editingId = user.id;
  nameInput.value = user.nome;
  emailInput.value = user.email;
  document.querySelector('#form-title').textContent = 'Editar usuário';
  saveButton.textContent = 'Salvar alterações';
  cancelButton.hidden = false;
  nameInput.focus();
  document.querySelector('#form-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function deleteUser(user) {
  if (!window.confirm(`Deseja excluir o usuário "${user.nome}"?`)) {
    return;
  }

  clearNotice();
  try {
    await request(`/usuarios/${user.id}`, { method: 'DELETE' });
    if (editingId === user.id) resetForm();
    showNotice('Usuário excluído com sucesso.');
    await loadUsers();
  } catch (error) {
    showNotice(error.message, true);
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearNotice();

  const user = {
    nome: nameInput.value.trim(),
    email: emailInput.value.trim()
  };

  saveButton.disabled = true;
  try {
    await request(editingId ? `/usuarios/${editingId}` : '/usuarios', {
      method: editingId ? 'PUT' : 'POST',
      body: JSON.stringify(user)
    });
    showNotice(editingId ? 'Usuário atualizado com sucesso.' : 'Usuário cadastrado com sucesso.');
    resetForm();
    await loadUsers();
  } catch (error) {
    showNotice(error.message, true);
  } finally {
    saveButton.disabled = false;
  }
});

cancelButton.addEventListener('click', () => {
  resetForm();
  clearNotice();
});

loadUsers();
