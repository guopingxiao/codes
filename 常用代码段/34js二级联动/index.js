var lineNum = ["101", "102"];
var collect = document.getElementById("lines")
var old = collect.innerHTML
function aa() {
    var lineNu = " "
    for (var j = 0; j < lineNum.length; j++) {
        lineNu += '<option>' + lineNum[j] + '</option>';
    }
    collect.innerHTML = old + lineNu;
} //网页加载时执行此函数，为线路选择框动态添加选项      
aa();  
var stationName = [
    ["百万庄西口", "百万庄中街", "百万庄东口", "展览路", "阜成门外", "阜成门", "阜成门内", "白塔寺", "西四路口东", "西安门", "北海", "故宫", "沙滩路口西", "美术馆东", "东四路口东", "朝内小街", "朝阳门内", "朝阳门外", "神路街", "东大桥路口东", "关东店", "呼家楼西", "小庄路口东", "红庙路口西", "红庙路口东"],
    ["动物园枢纽站", "二里沟", "百万庄", "甘家口大厦", "甘家口东", "阜外西口", "展览路", "阜成门外", "阜成门", "阜成门内", "白塔寺", "西四路口西", "缸瓦市", "甘石桥", "西单商场", "西单路口南", "宣武门内", "校场口", "菜市口北", "果子巷", "虎坊桥路口南", "太平街北口", "太平街", "陶然桥北", "永定门长途汽车站", "北京南站"]
];

function getStationName() {
    var line_num = document.lineandstation.lines;
    var station_name = document.lineandstation.station;
    var lineStation = stationName[line_num.selectedIndex - 1];
    station_name.length = 1;
    for (var i = 0; i < lineStation.length; i++) {
        station_name[i + 1] = new Option(lineStation[i], lineStation[i]);
    }
} //为站点选择框根据线路选择框的值动态添加选项