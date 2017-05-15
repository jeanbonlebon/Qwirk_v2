$(function() {

    $("#friendList li a").click(function (e) {
        e.preventDefault();
        var username = $(this).text();
        console.log(username);
        var parameters = { data : username };
        $('#loader').show();
      $.get('/users/'+username, parameters, function(data) {
        }).done(function (data) {
            friendData(data);
            $('#loader').hide();
            //targetElement.parent('a').next('.preloader').next('.check').show();
            console.log('done !');
        }).fail(function (jqXHR, textStatus) {
            //targetElement.parent('a').next('.preloader').hide();
            //targetElement.parent('a').show();
            console.log('fail !');
        });


    });
});

Handlebars.registerHelper('toJSON', function(obj) {
  return JSON.stringify(obj);
});

function friendData(data2){

    var source;
    var template;
    var html;

    $.ajax({
        url: '/views/componements/friend.handlebars',
        cache: true,
        success: function(data) {
            source    = data;
            template  = Handlebars.compile(source);
            html = template(data2);
            $('#playground').html(html);
        }
    });

  /*
    var templateSource = $("#friend-template").html(),
        template = Handlebars.compile(templateSource),
        friend = template(data);
        console.log(data);
        console.log(templateSource);
        console.log(friend);
*/      /*
        console.log(data);
        //$("#result").load("ajax/test.html");
        var rawTemplate = '{{#each selectedUser}}'+
                          '<p>{{username}}</p>'+
                          '{{/each}}';
        var compiledTemplate = Handlebars.compile(rawTemplate);
        var html = compiledTemplate(data);

    $('#playground').html(html);
    */
}