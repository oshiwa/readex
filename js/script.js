
    function showChapters(){
    document.getElementById("chapter-container").style.height = "100%"
    }
    function hideChapters(){
    document.getElementById("chapter-container").style.height = "0%"
    }
    function showBooks(){
    document.getElementById("frame-container").style.height = "100%"
    }
    function hideBooks(){
    document.getElementById("frame-container").style.height = "0%"
    }
    function toLightDark(){
    document.body.classList.toggle("light-to-dark")
    }
    function toShowHide(){
    document.body.classList.toggle("hide")
    }
    function toTop(){
        document.body.scrollIntoView()
    }
