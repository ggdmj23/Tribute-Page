var images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Kobe_Bryant_2015.jpg/220px-Kobe_Bryant_2015.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kobe_Bryant_retired_HS2.jpg/170px-Kobe_Bryant_retired_HS2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lipofsky_Kobe.jpg/170px-Lipofsky_Kobe.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kobe_Bryant_8.jpg/170px-Kobe_Bryant_8.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kobe_Bryant_Drives2.jpg/170px-Kobe_Bryant_Drives2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Lakers_Finals_08.jpg/170px-Lakers_Finals_08.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lakers_White_House_2010.jpg/220px-Lakers_White_House_2010.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Kobe_Bryant_left_floater.jpg/170px-Kobe_Bryant_left_floater.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/2010_NBA_Champion_Los_Angeles_Lakers_with_President_Obama.jpg/220px-2010_NBA_Champion_Los_Angeles_Lakers_with_President_Obama.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Masked_mamba.jpg/220px-Masked_mamba.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kobe_Bryant_dunking_2013.jpg/170px-Kobe_Bryant_dunking_2013.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Kobe_Bryant_vs_Marcin_Gortat.jpg/220px-Kobe_Bryant_vs_Marcin_Gortat.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Kobe_Bryant_vs_Gary_Neal.jpg/220px-Kobe_Bryant_vs_Gary_Neal.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/LeBron_James_vs._Kobe_Bryant_%2824848589252%29.jpg/170px-LeBron_James_vs._Kobe_Bryant_%2824848589252%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Kobe_Bryant_Beijing_Olympics_20080810_d-1024-627v.jpg/170px-Kobe_Bryant_Beijing_Olympics_20080810_d-1024-627v.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kobe_Bryant_Shane_Battier.jpg/170px-Kobe_Bryant_Shane_Battier.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/220px-Kobe_Bryant_2014.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Kobe_Bryant_at_Pirates_3_premiere.jpg/220px-Kobe_Bryant_at_Pirates_3_premiere.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/NikeTaipeiFlagshipStoreLaunch_Main.jpg/240px-NikeTaipeiFlagshipStoreLaunch_Main.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Kobe_Bryant_death.jpg/170px-Kobe_Bryant_death.jpg"
    ];
    
    var num = 0;
    
    function next(){
        var slider = document.getElementById("image");
        num++;
        if(num >= images.length) {
            num = 0;
        }
        slider.src = images[num];
    }
    
    function prev(){
        var slider = document.getElementById("image");
        num--;
        if(num < 0) {
            num = images.length - 1;
        }
        slider.src = images[num];
    }