const KEY = "tripplanner_users";
const SESSION = "tripplanner_session";

export const authService = {
  register(name, email, password) {
    const users = JSON.parse(localStorage.getItem(KEY) || "[]");

    const existingUser = users.find(
      user => user.email === email
    );

    if (existingUser) {
      return {
        success: false,
        message: "Email pehle se registered hai!"
      };
    }

    const user = {
      id: Date.now(),
      name,
      email,
      password
    };

    users.push(user);

    localStorage.setItem(KEY, JSON.stringify(users));
    localStorage.setItem(SESSION, JSON.stringify(user));

    return { success: true, user };
  },

  login(email, password) {
    const users = JSON.parse(localStorage.getItem(KEY) || "[]");

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password!"
      };
    }

    localStorage.setItem(SESSION, JSON.stringify(user));

    return { success: true, user };
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(SESSION) || "null");
  },

  logout() {
    localStorage.removeItem(SESSION);
  }
};