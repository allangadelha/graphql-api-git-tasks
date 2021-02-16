const GitHubService = require("../../services/GitHub.service");
const TasksRegisterService = require("../../services/TasksRegisterService");
const UserRegisterService = require("../../services/UserRegisterService");

module.exports = () => ({
    GitHubService: GitHubService,
    UserRegisterService: UserRegisterService,
    TasksRegisterService: TasksRegisterService
})