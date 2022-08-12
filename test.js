function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
  if(message>maxLength){
    result=message.split(0, maxLength)+"...";
  }else{
    result=message;
    }
    
    /// Change code above this line
    return result;
  }
  formatMessage("Curabitur ligula sapien", 16);