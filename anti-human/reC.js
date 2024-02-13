            function verd()
                {
                    var tr = document.getElementById("trap");
                    var c1 = document.getElementById("1");
                    var c2 = document.getElementById("2");
                    var c3 = document.getElementById("3");
                    var c4 = document.getElementById("4");
                    var c5 = document.getElementById("5");
                    var c6 = document.getElementById("6");
                    var c7 = document.getElementById("7");
                    var c8 = document.getElementById("8");
                    var c9 = document.getElementById("9");
                    var c10 = document.getElementById("10");
                    var c11 = document.getElementById("11");
                    var c12 = document.getElementById("12");
                    var c13 = document.getElementById("13");
                    var c14 = document.getElementById("14");
                    var c15 = document.getElementById("15");
                    var c16 = document.getElementById("16");
                    var c17 = document.getElementById("17");
                    var c18 = document.getElementById("18");
                    var c19 = document.getElementById("19");
                    var c20 = document.getElementById("20");
                    if (c1.checked == true && tr.checked == true && c2.checked == true && c3.checked == true && c4.checked == true && c5.checked == true && c6.checked == true && c7.checked == true && c8.checked == true && c9.checked == true && c10.checked == true && c11.checked == true && c12.checked == true && c13.checked == true && c14.checked == true && c15.checked == true && c16.checked == true && c17.checked == true && c18.checked == true && c19.checked == true && c20.checked == true)
                        {
                            alert ("初步验证通过。");
                            document.getElementById("verd1").style.display='none';
                            document.getElementById("verd2").style.display='block';
                        }
                    else
                        {
                            alert ("你...是人?\n\(人机验证不通过。\)");
                        }
                }
                function verd2()
                    {
                        var r = document.getElementById("r1");
                        if (r.value == 0)
                            {
                                alert ("二次验证通过。");
                                window.location.href='https://coolsigh.github.io/anti-human/step3.html';
                            }
                        else
                            {
                                alert ("你...是人?\n\(人机验证不通过。\)");
                            }
                    }
            function cc()
                {
                    location.reload();
                }