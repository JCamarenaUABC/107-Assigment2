var UI ={}; //INICIALIZADOR DEL OBJETO

class Register{
    /*    *Initialize elements  */
    constructor (Price,Title,ImageUrl,Beds,Baths,Description, Parking ){
        this.Price=Price;
        this.Title=Title;
        this.ImageUrl=ImageUrl;
        this.Beds=Beds;
        this.Baths=Baths;
        this.Description=Description;
        this.Parking=Parking;
        this.user="Jesus";
        this.createdOn=new Date();
    }
}

///////////////////////////////////

function clearInputs(){
    $(".control").val("");
}

function saveProperty(){
    //Get Values
    var Price = UI.txtPrice.val();
    var Title = UI.txtTitle.val();
    var Image = UI.txtImageUrl.val();
    var Beds = UI.txtBeds.val();
    var Baths = UI.txtBaths.val();
    var Description = UI.txtDescription.val();

    var Radio = UI.rbRadio0.val();
    if(UI.rbRadio1.val()){
        Radio = UI.rbRadio1.val()
    }

    var objSend = new Register(Price,Title,Image,Beds,Baths,Description,Radio);
//    var objSend = new Register(UI.Price.val(),UI.Title.val(), UI.ImgeUrl.val(), UI.Beds.val(), UI.Baths.val(), UI.Description.val(), Radio);

    //Send obj
    console.log(objSend);

    //Clear the form
    clearInputs();

    //show an message

}

function init(){

    //console.log("Register");

    UI = {     
        txtPrice: $("#txtPrice"),
        txtTitle: $("#txtTitle"),
        txtImageUrl: $("#txtImageURL"),
        txtBeds: $("#txtBeds"),
        txtBaths: $("#txtBaths"),
        txtDescription: $("#txtDescription"),
        rbRadio0: $("#rbRadio_0"),
        rbRadio1: $("#rbRadio_1"),
        btnSave: $("#btnSave")
    }

    //event
    UI.btnSave.click(saveProperty);

}

window.onload = init;