var color1 = ["#B7d7FF","red", "yellow", "green", "#B7d7FF"];   // the color choices
var color2 = ["white","red", "yellow", "green", "white"];   // the color choices
index13 = [] // index of the current color
index14 = []
index15 = []
index23 = []
index24 = []
index25 = []
index33 = []
index34 = []
index35 = []
index43 = []
index44 = []
index45 = []
index53 = []
index54 = []
index55 = []
index63 = []
index64 = []
index65 = []
index73 = []
index74 = []
index75 = []
index83 = []
index84 = []
index85 = []
function i13()
{
document.getElementById("i13").style.background = color1[index13];
index13 = (index13 + 1) % color1.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %   
}
function i14()
{
document.getElementById("i14").style.background = color1[index14];
index14 = (index14 + 1) % color1.length;            
}
function i15()
{
document.getElementById("i15").style.background = color1[index15];
index15 = (index15 + 1) % color1.length;             
}
//tweede rij
function i23()
{
document.getElementById("i23").style.background = color2[index23];
index23 = (index23 + 1) % color2.length;             
}
function i24()
{
document.getElementById("i24").style.background = color2[index24];
index24 = (index24 + 1) % color2.length;             
}
function i25()
{
document.getElementById("i25").style.background = color2[index25];
index25 = (index25 + 1) % color2.length;             
}
//derde rij
function i33()
{
document.getElementById("i33").style.background = color1[index33];
index33 = (index33 + 1) % color1.length;             
}
function i34()
{
document.getElementById("i34").style.background = color1[index34];
index34 = (index34 + 1) % color1.length;             
}
function i35()
{
document.getElementById("i35").style.background = color1[index35];
index35 = (index35 + 1) % color1.length;             
}
//vierde rij
function i43()
{
document.getElementById("i43").style.background = color2[index43];
index43 = (index43 + 1) % color2.length;             
}
function i44()
{
document.getElementById("i44").style.background = color2[index44];
index44 = (index44 + 1) % color2.length;             
}
function i45()
{
document.getElementById("i45").style.background = color2[index45];
index45 = (index45 + 1) % color2.length;             
}
//vijfde rij
function i53()
{
document.getElementById("i53").style.background = color1[index53];
index53 = (index53 + 1) % color1.length;             
}
function i54()
{
document.getElementById("i54").style.background = color1[index54];
index54 = (index54 + 1) % color1.length;             
}
function i55()
{
document.getElementById("i55").style.background = color1[index55];
index55 = (index55 + 1) % color1.length;             
}
//zesde rij
function i63()
{
document.getElementById("i63").style.background = color2[index63];
index63 = (index63 + 1) % color2.length;             
}
function i64()
{
document.getElementById("i64").style.background = color2[index64];
index64 = (index64 + 1) % color2.length;             
}
function i65()
{
document.getElementById("i65").style.background = color2[index65];
index65 = (index65 + 1) % color2.length;             
}
//zevende rij
function i73()
{
document.getElementById("i73").style.background = color1[index73];
index73 = (index73 + 1) % color1.length;             
}
function i74()
{
document.getElementById("i74").style.background = color1[index74];
index74 = (index74 + 1) % color1.length;             
}
function i75()
{
document.getElementById("i75").style.background = color1[index75];
index75 = (index75 + 1) % color1.length;             
}
//achtse rij
function i83()
{
document.getElementById("i83").style.background = color2[index83];
index83 = (index83 + 1) % color2.length;             
}
function i84()
{
document.getElementById("i84").style.background = color2[index84];
index84 = (index84 + 1) % color2.length;             
}
function i85()
{
document.getElementById("i85").style.background = color2[index85];
index85 = (index85 + 1) % color2.length;             
}