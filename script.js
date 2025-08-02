function tabLink(tabLinks){
    const tabsContents = document.getElementsByClassName("tab-content");
  
   console.log(tabsContents);
   
    
    for (let tabsContent of tabsContents){
        tabsContent.classList.remove("activetabLink")
       
        
    }
    document.getElementById(tabLinks).classList.add("activetabLink")
    }

    const profile = document.querySelector(".profile")
    const profileText = document.querySelector(".profile-span")

    profile.addEventListener("mouseenter", function(){
        profileText.classList.add("profiletext")
     
       
    })
     profile.addEventListener("mouseleave", function(){
         profileText.classList.remove("profiletext")
        
    })
    