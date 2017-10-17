$(document).ready(function() {

  console.log('jQuery running');

  function buildCard(fname, lname, desc) {
    if ( !desc ) {
      desc = "No description provided"
    };
    var card = `<div class="contact">`;
        card += `<h1 class="center">${fname} ${lname}</h1>`;
        card += `<p class="center">Click for description!</p>`
        card += `<p class="hidden">${desc}</p>`
        card += `</div>`
    return card;
  }

  function clearUserForm() {
    $('#first_name').val('');
    $('#last_name').val('');
    $('#description').val('');
  }

  $(document).on('click', '.contact', function() {
    $(this).children().toggle();
  });

  $('form.add_user').submit(function() {
    if ( !$('#first_name').val() || !$('#last_name').val() ) {
      alert('First name and last name are both required to add a contact');
      return false;
    }
    var contactCard = buildCard(
      $('#first_name').val(),
      $('#last_name').val(),
      $('#description').val()
    );
    $('#contact_list').append(contactCard);
    clearUserForm();
    return false;
  });

});
