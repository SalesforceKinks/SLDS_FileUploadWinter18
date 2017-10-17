({
    handleFileUpload: function (component, event) {
        
        var filesToBeUploaded = event.getParam("files");
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "type" : "success",
            "message": filesToBeUploaded.length+"files loaded successfully!" 
        });
        toastEvent.fire();
        $A.get('e.force:refreshView').fire();
      
    },

})