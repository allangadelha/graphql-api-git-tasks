module.exports = {
    User: {
        async tasks(user, _, { dataSources }) {
            return await dataSources.TasksRegisterService.getTasks(user.id)
        }
    },

    Query: {
        async user(_, { login }, { dataSources }) {
            const userFound = await dataSources.UserRegisterService.getUserByLogin(login)

            if(userFound) return userFound

            const {
                login: loginGit, 
                avatar_url
            } = await dataSources.GitHubService.getUser(login)
            return await dataSources.UserRegisterService.addUser({
                login: loginGit, 
                avatar_url
            })
        }
    }
}