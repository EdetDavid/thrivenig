export default class APIService {
  static async loginUser(body) {
    try {
      const response = await fetch(
        // "http://localhost:8000/api/auth/",
        "https://thrivenig-backend.onrender.com/api/auth/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      return await response.json();
    } catch (error) {
      throw error; // Throw the error to be caught in the component
    }
  }

  static async registerUser(body) {
    try {
      const response = await fetch(
        // "http://localhost:8000/api/users/",
        "https://thrivenig-backend.onrender.com/api/users/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}
