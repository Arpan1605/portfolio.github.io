const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const Link = ReactRouterDOM.Link;
function App() {
  return (
    React.createElement(Router, null,
    React.createElement("div", null,
    React.createElement(Header, null),
    React.createElement(Switch, null,
    React.createElement(Route, { exact: true, path: "/", component: Home }),
    React.createElement(Route, {
      path: "/lorem-ipsum-dolor-sit-amet-consectetur",
      component: postid_1 }),

    React.createElement(Route, { path: "/lorem-ipsum-dolor-sit", component: postid_2 }),
    React.createElement(Route, { component: Home })))));




}
class Home extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "container pt-3" },
      React.createElement("div", { className: "row" },
      React.createElement(Link, { to: "/lorem-ipsum-dolor-sit-amet-consectetur" },
      React.createElement("article", { className: "best-post" },
      React.createElement("div", {
        className: "best-post-image",
        style: {
          backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png")` } }),


      React.createElement("div", { className: "best-post-content" },
      React.createElement("div", { className: "best-post-content-cat" }, "videograper"),
      React.createElement("div", { className: "best-post-content-title" }, "Lorem ipsum dolor sit amet, consectetur"),


      React.createElement("div", { className: "best-post-content-sub" }, "Lorem Ipsum, masa\xFCst\xFC yay\u0131nc\u0131l\u0131k ve bas\u0131n yay\u0131n sekt\xF6r\xFCnde kullan\u0131lan taklit yaz\u0131 blo\u011Fu olarak tan\u0131mlan\u0131r. Lipsum, olu\u015Fturulacak \u015Fablon ve taslaklarda i\xE7erik yerine ge\xE7erek yaz\u0131 blo\u011Funu doldurmak i\xE7in kullan\u0131l\u0131r.")))),








      React.createElement(Link, { to: "/lorem-ipsum-dolor-sit" },
      React.createElement("article", { className: "post__card-2" },
      React.createElement("div", { className: "post__card_-2" },
      React.createElement("div", {
        className: "post__card__image-2",
        style: {
          backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ad9cb894970549.5e8f28eecdea8.jpg")` } }),


      React.createElement("div", null,
      React.createElement("div", { className: "post__card_meta-2" },
      React.createElement("div", { className: "post__card_cat" }, "youtube"),
      React.createElement("p", { className: "post__card_title-2" }, "Lorem ipsum dolor sit"),
      React.createElement("p", { className: "post__card_alttitle-2" }, "Lorem Ipsum, masa\xFCst\xFC yay\u0131nc\u0131l\u0131k ve bas\u0131n yay\u0131n sekt\xF6r\xFCnde kullan\u0131lan...")))))),








      React.createElement(Link, { to: "/lorem-ipsum-dolor-sit" },
      React.createElement("article", { className: "post__card-2" },
      React.createElement("div", { className: "post__card_-2" },
      React.createElement("div", {
        className: "post__card__image-2",
        style: {
          backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7fa56a51087311.5a227b15ad57a.jpg")` } }),


      React.createElement("div", null,
      React.createElement("div", { className: "post__card_meta-2" },
      React.createElement("div", { className: "post__card_cat" }, "youtube"),
      React.createElement("p", { className: "post__card_title-2" }, "Lorem ipsum dolor sit"),
      React.createElement("p", { className: "post__card_alttitle-2" }, "Lorem Ipsum, masa\xFCst\xFC yay\u0131nc\u0131l\u0131k ve bas\u0131n yay\u0131n sekt\xF6r\xFCnde kullan\u0131lan...")))))),








      React.createElement(Link, { to: "/lorem-ipsum-dolor-sit" },
      React.createElement("article", { className: "post__card-2" },
      React.createElement("div", { className: "post__card_-2" },
      React.createElement("div", {
        className: "post__card__image-2",
        style: {
          backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7c8a1e90624231.5e997520e9b9b.jpg")` } }),


      React.createElement("div", null,
      React.createElement("div", { className: "post__card_meta-2" },
      React.createElement("div", { className: "post__card_cat" }, "youtube"),
      React.createElement("p", { className: "post__card_title-2" }, "Lorem ipsum dolor sit"),
      React.createElement("p", { className: "post__card_alttitle-2" }, "Lorem Ipsum, masa\xFCst\xFC yay\u0131nc\u0131l\u0131k ve bas\u0131n yay\u0131n sekt\xF6r\xFCnde kullan\u0131lan...")))))))));











  }}

class postid_1 extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "header" },
      React.createElement(Link, { to: "/", class: "back" }, "Back"),


      React.createElement("div", { class: "main container" },
      React.createElement("h5", null, "Desing"),
      React.createElement("h1", null, "Lorem ipsum dolor sit amet, consectet"),
      React.createElement("a", { href: "www.ahmetaksungur.com", class: "authorlink" }, "Ahmet Aksungur"),


      React.createElement("figure", null,
      React.createElement("img", { src: "https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png" })),

      React.createElement("div", { class: "pl-0 col-md-12 pt-2" },
      React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas tempor euismod. Suspendisse ac ex diam. Maecenas vitae volutpat ex. Proin blandit ante at nisi fringilla, et porttitor neque fermentum. Mauris posuere sem non faucibus vestibulum. Suspendisse id quam massa. Ut sit amet neque nec nibh faucibus pellentesque a quis lorem. Sed varius nisi pretium, luctus magna vel, molestie nisl. Suspendisse blandit, ipsum in elementum commodo, dui sapien blandit arcu, sit amet volutpat sapien quam non urna. Morbi dapibus nisl sit amet orci facilisis mollis. Mauris fringilla interdum elementum."),











      React.createElement("h1", null, "Lorem ipsum dolor sit amet"),
      React.createElement("p", null, "Pellentesque at mauris lacinia erat viverra porttitor. Cras magna metus, euismod at finibus et, egestas ac erat. Mauris in ipsum sed turpis varius porttitor ac vitae erat. Nullam eget condimentum metus, nec mollis ex. Nam mollis orci sit amet viverra iaculis. Ut facilisis, turpis at ornare ullamcorper, urna mi scelerisque arcu, eget tincidunt ante felis et metus. Quisque gravida ipsum id ex vehicula, feugiat feugiat ligula tempor. Duis non tellus eros. Vivamus sollicitudin, mauris ut facilisis mollis, odio augue pellentesque tellus, eget facilisis sem purus auctor diam. Ut at feugiat nulla. Praesent congue tincidunt dolor a ornare."),











      React.createElement("h2", null, "Lorem ipsum dolor sit amet"),

      React.createElement("p", null, "Aliquam accumsan purus lobortis facilisis ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla pharetra, nisl in placerat ultricies, sapien odio placerat leo, vitae pellentesque purus purus eu leo. Proin dapibus sapien leo. Duis viverra faucibus sapien, quis interdum erat lacinia vitae. Suspendisse non viverra urna. Sed elit erat, vulputate id ex eget, faucibus varius urna. Etiam viverra aliquet orci, non viverra ipsum pulvinar eget. Pellentesque vitae egestas ligula. Pellentesque accumsan interdum felis eu aliquam."),











      React.createElement("p", null, "Mauris mollis efficitur odio sed congue. In pulvinar fermentum malesuada. Integer blandit ipsum in lorem egestas, et fermentum nunc porta. Pellentesque pellentesque faucibus ligula sed bibendum. Nullam ut felis magna. Ut eget sollicitudin turpis. Donec ultrices aliquet ante sed tincidunt. Aliquam purus massa, auctor a maximus nec, finibus et nunc. Sed erat mi, sagittis eu lectus a, accumsan scelerisque sem."),









      React.createElement("p", null, "Sed est ex, ultricies sed ornare non, aliquet sed lorem. Sed vulputate tortor eget augue scelerisque, ut sagittis enim interdum. Donec nisi lectus, lobortis ut justo sit amet, pellentesque gravida nibh. Donec eget ante tincidunt, sagittis sapien vestibulum, vestibulum metus. Nullam ultrices lectus at tincidunt rhoncus. Nullam sed faucibus risus. Praesent id arcu dictum, bibendum urna at, egestas neque.")))));












  }}

class postid_2 extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "header" },
      React.createElement(Link, { to: "/", class: "back" }, "Back"),


      React.createElement("div", { class: "main container" },
      React.createElement("h5", null, "Desing"),
      React.createElement("h1", null, "Life Of Architecture Blog Detail"),
      React.createElement("a", { href: "#", class: "authorlink" }, "Ahmet Aksungur"),


      React.createElement("figure", null,
      React.createElement("img", { src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ad9cb894970549.5e8f28eecdea8.jpg" })),

      React.createElement("div", { class: "pl-0 col-md-12 pt-2" },
      React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas tempor euismod. Suspendisse ac ex diam. Maecenas vitae volutpat ex. Proin blandit ante at nisi fringilla, et porttitor neque fermentum. Mauris posuere sem non faucibus vestibulum. Suspendisse id quam massa. Ut sit amet neque nec nibh faucibus pellentesque a quis lorem. Sed varius nisi pretium, luctus magna vel, molestie nisl. Suspendisse blandit, ipsum in elementum commodo, dui sapien blandit arcu, sit amet volutpat sapien quam non urna. Morbi dapibus nisl sit amet orci facilisis mollis. Mauris fringilla interdum elementum."),











      React.createElement("h1", null, "Lorem ipsum dolor sit amet"),
      React.createElement("p", null, "Pellentesque at mauris lacinia erat viverra porttitor. Cras magna metus, euismod at finibus et, egestas ac erat. Mauris in ipsum sed turpis varius porttitor ac vitae erat. Nullam eget condimentum metus, nec mollis ex. Nam mollis orci sit amet viverra iaculis. Ut facilisis, turpis at ornare ullamcorper, urna mi scelerisque arcu, eget tincidunt ante felis et metus. Quisque gravida ipsum id ex vehicula, feugiat feugiat ligula tempor. Duis non tellus eros. Vivamus sollicitudin, mauris ut facilisis mollis, odio augue pellentesque tellus, eget facilisis sem purus auctor diam. Ut at feugiat nulla. Praesent congue tincidunt dolor a ornare."),











      React.createElement("h2", null, "Lorem ipsum dolor sit amet"),

      React.createElement("p", null, "Aliquam accumsan purus lobortis facilisis ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla pharetra, nisl in placerat ultricies, sapien odio placerat leo, vitae pellentesque purus purus eu leo. Proin dapibus sapien leo. Duis viverra faucibus sapien, quis interdum erat lacinia vitae. Suspendisse non viverra urna. Sed elit erat, vulputate id ex eget, faucibus varius urna. Etiam viverra aliquet orci, non viverra ipsum pulvinar eget. Pellentesque vitae egestas ligula. Pellentesque accumsan interdum felis eu aliquam."),











      React.createElement("p", null, "Mauris mollis efficitur odio sed congue. In pulvinar fermentum malesuada. Integer blandit ipsum in lorem egestas, et fermentum nunc porta. Pellentesque pellentesque faucibus ligula sed bibendum. Nullam ut felis magna. Ut eget sollicitudin turpis. Donec ultrices aliquet ante sed tincidunt. Aliquam purus massa, auctor a maximus nec, finibus et nunc. Sed erat mi, sagittis eu lectus a, accumsan scelerisque sem."),









      React.createElement("p", null, "Sed est ex, ultricies sed ornare non, aliquet sed lorem. Sed vulputate tortor eget augue scelerisque, ut sagittis enim interdum. Donec nisi lectus, lobortis ut justo sit amet, pellentesque gravida nibh. Donec eget ante tincidunt, sagittis sapien vestibulum, vestibulum metus. Nullam ultrices lectus at tincidunt rhoncus. Nullam sed faucibus risus. Praesent id arcu dictum, bibendum urna at, egestas neque.")))));












  }}

class Header extends React.Component {
  render() {
    //header
    return React.createElement("header", null);
  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("blog"));