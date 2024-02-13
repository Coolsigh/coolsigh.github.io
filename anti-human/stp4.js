            function saveeye()
                {
                    var dv = document.getElementById("maind");
                    var bg = document.body;
                    var tt = document.getElementById("h");
                    dv.style.backgroundColor='#ffe'
                    bg.style.backgroundColor='#998';
                    tt.style.color='#79f';
                    tt.style.borderLeft='5px solid #79f';
                }
            function dmgeye()
                {
                    var dv = document.getElementById("maind");
                    var bg = document.body;
                    var tt = document.getElementById("h");
                    dv.style.backgroundColor='#f00'
                    bg.style.backgroundColor='#0f0';
                    tt.style.color='#00f';
                    tt.style.borderLeft='5px solid #00f';
                }
            function dmgeyeProMaxPluscc()
                {
                    var c = confirm ("⚠️⚠️⚠️警告⚠️⚠️⚠️!!!!!!!!!!!!!!!!\n瞎眼模式ProMaxPlus++会使光敏性癫痫患者发作 \n\n光敏性癫痫严禁启用!!!!!!!!!!!!!!!!!!\n\n如果你是光敏性癫痫，请 **立即** 点击取消!!!!!!!!!!\n\n开启后 ** 无法关闭 **!!!!!!! 除非刷新页面。");
                    if (c == true)
                        {
                            dmgeyep1();
                        }
                    else
                        {
                            document.getElementById("depro").checked=false;
                        }
                }
            function dmgeyep1()
                {
                    document.getElementById("depro").disabled=true;
                    document.getElementById("light").disabled=true;
                    document.getElementById("dark").disabled=true;
                    document.getElementById("se").disabled=true;
                    document.getElementById("de").disabled=true;
                    var dv = document.getElementById("maind");
                    var bg = document.body;
                    var tt = document.getElementById("h");
                    dv.style.backgroundColor='#f00'
                    bg.style.backgroundColor='#0f0';
                    tt.style.color='#00f';
                    tt.style.borderLeft='5px solid #00f';
                    setTimeout ("dmgeyep2();",50);
                }
            function dmgeyep2()
                {
                    var dv = document.getElementById("maind");
                    var bg = document.body;
                    var tt = document.getElementById("h");
                    dv.style.backgroundColor='#0f0'
                    bg.style.backgroundColor='#00f';
                    tt.style.color='#f00';
                    tt.style.borderLeft='5px solid #f00';
                    setTimeout ("dmgeyep3();",50);
                }
            function dmgeyep3()
                {
                    var dv = document.getElementById("maind");
                    var bg = document.body;
                    var tt = document.getElementById("h");
                    dv.style.backgroundColor='#00f'
                    bg.style.backgroundColor='#f00';
                    tt.style.color='#0f0';
                    tt.style.borderLeft='5px solid #0f0';
                    setTimeout ("dmgeyep1();");
                }
                