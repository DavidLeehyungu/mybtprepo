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
        let oJson = new JSONModel();
        this.getView().setModel(oJson, 'myNode');
        oJson.loadData(
            'http://localhost:8921/files'
            // 'https://port-8921-nodejs-polite-ice-leencjr95746045.codeanyapp.com/files'
        ).then(
            function () {
                debugger;
            }.bind(this)
        )
        
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
        var msg = "Helloworld";
        MessageToast.show(msg);
      },

      onPressList: function(oEvent){
        var sIdRaiseEvent = oEvent.getSource().getId();

        var sIdLink1 = this.getView().byId('list1').getId();
        var sIdLink2 = this.getView().byId('list2').getId();
        var sIdLink3 = this.getView().byId('list3').getId();
        var sIdLink4 = this.getView().byId('list4').getId();        
        var sIdLink5 = this.getView().byId('list5').getId();
        var sIdLink6 = this.getView().byId('link1').getId();
        
        debugger;
        
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