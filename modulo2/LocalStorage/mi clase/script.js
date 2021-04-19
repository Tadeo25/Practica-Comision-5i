const formUser = document.getElementById('formUser')
const nicknameInput = document.getElementById('nickname')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const userUl = document.getElementById('userList')
const usersTable = document.getElementById('usersTable')
const nameInput = document.getElementById('name')
const lastnameInput = document.getElementById('lastname')
const birthdateInput = document.getElementById('birthdate')
const divisionInput = document.getElementById('division')
const emailModalInput = document.getElementById('emailModal')
const birthdateModalInput = document.getElementById('birthdateModal')
const divisionModalInput = document.getElementById('divisionModal')
const formEdit = document.getElementById('formEdit')
let editUserId = '';
const search = document.getElementById('search')
const searchForm = document.getElementById('searchForm')




const generateId = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

formUser.onsubmit =  (e) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  e.preventDefault()
  const nickname = nicknameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const name = nameInput.value;
  const lastname = lastnameInput.value;
  const birthdate = birthdateInput.value;
  const division = divisionInput.value;


  users.push({
      nickname,
      email,
      password,
      name,
      lastname,
      birthdate,
      division,
      id: generateId(),
      createdAt: Date.now()

  })

  // Guardar lista de ususarios en local storage
  const usersJson = JSON.stringify(users);
  localStorage.setItem('users', usersJson);

  console.log("formUser.onsubmit => users", users)
  formUser.reset();
  displayAllUser();
}

const getModal = (user) => {
  const createdAt = new Date(user.createdAt);
  return `
  <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal${user.id}">
  Mostrar
</button>
  <div class="modal fade" id="modal${user.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${user.nickname}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body text-center badge-success">
        <p style="color: blue;"><b><i class="fas fa-user m-1"></i>Nombre: ${user.name} ${user.lastname}</b></p>
        <p style="color: blue;"><b><i class="fas fa-envelope m-1"></i>Email: ${user.email}</b></p>
        <p style="color: blue;"><b><i class="fas fa-laptop-code m-1"></i>Senioity: ${user.division}</b></p>
        <p style="color: blue;"><b><i class="fas fa-calendar-day m-1"></i>Fecha de nacimiento: ${user.birthdate}</b></p>
        <p style="color: blue;"><b><i class="fas fa-clock m-1"></i>Fecha de registro: ${createdAt.toLocaleString()}</b></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
  `
}

const loadForm = (userId) => {
//Mostrar datos del usuario en el formulario
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((u) => u.id == userId)
    emailModalInput.value = user.email;
    birthdateModalInput.value = user.birthdate;
    divisionModalInput.value = user.division;
    editUserId = userId;
}

function displayAllUser() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const rows = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const tr = `
        <tr>
            <td>${user.nickname}</td>
            <td>${user.email}</td>
            <td>${user.division || ' '}</td>
            <td>
            ${getModal(user)}
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editModal" onclick= "loadForm('${user.id}')"><i class="far fa-edit" style="color: white;"></i></button>

            <button onclick="deleteUser('${user.id}')" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
            </td>
        </tr>
        `

    rows.push(tr)
  }
  usersTable.innerHTML = rows.join('')
  console.log(rows.join(''))
}
displayAllUser();

function deleteUser(userId) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const filteredUsers = users.filter((user) => user.id = !userId)
  // let filteres = [];
  // for (let i = 0; i < users.length; i++) {
  //   const user = users[i];
  //   if (user.id =! userId) {
  //     filteres.push(user)
  //   }
  //}
  const usersJson = JSON.stringify(filteredUsers);
  localStorage.setItem('users', usersJson);
  displayAllUser();
}

formEdit.onsubmit = (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const email = emailModalInput.value;
  const birthdate = birthdateModalInput.value;
  const division = divisionModalInput.value;
  //Actualizar usuario del array de usuario usando map()
  const updateUsers = users.map((u) => {
    if (u.id == editUserId) {
      const user = {
        // Usar spread syntax para copiar las propiedades de un obj a otro(...u)
        ...u,
        email,
        birthdate,
        division,
      }
      return user
    } else {
      return u;
    }
  })
  //Guardar lista de usuarios en localStorage
  const usersJson = JSON.stringify(updateUsers);
  localStorage.setItem('users', usersJson);
  formEdit.reset();
  displayAllUser();
  $('#editModal').modal('hide');
  }


  searchForm.onsubmit = (e) => {
    e.preventDefault();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  // console.log(users)
    const term = search.value;
    const filteredUsers = users.filter(u => (u.name.toLowerCase().includes(term.toLowerCase) || u.lastname.toLowerCase().includes(term.toLowerCase)))
    console.log(filteredUsers)
    // displayUsers(filteredUsers);
  }
