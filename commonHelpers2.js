import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form"),i=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="state"]');l.addEventListener("submit",o=>{o.preventDefault();const t=Number(i.value),r=o.target.elements.state.value;new Promise((e,n)=>{console.log(r),setTimeout(r==="fulfilled"?()=>{e(t)}:()=>{n(t)},t)}).then(e=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,backgroundColor:"green",theme:"dark",color:"green",position:"topRight"})}).catch(e=>{s.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,backgroundColor:"red",theme:"dark",color:"red",position:"topRight"})}),i.value="",c.checked=!1});
//# sourceMappingURL=commonHelpers2.js.map
