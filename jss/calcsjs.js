        var numresult;
        var str;
        
        function onclicknum(nums)
        {
            str = document.getElementById("nummessege");
            str.value = str.value + nums;
        }
        
        function onclickclear()
        {
            str = document.getElementById("nummessege");
            str.value = null;
        }
        
        function onclickresult()
        {
            str = document.getElementById("nummessege");
            numresult = eval(str.value);
            str.value = numresult;
        }
        
        function onclickbackspace()
        {
            var t=document.getElementById("nummmessage");
            str.value=str.value.substr(0,str.value.length-1);
        }
        