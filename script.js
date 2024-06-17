const searchform=document.querySelector("#search-form");
const searchbox=document.getElementById("search-box");
const searchresult=document.querySelector("#search-result");
const showmore=document.querySelector("#show-more");
let acesskey="N8ewI42Y5Qlvv5KHJHqvac9TRz0dbuQFEQaWhbYQRWs";

let keyword="";
let page =1;

async function searchimage()
{
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${acesskey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();
    if(page==1)
        {
            searchresult.innerHTML="";
        }

    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";

        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);

    })
    showmore.style.display="block";

}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchimage();
});
showmore.addEventListener("click",()=>{
    page++;
    searchimage();
})