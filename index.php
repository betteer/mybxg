<?php
//根据路由导航页面
$pathname='index';
$filename='login';
//先判断是否有路径，获取路径的方法是：$_SERVER['PATH_INFO']
if(isset($_SERVER['PATH_INFO'])){
    $urlpath=$_SERVER['PATH_INFO'];
    //把获取的路径进行分割在PHP中用explode的方法。在分割的时候发现多个“/”,
    //先把“/”给去掉，在这里用到了substr的方法。
    $strings=substr($urlpath,'1');
    $arr=explode('/', $strings);
    //因为在页面中数组的长度只有是2的时候才能找到所需的页面。
   if(count($arr)==2){
       $pathname=$arr[0];
       $filename=$arr[1];
   }else{       
   }
}else{
$filename='login';
}
 
include('./views/'.$pathname.'/'.$filename.'.html')
?>