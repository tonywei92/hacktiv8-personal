class View {
  static patientAddSuccess(msg, count) {
    return `data pasien berhasil ditambahkan. Total data pasien: ${count}`;
  }

  static employeeAddSuccess(msg, count) {
    return `Save data success: ${JSON.stringify(
      msg
    )}. Total employee: ${count}`;
  }

  static loginSuccess(data) {
    return `user ${data.username} logged in successfully`;
  }

  static error(err) {
    return `error: ${err}`;
  }

  static msg(message) {
    return message;
  }
}

module.exports = View;
