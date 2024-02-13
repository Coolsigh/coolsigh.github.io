        var second;
        second = 0;

        var clock;
        function resetTimer()
        {
            clearInterval(clock);
            second=0;
            document.getElementById('timeValue').value=second+'s';
            document.getElementById("st1").style.display='block';
            document.getElementById("st2").style.display='none';
        }

        function startTimer()
        {
            clock=setInterval(timer,1000);
            setTimeout ('document.getElementById("st1").style.display="none";document.getElementById("st2").style.display="block";',150);
        }

        function stopTimer()
        {
            clearInterval(clock);
            document.getElementById('timeValue').value=second+'s';
            document.getElementById("st1").style.display='block';
            document.getElementById("st2").style.display='none';
        }
        function timer()
        {
            second++;
            document.getElementById('timeValue').value=second+'s';
        }
        