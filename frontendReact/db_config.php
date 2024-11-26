<?php
   
   //Remote
    //  define("SERVER","localhost");
    //  define("USER","root");//rajib
    //  define("DATABASE","test");
    //  define("PASSWORD","");

   //Local
    define("SERVER","localhost");
    define("USER","rajib");//rajib
    define("DATABASE","wdpf48_rajib");
    define("PASSWORD","rajib@123;;");

    $db=new mysqli(SERVER,USER,PASSWORD,DATABASE);
    $tx="core_";
    

?>