let wsMyHeader={
    showHeader(){
        return`
            <h2 class="app-header-title">Super<span>Hero.</span></h2>
            <form class="app-header-search">
                <input type="text" class="form-control"
                placeholder="Search your SuperHero Here . . ." 
                name="search">
                <button type="submit" class="search-btn">
                    <i class="fas fa-search"></i>
                </button>
                <div class="search-list" id="search-list">
                </div>
            </form>
        `
    }
};
self.addEventListener("message",(e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})