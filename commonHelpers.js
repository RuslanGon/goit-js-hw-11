import{S as u,i as f}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=new u(".gallery-link"),n=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";const d={key:"42129451-ab1d1e3d1abd6a79c6499a83d",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};n.addEventListener("submit",s=>{s.preventDefault(),l.style.display="inline-block",c.innerHTML="";const o=n.elements.search.value.trim();d.q=o,h().then(t=>p(t)).catch(t=>console.log(t)),n.reset()});function h(){const s=new URLSearchParams(d);return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function p(s){if(s.hits.length===0)f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const o=s.hits.map(t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}" >
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      width = "360"
      />
    </a>
    <div class="img-text">
    <div class="img-info">
    <h3>Likes</h3>
    <p> ${t.likes}</p>
    </div>
    <div class="img-info">
    <h3>Views</h3>
    <p> ${t.views}</p>
    </div>
       <div class="img-info">
    <h3>Comments</h3>
    <p> ${t.comments}</p>
    </div>
       <div class="img-info">
    <h3>Downloads</h3>
    <p> ${t.downloads}</p>
    </div>
      </div>
  </li>`).join("");c.innerHTML=o,m.refresh()}l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
