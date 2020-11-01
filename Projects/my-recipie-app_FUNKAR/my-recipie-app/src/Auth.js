const LOGIN_SUCCESS_PAGE = "/recipes";
const LOGIN_FAILURE_PAGE = "/loginFailed";
const LOGOUT = "/";
const adminUser = {
  email: "admin@admin",
  password: "123",
};

const [user, setUser] = useState({ name: "", email: "" });
const [error, setError] = useState("");

class Auth {
  //   auth0 = {
  //    domain: "..",
  //     clientID: "..",
  //     redirectUri: "http://localhost:3000/callback",
  //     audience: "https://../userinfo",
  //     responseType: "token id_token",
  //     scope: "openid profile",
  //   };

  //   constructor() {
  //     this.Login = this.Login.bind(this);
  //   }

  Login = (details) => {
    //Login function
    //console.log(details);
    let location = useLocation();
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
        password: details.password,
      });
      let expiresAt = JSON.stringify(
        user.name.expiresIn * 1000 + new Date().getTime()
      );
      localStorage.setItem("user", details.name);
      localStorage.setItem("email", details.email);
      localStorage.setItem("password", details.password);
      localStorage.setItem("expires_at", expiresAt);
      console.log(details);
      console.log("Logged in to the amazing site");
      location.pathname = LOGIN_SUCCESS_PAGE;
    } else {
      console.log("Absolute not access");
      setError("Absolute not access");

      console.log(error);
      location.pathname = LOGIN_FAILURE_PAGE;
    }
  };

  isAuthenticated() {
    let expiresAt = localStorage.getItem("expires_at");
    return new Date().getTime() < expiresAt;
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    // location.pathname = LOGOUT;
  }
}

export default Auth;
