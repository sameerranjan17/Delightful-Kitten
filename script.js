let btn = document.querySelector("button");
let url2 = "https://api.thecatapi.com/v1/images/search";

btn.addEventListener("click", async () => {
  let link = await getImage();
  
  // These MUST be inside the event listener
  let img = document.querySelector("#result"); 
  img.setAttribute("src", link); 
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data[0].url;
  } catch (e) {
    console.log("error - ", e);
    return "/";
  }
}