function skillsMember() {
    this.member = {
    name: 'John Doe',
    age: 25,
    skills: ['HTML', 'CSS', 'JS'],
  };

  this.getSkills = function () {
    return this.member.skills;
  };
}