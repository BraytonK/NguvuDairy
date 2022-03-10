$.ajax({
   url: "https://rawgit.com/nianyuyu/play_javascript/master/1.json",
    type:"get",
    dataType:'text',  
    success: function(data){
      console.log(data);
    },
    error:function() {
      console.log("err");
    }
});
