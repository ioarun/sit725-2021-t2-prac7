let Service = require("../services");

const getProjects = (res) => {
    console.log('controller ')
    Service.ProjectService.getAllProjects(res)
}

module.exports = {
    getProjects
}