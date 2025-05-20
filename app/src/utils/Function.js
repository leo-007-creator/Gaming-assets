
export function showSidebar(){
    
    if(typeof window != 'undefined' && document){

        const sidebar= document.querySelector('.sidebar');
        sidebar.style.display="flex";
    }
}


export function hideSidebar(){
    if (typeof window !='undefined' && document){
        const sidebar= document.querySelector('.sidebar');
         sidebar.style.display="none";
    }
}