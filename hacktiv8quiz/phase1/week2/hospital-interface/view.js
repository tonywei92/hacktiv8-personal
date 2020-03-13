class View {
  static successReg(data) {
    return `data berhasil dimasukkkan ${JSON.stringify(
      data[data.length - 1]
    )} Total employee: ${data.length}`;
  }
  static successLogin(username) {
    return `user ${username} logged in successfully`;
  }

  static failedLogin(username) {
    return `username/password wrong`;
  }

  static addPatientDenied() {
    return "tidak memiliki akses untuk add patient";
  }

  static successAddPatient(patients) {
    return `data pasien berhasil ditambahkan. Total data pasien : ${
      patients.length
    }`;
  }

  static logoutSuccess() {
    return "user has been successfully logout!";
  }

  static alreadyLoggedIn(data) {
    return `user ${data.username} still logged in, you need to logout first`;
  }
}

module.exports = View;
