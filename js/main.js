const listUser = JSON.parse(localStorage.getItem("listUser"));

function redirectLogin() {
  location.href = "/index/login.html";
}

function redirectRegister() {
  location.href = "/index/signup.html";
}
function showPassword() {
  let showPassword = document.getElementById("psw");
  let icon = document.getElementById("icon");
  if (showPassword.type == "password") {
    showPassword.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    showPassword.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function handleSubmit(element) {
  console.log(element);
  let email = document.getElementById("email").value;
  let password = document.getElementById("psw").value;
  let id = element.id;
  let repeatPassword = document.getElementById("psw-repeat");

  let check = validate(email, password, repeatPassword, id);
  console.log(listUser);
  if (id === "redirectLogin") {
    console.log("inlog", listUser);
    for (let i = 0; i < listUser.length; i++) {
      console.log(listUser, "gggg");
      if (listUser[i].email === email || password === password) {
        {
          location.href = "/index.html";
        }
        checkDulicate = true;
        return alert("Chúc mừng bạn tài khoản hợp lệ");
      }
    }
  } else {
    const user = { email, password };
    if (!listUser) {
      localStorage.setItem("listUser", JSON.stringify([user]));
    } else {
      let checkDulicate = false;
      for (let i = 0; i < listUser.length; i++) {
        console.log(listUser, "gggg");
        if (listUser[i].email === email) {
          checkDulicate = true;
          return alert(" xin lỗi tài khoản của bạn đã tồn tại");
        }
      }

      if (!checkDulicate) {
        listUser.push(user);
        localStorage.setItem("listUser", JSON.stringify(listUser));
        console.log(listUser, "check user after push");
      }
    }

    // listUser
  }
  if (check) {
    redirectLogin();
  }
}

function validate(email, password, repeatPassword, id) {
  if (email == "" || password == "") {
    return alert("Email hoặc password của bạn không được để trống");
  } else if (password.length > 16) {
    return alert(
      "Password của bạn không được quá 16 ký tự"
    );
  }

  if (password.length < 6) {
    return alert("Password của bạn phải có hơn 6 ký tự");
  }

  if (id === "redirectLogin") {
    let listuser = JSON.parse(localStorage.getItem("listUser"));

    console.log(listuser);
  } else {
    console.log("hhhhh");
    if (password != repeatPassword.value) {
      return alert("Password nhập lại của bạn không khớp");
    }
  }

  return true;
}
