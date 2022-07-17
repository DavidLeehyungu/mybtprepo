sap.ui.define(
  ["./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("gitpg.myapp.controller.MainView", {
      onInit: function () {
        var oBusy = new sap.m.BusyDialog();
        var oModel = new JSONModel();
        oModel.attachRequestSent(function() {
          oBusy.open();
        });
        oModel.loadData("../model/Data.json");
        oModel.attachRequestCompleted(function() {
          oBusy.close();
        });
        this.getView().setModel(oModel, "ListModel")
        

        // let oJson = new JSONModel();
        // this.getView().setModel(oJson, 'myNode');
        // debugger;                                       
        // oJson.loadData(
        //     'http://localhost:8921/files'
        //     // 'https://port-8921-nodejs-polite-ice-leencjr95746045.codeanyapp.com/files'
            
        // ).then(
        //     function () {
        //     }.bind(this)
        // )
        
        // $.ajax(
        //   'http://localhost:8921/files',
        //   //     'https://port-8921-nodejs-quaint-lizard-lgx0920328747.codeanyapp.com/files'
        //   {
        //     method: "GET",
        //     success : function (...params) {
        //         debugger;  
        //     }
        //   }
        // )
      },

      onPress: function(oEvent){
        var msg = "";
        MessageToast.show(msg);
      },
      onCreate: function(oEvent){
        // var stitle = this.getView().byId("input1");
        // var scontent = sap.ui.getCore().byId("input2").getValue();
        let that=this
        Fragment.load({
          name : "gitpg.myapp.view.fragments.list1",
          controller: this,
          id: this.getView().getId()
        })
        var stitle = sap.ui.core.Fragment.byId(that.getView().getId(),"input1");

        debugger;
        
      },

      onPressList: function(oEvent){
        var sIdRaiseEvent = oEvent.getSource().getId();

        var sIdLink1 = this.getView().byId('list1').getId();
        var sIdLink2 = this.getView().byId('list2').getId();
        var sIdLink3 = this.getView().byId('list3').getId();
        var sIdLink4 = this.getView().byId('list4').getId();        
        var sIdLink5 = this.getView().byId('list5').getId();
        var sIdLink6 = this.getView().byId('link1').getId();
      
        
        var pFragment;
        if(sIdRaiseEvent === sIdLink1){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list1",
              type : "XML",
              id : "list1Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink2){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list2",
              type : "XML",
              id : "list2Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink3){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list3",
              type : "XML",
              id : "list3Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink4){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list4",
              type : "XML",
              id : "list4Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink5){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.list5",
              type : "XML",
              id : "list5Fragment",
              controller : this
            }
          )
        } else if (sIdRaiseEvent === sIdLink6){
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.home",
              type : "XML",
              id : "list6Fragment",
              controller : this
            }
          )
        }
        pFragment.then(function (oView){
          var oMyExtend = this.getView().byId("myExtend")

          oMyExtend.destroyItems();
          oMyExtend.addItem(oView);

        }.bind(this));
      }      
    });
  }
);