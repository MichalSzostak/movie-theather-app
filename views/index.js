$(document).ready(function() {
    var userSelector = $('#user-selector');
    var watchedCheck = $('#watched-check');
    var showsContainer = $('#shows-container');

    // Load the shows for the first user on page load, taking into account the value of the checkbox
    var userId = userSelector.val();
    if (watchedCheck.is(':checked')) {
      $.get('/users/' + userId + '/shows', function(data) {
        $('#shows-container').html(data);
      });
    } else {
      $.get('/shows', function(data) {
        $('#shows-container').html(data);
      });
    }
  
    // Attach an event listener to the user selector
    userSelector.on('change', function() {
      var userId = userSelector.val();
      if (watchedCheck.is(':checked')) {
        $.get('/users/' + userId + '/shows', function(data) {
          $('#shows-container').html(data);
        });
      } else {
        $.get('/shows', function(data) {
          $('#shows-container').html(data);
        });
      }
    });
  
    // Attach an event listener to the checkbox
    watchedCheck.on('change', function() {
      var userId = userSelector.val();
      if (this.checked) {
        $.get('/users/' + userId + '/shows', function(data) {
          $('#shows-container').html(data);
        });
      } else {
        $.get('/shows', function(data) {
          $('#shows-container').html(data);
        });
      }
    });

    // Attach an event listener to the checkbox inputs in the shows container
    showsContainer.on('change', 'input[type=checkbox]', function() {
        // Get the ID of the show that was clicked
        var showId = $(this).attr('id').replace('show-', '').replace('-watched', '');

        // Get the checked state of the checkbox
        var watched = $(this).prop('checked');

        // Make an AJAX request to update the UserShow record for the show
        $.ajax({
          url: `/users/${userSelector.val()}/shows/${showId}`,
          method: 'PUT',
          data: { watched: watched },
          success: function() {
            // Update the HTML of the shows container with the new data
            $.get(`/users/${userSelector.val()}/shows`, function(data) {
              showsContainer.html(data);
            });
          }
        });
    });
  });