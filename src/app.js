import Login from "./login/login";
import Pay from "./pay/pay";

const login = new Login();
const pay = new Pay();

console.log("login version", login.getVersion());
console.log("pay version", pay.getVersion());


export {Login, Pay};
