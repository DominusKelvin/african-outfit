'use strict'

const User = use('App/Models/User')

class UserController {
    /**
     * 
     * @param {request} param0
     * @return {this.login()}
     * This method registers a new user into the system 
     */
    async register({request}) {
        // Using object destructuring to assign values
        const { username, email, password} = request.all();
        const user = await User.create({
            username,
            email,
            password,
        });

        return this.login(...arguments)
    }

    /**
     * 
     * @param {request} param0 
     * @return {token}
     * This method attempts to login a user
     */
    async login({request, auth}) {
        const { email, password } = request.all();
        const token = await auth.attempt(email,password);
        return token
    }
}

module.exports = UserController
