const navbar = () => {
  const optionHome = document.createElement("li");
  optionHome.classList.add("nav-item");
  const home = document.createElement("a");
  home.classList.add("nav-link", "active");
  home.setAttribute("aria-current", "page");
  home.href = "#";
  home.textContent = "Home";
  optionHome.append(home);
  const optionContactUs = document.createElement("li");
  optionContactUs.classList.add("nav-item");
  const contactUs = document.createElement("a");
  contactUs.classList.add("nav-link");
  contactUs.href = "#";
  contactUs.textContent = "Contact Us";
  optionContactUs.append(contactUs);

  let nav = document.createElement("ul");
  nav.classList.add("nav", "nav-pills");
  nav.append(optionHome, optionContactUs);

  return nav;
};

export default navbar;
