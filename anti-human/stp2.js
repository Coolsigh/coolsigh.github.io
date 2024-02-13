            var ag = document.getElementById("agectrler");
            setInterval("document.getElementById('age').innerHTML=agectrler.value;");
            function ckdata()
                {
                    var c1 = document.getElementById("ck1");
                    var c2 = document.getElementById("ck2");
                    if (c1.checked == true)
                        {
                            if (c2.checked == true)
                                {
                                    alert ("你玩儿呐? 你是双性人?\n\(性别选择出错.\)");
                                }
                            else
                                {
                                    var sl = document.getElementById("slct");
                                    if (sl.value == ".com")
                                        {
                                            if (agectrler.value <= 4)
                                                {
                                                    alert ("你是个神童!\n\(年龄选择不合理.\)");
                                                }
                                            else
                                                {
                                                    window.location.href='https://coolsigh.github.io/anti-human/reCAPTCHA.html';
                                                }
                                        }
                                    else
                                        {
                                            if (sl.value == "选择后缀")
                                                {
                                                    alert ("你电子邮件后缀还没选呢!");
                                                }
                                            else
                                                {
                                                    alert ("你家电子邮件后缀有这样的啊?\n\(电子邮箱后缀错误.\)");
                                                }
                                        }
                                }
                        }
                    else
                        {
                            if (c2.checked == false)
                                {
                                    alert ("你玩儿呐? 你是无性人?\n\(性别选择出错.\)");
                                }
                            else
                                {
                                    var sl = document.getElementById("slct");
                                    if (sl.value == ".com")
                                        {
                                            if (agectrler.value <= 4)
                                                {
                                                    alert ("你是个神童!\n\(年龄选择不合理.\)");
                                                }
                                            else
                                                {
                                                    window.location.href='https://coolsigh.github.io/anti-human/reCAPTCHA.html';
                                                }
                                        }
                                    else
                                        {
                                            if (sl.value == "选择后缀")
                                                {
                                                    alert ("你电子邮件后缀还没选呢!");
                                                }
                                            else
                                                {
                                                    alert ("你家电子邮件后缀有这样的啊?\n\(电子邮箱后缀错误.\)");
                                                }
                                        }
                                }
                        }
                document.getElementById("maind").style.display='block';
                document.getElementById("hdnb").style.display='none';
                document.getElementById("hdnd").style.display='none';
                document.getElementById("apr").style.display='none';
                }
                
                