/**
 * Created by Bing on 2015/11/29.
 */

function liClick(){
    window.open("https://github.com/yrok");
}

window.onload=function(){
    // 下方逐字文字效果
    var oMaintxt=document.getElementById("mainTxt").innerHTML;
    var reg='<br>';
    var aParasplit=oMaintxt.split(reg);
    var len=aParasplit.length;
    var oOutp=document.getElementById("outputTxt").innerHTML;
    var aPara=[];
    // 读取的代码转换格式,这里貌似没用上，原来的文本涉及到个别字符，备用
    function escapeHTML(htmlStr){
        var html=htmlStr.replace(/[<>"&]/g,function(m0){
            switch(m0){
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case '&':
                    return '&amp;';
                case '"':
                    return '&quot;';
            }

        });
        return html;
    }
    // 分割获取的innerhtml，然后根据片段数组分割，跟br组合，最后合并大数组
    var content=[];
    function Finaltxt(){
        for (var i = 0; i < len; i++) {
            var lenPara=aParasplit[i].length;
            aPara[i]=escapeHTML(aParasplit[i]);
            for (var j = 0; j <lenPara; j++) {
                aTxt=aPara[i].split("");
                content.push(aTxt[j]);
            };
            content.push('<br>');
        };
        return content;

    }
    //获取样式
    function getStyle(obj,styleName){
        if(obj.currentStyle){
            return obj.currentStyle[styleName];
        }else{
            return getComputedStyle(obj,null)[styleName];
        }
    }

    // 定义最终取得的数组，以及输出单个文字的函数
    var arr=Finaltxt();



    // 延时控制函数

    // 开启和终止条件
    var num=0;
    var max=arr.length;
    var intervalId=null;


    function time(){
        document.getElementById("outputTxt").innerHTML=document.getElementById("outputTxt").innerHTML+arr[num];
        num++;
        //监视执行次数。
        //  console.log(num);
        if (num==max){
            clearInterval(intervalId);
            document.getElementById("outPut").style.display="none";
            document.getElementById("gridBox").style.display="flex";
        };
    }
    intervalId=setInterval(time,50);



};
