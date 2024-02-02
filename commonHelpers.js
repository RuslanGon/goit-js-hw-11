import{i as u,S as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const l=document.querySelector(".form"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";const d={key:"42129451-ab1d1e3d1abd6a79c6499a83d",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};l.addEventListener("submit",s=>{s.preventDefault(),a.style.display="inline-block",c.innerHTML="";const t=l.elements.search.value.trim();d.q=t,h().then(i=>m(i)).catch(i=>console.log(i)),l.reset()});function h(){const s=new URLSearchParams(d);return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(s){if(s.hits.length===0)u.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const t=s.hits.map(r=>`<li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}" >
      <img
        class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"
      width = "360"
      />
    </a>
    <div class="img-text">
    <div class="img-info">
    <h3>Likes</h3>
    <p> ${r.likes}</p>
    </div>
    <div class="img-info">
    <h3>Views</h3>
    <p> ${r.views}</p>
    </div>
       <div class="img-info">
    <h3>Comments</h3>
    <p> ${r.comments}</p>
    </div>
       <div class="img-info">
    <h3>Downloads</h3>
    <p> ${r.downloads}</p>
    </div>
      </div>
  </li>`).join("");c.innerHTML=t,new f(".gallery-link").refresh()}a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
