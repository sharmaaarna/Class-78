var i=0;
var pic=["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F762656518124596335%2F&psig=AOvVaw040HcLSQUzw3_8Ao10GyM_&ust=1625492369110000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOCp4_GdyfECFQAAAAAdAAAAABAI","https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg","Motherhttps://i.pinimg.com/736x/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg","https://t3.ftcdn.net/jpg/02/74/86/30/360_F_274863015_qi4LAqvkk9lykghyI5G59TtCYjK0JlSz.jpg","https://i.pinimg.com/236x/ce/24/bd/ce24bd442a25a6556cb7b24e82563332.jpg","https://image.freepik.com/free-vector/girl-shy-character_1450-155.jpg"];
var update=["Family","Father","Mother","Grand Father","Grand Mother","Me"];
function Change(){
    
    i++;
    var total_memebers = 5;
    if(i > total_memebers)
    {
        i = 0;
    }
    var updateImage = pic[i];
    var updateName = update[i];
    document.getElementById("family_pic").src = updateImage;
    document.getElementById("family_member_name").innerHTML = updateName;
}