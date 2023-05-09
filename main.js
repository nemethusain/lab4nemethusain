let eded = parseInt(prompt("Ədəd daxil edin: "));

if (eded % 2 == 0 && eded > 0) {
    alert(eded + " ədədi cütdür və müsbətdir.");
} else if (eded % 2 == 0 && eded < 0) {
    alert(eded + " ədədi cütdür və mənfidir.");
} else if (eded % 2 != 0 && eded > 0) {
    alert(eded + " ədədi təkdir və müsbətdir.");
} else if (eded % 2 != 0 && eded < 0) {
    alert(eded + " ədədi təkdir və mənfidir.");
} else {
    alert(eded + " ədədi tək,cüt,müsbət,mənfi deyil!");
}