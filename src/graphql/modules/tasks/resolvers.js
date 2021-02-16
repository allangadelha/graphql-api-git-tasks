module.exports = {
    Query: {
        async tasks(_, __, { dataSources, user_id }) {
            return await dataSources.TasksRegisterService.getTasks(user_id)
        }
    },

    Mutation: {
        async createTask(_, { data }, { dataSources, user_id }) {
            return await dataSources.TasksRegisterService.addTask(user_id, data)
        },

        async deleteTask(_, { id }, { dataSources, user_id }) {
            return await dataSources.TasksRegisterService.deleteTask(user_id, id)
        },

        async updateTask(_, { id, data }, { dataSources, user_id }) {
            return await dataSources.TasksRegisterService.updateTask(user_id, id, data)
        },
    }
}