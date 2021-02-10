<script>
                  if(value="Palindrome"){
                  $(document).ready(function(){
                    $("button").click(function(){
                      $("p").addClass("green");
                    });
                  });
                }else if(value="Not A Palindrome"){
                  $(document).ready(function(){
                    $("button").click(function(){
                      $("p").addClass("redd");
                    });
                  });
                }else{
                  $(document).ready(function(){
                    $("button").click(function(){
                      $("p").addClass("white");
                    });
                  });
                }
            
                  </script>