//A custom table that lists all Central Indiana guides and the guide's owner

//1. Call API to return list of guides for Central Indiana

var lgAPI = "http://lgapi.libapps.com/1.1/guides/?site_id=103&key=83d416dc1ba38e91c12fee5de29a4527&expand=owner,subjects&tag_names[]=Central%20Indiana%20Region&status[]=1&sort_by=name&sort_dir=asc";


//2. inject guide title and owner name into HTML

function displayProfile(data){

    $.each(data, function(i, guide){
      
      var guidesList;
      
      guidesList += '<tr><td>';
      guidesList += guide.name;
      
      if(guide.subjects) {
        guidesList += '</td><td>';
        guidesList += guide.subjects[0].name;
        guidesList += '</td><td>';
      } else {
        guidesList += '</td><td>&nbsp;</td><td>'
      }
      
      guidesList += guide.owner.first_name;
      guidesList += ' ';
      guidesList += guide.owner.last_name;
      guidesList += '</td></tr>';
      
      $('#guideTable').append(guidesList);
      
    });
}

//3. Load
$.getJSON(lgAPI, displayProfile);
