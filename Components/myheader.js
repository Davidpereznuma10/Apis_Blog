export default {
    showMyHEader(){
        const ws = new Worker ("Components/Storage/wsMyHeader.js",{type: "module"});
        ws.postMessage({module:"showHeader", data:""});
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");
            document.querySelector(".app-header").append(...doc.body.children);
        })
    }
}