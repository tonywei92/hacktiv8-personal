exports.getCourseLevel  = (course) => {
  if (course >= 14) {
    return "master"
  } else if (course >= 10) {
    return "advanced"
  } else if (course >= 7) {
    return "intermediate"
  } else if (course >= 4) {
    return "pre-intermediate"
  } else if (course >= 1) {
    return "beginner"
  }
}
