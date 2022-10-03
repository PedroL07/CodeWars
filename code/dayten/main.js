// simple function that matches name to the owner. depending on results it gives a reponce. either boss or guest

function greet (name, owner) {

    if (name == owner)
    {
      return 'Hello boss'
    } else {
      return 'Hello guest'
    }
  }