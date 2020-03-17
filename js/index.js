$(document).ready(function () {
  $('#randomize').click(() => {
    fetchColor()
  })

  /*
    Modify the fetchColor() to use promises to make the API request
    instead of $.ajax()
  */
  function fetchColor () {
    const url = 'https://css-colors-api.herokuapp.com/api/v1/colors/random'

// axios instead of AJAX
// when axios returns API data it stores all the returned data in a data field within an object. the other fields are API stats etc
// objects from api are "response"
    axios.get(url)
    .then((response) => {
      updateUi(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

    // make API request using #.ajax()
    // $.ajax({
    //   url: url,
    //   type: 'GET'
    // })
    // .done((response) => {
    //   console.log(response)
    //   // get response from successful API call and
    //   // pass response data to the updateUi() function
    //   updateUi(response)
    // })
    // .fail((error) => {
    //   console.log(error)
    //   alert('an error occurred')
    // })



  }

  function updateUi (color) {
    // extract the hexcode and name from object
    const hexcode = color.hexcode
    const colorName = color.name

    // use jQuery to update the UI
    $('.circle').css('backgroundColor', hexcode)
    $('.color-name').text(colorName)
    $('.color-hex').text(hexcode)
  }
})
