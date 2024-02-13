            function err()
                {
                    document.getElementById("maindiv").style.display='none';
                    document.body.style.backgroundColor='#00f';
                    document.getElementById("cd").style.display='block';
                }
            function ckd()
                {
                    var ckr = document.getElementById("check");
                    if (ckr.checked == true)
                        {
                            alert ("请同意条款.");
                        }
                    else
                        {
                            window.location.href='https://coolsigh.github.io/anti-human/step2.html';
                        }
                }