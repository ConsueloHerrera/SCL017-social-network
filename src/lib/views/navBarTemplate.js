export const navBar = () => {
  const navBarView = `
      <nav class = "topNavBar">
          <a href="#/logIn">Inicia Sesión</a>
          <a href="#/signIn">Regístrate</a>
          <a href="#/aboutUs" class = "activeByDefault">Comunidad Doit</a>
      </nav>
    `;
  return navBarView;
};
