function getusersession(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
sessionvalue=JSON.parse(this.responseText);
if(sessionvalue['status']=="Success"){
p=sessionvalue["usergo"]["uimg"];
console.log(p);
document.getElementById("userimg").src="/a/data/storage/userimg/"+p+".png";
document.getElementById("usernameofperson").innerHTML=sessionvalue["usergo"]["username"];
}
}
};
xhttp.open("GET", "/a/request/ajax/session", true);
xhttp.send();
}
getusersession();
function requestsAreComplete(requests) {
return requests.every(function (request) {
return request.readyState == 4;
});
}
function unsuccessfulRequests(requests) {
var unsuccessful = requests.filter(function (request) {
return request.status != 200;
});
return unsuccessful.length ? unsuccessful : null;
}
function onRequestsComplete(requests, callback) {
function sharedCallback() {
if (requestsAreComplete(requests)) {
callback(requests, unsuccessfulRequests(requests));
}
}
requests.forEach(function (request) {
request.onreadystatechange = sharedCallback;
});
}
function pageinload(var1,var2){
var xhr1 = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
xhr1.onprogress = function(){
ploff.style.display = 'block';
};
onRequestsComplete([xhr1], function(requests, unsuccessful) {
if (unsuccessful) { return; }
document.getElementById("main-body").innerHTML=requests[0].responseText;
//var webdet=JSON.parse(requests[1].responseText);
ploff.style.display = 'none';
});
xhr1.open('GET', 'https://shubhamkb.me/a/pages/'+var1+var2, true);
xhr2.open('GET', 'https://shubhamkb.me/a/pages?q='+var1, true);
xhr1.send();
//xhr2.send();
}
function onclickurl(var1,var2){
console.log(var1);
console.log(var2);
if(var1=="home"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Home", "/");
pageinload("home", "");
} else if(var1=="about"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"About", "/about");
pageinload("about", "");
} else if(var1=="account"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Account", "/account");
pageinload("account", "");
} else if(var1=="blog"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Blog", "/blog");
pageinload("blog", "");
} else if(var1=="category"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Category", "/category");
pageinload("category", "");
} else if(var1=="collection"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Collection", "/collection");
pageinload("collection", "");
} else if(var1=="conditions"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Conditions", "/conditions");
pageinload("conditions", "");
} else if(var1=="contact"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Contact", "/contact");
pageinload("contact", "");
} else if(var1=="date"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Date", "/date");
pageinload("date", "");
} else if(var1=="faq"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"FAQ", "/faq");
pageinload("faq", "");
} else if(var1=="help"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Help", "/help");
pageinload("help", "");
} else if(var1=="login"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Login", "/login");
pageinload("login", "");
} else if(var1=="logout"){
window.location.replace('/');
} else if(var1=="post"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Post", "/post");
pageinload("post", "");
} else if(var1=="privacy"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Privacy", "/privacy");
pageinload("privacy", "");
} else if(var1=="profile"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Profile", "/profile");
pageinload("profile", "");
} else if(var1=="register"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Register", "/register");
pageinload("register", "");
} else if(var1=="tag"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Tag", "/tag");
pageinload("tag", "");
} else if(var1=="terms"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Terms", "/terms");
pageinload("terms", "");
} else if(var1=="user"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"User", "/user");
pageinload("user", "");
} else if(var1=="s"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Short Url", "/s");
pageinload("s", "");
} else if(var1=="game"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Short Url", "/game/"+var2);
pageinload("game", "?game="+var2);
} else if(var1=="files"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"File Manager", "/files");
pageinload("files", "");
} else if(var1=="404"){
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Not Found", ""+var2);
pageinload("404", "");
} else{
let stateObj = { id: "100" };
window.history.pushState(stateObj,"Not Found", ""+var2);
pageinload("404", "");
}
}
function stringforurlvalidate(var1, var2){
var parray = var1.split("/");
var pvtring = var1;
var pstring = var2;
var1=parray[1];
if((var1=="home")||(var1=="")){
var urlfstring = "home";
} else if((var1=="register")||(var1=="signup")){
var urlfstring = "register";
} else if((var1=="login")||(var1=="signin")){
var urlfstring = "login";
} else if((var1=="logout")||(var1=="signout")){
window.location.replace('/');
} else if(var1=="profile"){
var urlfstring = "profile";
} else if(var1=="contact"){
var urlfstring = "contact";
} else if(var1=="about"){
var urlfstring = "about";
} else if(var1=="help"){
var urlfstring = "help";
} else if(var1=="terms"){
var urlfstring = "terms";
} else if(var1=="conditions"){
var urlfstring = "conditions";
} else if(var1=="privacy"){
var urlfstring = "privacy";
} else if(var1=="faq"){
var urlfstring = "faq";
} else if(var1=="search"){
var urlfstring = "search";
} else if((var1=="blog")||(var1=="b")){
var urlfstring = "blog";
} else if((var1=="post")||(var1=="p")){
var urlfstring = "post";
} else if((var1=="category")||(var1=="c")){
var urlfstring = "category";
} else if((var1=="tag")||(var1=="t")){
var urlfstring = "tag";
} else if((var1=="collection")||(var1=="col")){
var urlfstring = "collection";
} else if((var1=="date")||(var1=="d")){
var urlfstring = "date";
}else if(var1=="account"){
var urlfstring = "account";
} else if(var1=="user"){
var urlfstring = "user";
} else if(var1=="s"){
var urlfstring = "s";
} else if(var1=="game"){
var urlfstring = "game";
var1=parray[2];
} else if(var1=="files"){
var urlfstring = "files";
} else{
var urlfstring = "404";
var1=pvtring+pstring;
}
onclickurl(urlfstring, var1);
}
function oncallbyfieldforreg(v1){
email=document.getElementById('email'+v1);
firstname=document.getElementById('firstname'+v1);
password=document.getElementById('password'+v1);
repassword=document.getElementById('repasspassword'+v1);
username=document.getElementById('username'+v1);
dob=document.getElementById('dob'+v1);
genm=document.getElementById('genm'+v1);
genf=document.getElementById('genf'+v1);
geno=document.getElementById('geno'+v1);
buttonos=document.getElementById('submitr'+v1);
bval="n";
if(bval=="y"){
buttonos.disabled=false;
} else{
buttonos.disabled=true;
}
}
function oncallbyfieldforregfname(v1){
firstname=document.getElementById('rfname'+v1).value;
if(firstname.length==3){
bval="y";
} else{
bval="n";
}
oncallbyfieldforreg(v1);
}
function oncallbyfieldforreguname(v1){
username=document.getElementById('rusername'+v1).value;
xhru=new XMLHttpRequest();
xhru.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
console.log(this.responseText);
}
};
xhru.open('POST', "/a/request/ajax/json", true);
xhru.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhru.send("rt=post&fn=isusernameacceptedbyreg&username="+username);
oncallbyfieldforreg(v1);
}
function oncallbyfieldforregemail(v1){
username=document.getElementById('remail'+v1).value;
xhre=new XMLHttpRequest();
xhre.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
console.log(this.responseText);
}
};
xhre.open('POST', "/a/request/ajax/json", true);
xhre.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhre.send("rt=post&fn=isusernameacceptedbyreg&username="+username);
oncallbyfieldforreg(v1);
}
function inpasschar(passwd){
passcon="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;':,./<>?"+String.fromCharCode(34)+"";
}
function oncallbyfieldforregpass(v1){
password=document.getElementById('rpass'+v1).value;
if(password.length>=7){
bval="y";
} else{
bval="n";
}
oncallbyfieldforreg(v1);
}
function oncallbyfieldforregrepass(v1){
password=document.getElementById('rpass'+v1).value;
repassword=document.getElementById('rrepass'+v1).value;
if(password!=repassword){
fl="<p style='color: red;'>&#x2718;Password not match.</p>";
console.log(fl);
} else {
fl="<p style='color: green;'>&#x2714;Password Match</p>";
console.log(fl);
}
oncallbyfieldforreg(v1);
}
function isagevalid(dob){
var date1 = new Date(dob);
var date2 = new Date();
const diffTime = Math.abs(date2 - date1);
if(diffTime<=409968000000){
return "n";
} else {
return "y";
}
}
function oncallbyfieldforregdob(v1){
dob=document.getElementById('rdob'+v1).value;
if(dob.length==0){
fl="<p style='color: red;'>&#x2718;Date of Birth must not be empty.</p>";
} else if(isagevalid(dob)=="n"){
fl="<p style='color: red;'>&#x2718;Age must be 13year old.</p>";
} else {
fl="<p style='color: green;'>&#x2714;Ok</p>";
}
oncallbyfieldforreg(v1);
}
function oncallbyfieldforreggen(v1){ <!--done-->
genm=document.getElementById('rgenm'+v1);
genf=document.getElementById('rgenf'+v1);
geno=document.getElementById('rgeno'+v1);
if(genm.checked==false && genf.checked==false && geno.checked==false){
fl="<p style='color: red;'>&#x2718Select One";
} else {
fl="<p style='color: green;'>&#x2714;Ok</p>";
}
oncallbyfieldforreg(v1);
}
window.addEventListener("popstate", backPress())
function backPress(){
console.log("backpress")
var urlstring = window.location.pathname;
var searchstring = window.location.search;
stringforurlvalidate(urlstring, searchstring);
}
//jquery
