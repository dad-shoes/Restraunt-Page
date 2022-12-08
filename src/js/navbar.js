const navbar = () => {
  let tabCreate = pageName => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    li.classList.add("nav-item");
    a.classList.add("nav-link");
    a.textContent = pageName;
  };

  let home = tabCreate("Home");
  home.classList.add("active");
  home.addAttribute("aria-current", "page");
  home.addAttribute("href", "#");
  let menu = tabCreate("Menu");
  let contactUs = tabCreate("Contact Us");
  let nav = document.createElement("div");
  nav.classList.add("nav", "nav-pills");
  nav.append(home, menu, contactUs);

  console.log("Hello, World");
};

export default navbar;
